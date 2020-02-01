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

        afterAll(() => nock.restore())
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



    describe('real call with  params : function = GLOBAL_QUOTE, symbol = MSFT', () => {
        const params : GlobalQuoteParams = {
            "function" : FUNCTION.GLOBAL_QUOTE,
            "symbol" : 'MSFT'
        }

        describe('format', () => {
            it('should contain "Global Quote" property', () => {
                return expect(defaultRequestMaker(params).then(res => res.data))
                    .resolves.toHaveProperty('Global Quote')
            })

            it('should contain "Global Quote"."05. price" property', () => {
                return expect(defaultRequestMaker(params).then(res => res.data))
                    .resolves.toHaveProperty(['Global Quote', '05. price'])
            })
        })
    })
})