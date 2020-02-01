import {RequestMaker, FUNCTION, Price} from './types'
import {defaultRequestMaker} from './requestMaker'

function clientMaker(requestMaker : RequestMaker) {
    return new StockPriceClient(requestMaker)
}

class StockPriceClient{
    constructor(private requestMaker = defaultRequestMaker) {}

    async getPrice(symbol: string, restParams ?: any) : Promise<Price> {
        const baseParams= {
            "function" : FUNCTION.GLOBAL_QUOTE,
            "symbol": symbol,
        }
        const params = Object.assign(baseParams, restParams)
        const res = await this.requestMaker(params)
        return {price : res.data["Global Quote"]["05. price"]}
    }
}

export default clientMaker