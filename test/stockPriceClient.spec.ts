import client from '../src/stockPriceClient'
import { FUNCTION } from '../src/types'
import { RequestMaker } from '../src/types'

describe('StockPriceAPI', () => {

    let knownSymbol : string = Date.now().toString()
    
    const mock : RequestMaker = (params) => {
        if(params.function === FUNCTION.GLOBAL_QUOTE && params.symbol === knownSymbol) {
            return Promise.resolve({ data : {"Global Quote" : {"05. price" : '123'}}})
        } else {
           return Promise.reject(Error('Passed wrong params: ' + JSON.stringify(params))) 
        }
    }
    
    const api = client(mock)
    
    describe('getPrice', () => {        
        it('should not return undefined', () => {
            return expect(api.getPrice(knownSymbol))
                .resolves.toBeDefined()
        })

        it('should return object with price property', () => {
            return expect(api.getPrice(knownSymbol))
                .resolves.toHaveProperty('price')
        })

        it('should reject when given wrong symbol', () => {
            return expect(api.getPrice('WRONG SYMBOL'))
                .rejects.toEqual(expect.anything())
        })
    })
})