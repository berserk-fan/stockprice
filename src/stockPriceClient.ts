import {RequestMaker, FUNCTION, Price} from './types'
import {defaultRequestMaker} from './requestMaker'

function clientMaker(requestMaker : RequestMaker) {
    return new StockPriceClient(requestMaker)
}

class StockPriceClient{
    constructor(private requestMaker = defaultRequestMaker) {}

    getPrice(symbol: string, restParams ?: any) : Promise<Price> {
        if(symbol === 'MSFT') {
            return Promise.resolve({price : '123'})
        } else {
            return Promise.reject(Error('UNKNOWN SYMBOL'))
        }
    }
}

export default clientMaker