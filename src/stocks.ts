import {RequestMaker, FUNCTION, Price} from './types'
import {defaultRequestMaker} from './requestMaker'

function requestMakerUser(thingThatMakesRequest = defaultRequestMaker) {
    return new StockApi(thingThatMakesRequest)
}   

class StockApi{
    constructor(private requestMaker : RequestMaker) {

    }

    getSymbol(keyWord: string) {

    }

    getPrice(symbol: string, restParams ?: any) : Promise<Price> {
        const baseParams= {
            "function" : FUNCTION.GLOBAL_QUOTE,
            "symbol": symbol,
        }
        
        const params = Object.assign(baseParams, restParams)
    
        return this.requestMaker(params).then((res) => this.convertResponse(res))
    }

    private convertResponse(response: string) : any {

    }
}

export const API = requestMakerUser