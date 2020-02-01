import client from '../src/stockPriceClient'
import { BaseParams, FUNCTION } from './types'
import { AxiosResponse } from 'axios'
import { RequestMaker } from '../src/types'

describe('StockPriceAPI', () => {
    
    const mock : RequestMaker = (params) => {
        return Promise.resolve({"Global Quote" : {"05. price" : '123'}})
    }
    
    const api = client(mock)

    describe('getPrice', () => {
        it('should not return undefined', () => {
            return expect(api.getPrice('MSFT')).resolves.toBeDefined()
        }) 
    })
})