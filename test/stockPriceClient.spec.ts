import client from '../src/stockPriceClient'
import { FUNCTION } from '../src/types'
import { RequestMaker } from '../src/types'

describe('StockPriceAPI', () => {

    const mock : RequestMaker = (params) => {
        if(params.function === FUNCTION.GLOBAL_QUOTE && params.symbol === 'MSFT') {
            return Promise.resolve({ data : {"Global Quote" : {"05. price" : '123'}}})
        } else {
           return Promise.reject(Error('Passed wrong params: ' + JSON.stringify(params))) 
        }
    }
    
    const api = client(mock)
    
    describe('getPrice', () => {
        it('should not return undefined', () => {
            return expect(api.getPrice('MSFT'))
                .resolves.toBeDefined()
        })

        it('should return object with price property', () => {
            return expect(api.getPrice('MSFT'))
                .resolves.toHaveProperty('price')
        })

        it('should reject when given wrong symbol', () => {
            return expect(api.getPrice('UNKNOWN EQUITY'))
                .rejects.toEqual(expect.anything())
        })
    })
})