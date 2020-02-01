import stockAxios from './configs/stockAxios'

import {BaseParams, RequestMaker} from './types'
import { AxiosResponse } from 'axios'

export const defaultRequestMaker : RequestMaker = 
function callExtenalAPI(params: BaseParams) : Promise<AxiosResponse> {
    return stockAxios.get("/query", {"params" : params})
}