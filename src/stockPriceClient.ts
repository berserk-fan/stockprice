import {RequestMaker, FUNCTION, Price} from './types'
import {defaultRequestMaker} from './requestMaker'

function clientMaker(requestMaker : RequestMaker) {
    return new StockPriceClient(requestMaker)
}

class StockPriceClient{
    constructor(private requestMaker = defaultRequestMaker) {}

    async getPrice(symbol: string, restParams ?: any) : Promise<Price> {
        return {price : '123'}
    }
}

export default clientMaker