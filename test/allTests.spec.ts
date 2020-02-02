/**
 * @jest-environment node
 */

import makeApp from '../src/app'
import request from 'supertest'
import {StockPriceClient} from '../src/stockPriceClient'

describe('RESTlike API', () => {
    const clientMock : StockPriceClient = {
        getPrice : async (symbol, restParams) => {return {price: '1234'}}
    }

    const mockedApp = makeApp(clientMock)

    describe('/api/v1/prices', () => {
        it('should have 200 status', async () => {
            let res = await request(mockedApp)
                .get('/api/v1/prices')

            expect(res.status).toBe(200)
        })
    
        it('should return price', async () => {
            let res = await request(mockedApp)
                .get('/api/v1/prices')
            
            expect(res.body).toHaveProperty('price')
        })

        it('should return price as string', async () => {
            let res = await request(mockedApp)
                .get('/api/v1/prices')

            expect(res.body).toHaveProperty('price', expect.any(String))
        })
    })
})