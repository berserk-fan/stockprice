/**
 * @jest-environment node
 */

import {defaultRequestMaker} from '../src/requestMaker'
import {FUNCTION, GlobalQuoteParams } from '../src/types'
import { AxiosResponse } from 'axios'
import nock from 'nock'

describe('defaultRequestMakerv1', () => {
    describe('url that request maker uses', () => {
        const url = 'https://www.alphavantage.co'
        const path = '/query'

        afterEach(() => {
            nock.cleanAll()
        })

        it('should add apikey to request params', async () => {
            nock(url)
            .get(/apikey=[^&]*/)
            .reply(200, {})

            const res = await defaultRequestMaker({function : FUNCTION.GLOBAL_QUOTE})
            expect(res.data).toEqual('{}')
        })

        it('should have /query path', async () => {
                nock(url)
            .get(/\/query/)
            .reply(200, {})
            const res = await defaultRequestMaker({function : FUNCTION.GLOBAL_QUOTE})
            expect(res.data).toEqual('{}')
        })

    })



    describe('call with  params : function = GLOBAL_QUOTE, symbol = MSFT', () => {
        const params : GlobalQuoteParams = {
            "function" : FUNCTION.GLOBAL_QUOTE,
            "symbol" : 'MSFT'
        }

        afterEach(() => {
            nock.cleanAll()
        })

        

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