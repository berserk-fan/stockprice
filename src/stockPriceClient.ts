import {RequestMaker, FUNCTION, Price} from './types'
import {defaultRequestMaker} from './requestMaker'
export interface StockPriceClient {
    getPrice(symbol: string, restParams ?: any) : Promise<Price>
}

class StockPriceClientImpl implements StockPriceClient{
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

export function makeClient(requestMaker : RequestMaker) {
    return new StockPriceClientImpl(requestMaker)
}

const defaultClient : StockPriceClient = makeClient(defaultRequestMaker)
export default defaultClient;