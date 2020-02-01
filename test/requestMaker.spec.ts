/**
 * @jest-environment node
 */

import {defaultRequestMaker} from '../src/requestMaker'
import {FUNCTION, GlobalQuoteParams } from '../src/types'
import { AxiosResponse } from 'axios'
import nock from 'nock'

describe('defaultRequestMakerv1', () => {
    describe('url that request maker uses', () => {
        afterEach(() => {
            nock.cleanAll()
        })

        it('should add apikey to request params', async () => {
            nock(/.*/)
            .get(/apikey=[^&]*/)
            .reply(200, {})
            
            
            return expect(defaultRequestMaker({function : FUNCTION.GLOBAL_QUOTE}))
                .resolves.toBeDefined()
        })

        it('should have /query path', async () => {
            nock(/.*/)
            .get(/\/query/)
            .reply(200, {})

            return expect(defaultRequestMaker({function : FUNCTION.GLOBAL_QUOTE}))
                .resolves.toBeDefined()

        })

        it('should have https://www.alphavantage.co baseURL', () => {
            nock('https://www.alphavantage.co')
            .get(/.*/)
            .reply(200, {})

            return expect(defaultRequestMaker({function : FUNCTION.GLOBAL_QUOTE}))
                .resolves.toBeDefined()
        })
    })



    describe('call with  params : function = GLOBAL_QUOTE, symbol = MSFT', () => {
        const params : GlobalQuoteParams = {
            "function" : FUNCTION.GLOBAL_QUOTE,
            "symbol" : 'MSFT'
        }

        afterEach(() => {
            nock.cleanAll()
        });

        it('should run without mistake', () => {
            const customData = { someField : 'some data'}
            
            return defaultRequestMaker(params)
            .then(response => expect(response).toBeDefined())
        })

        it.skip('should work without apikey param passed', async () => {
            let response : AxiosResponse = await defaultRequestMaker(params)

            console.log(response.data)
            expect(response.data).not.toHaveProperty('Error Message')
        })
    })
})