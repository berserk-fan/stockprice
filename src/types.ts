export type Price = {
    price : String
}

export enum FUNCTION {
    GLOBAL_QUOTE = 'GLOBAL_QUOTE'
}

export type BaseParams = {
    function : FUNCTION,
}

export type GlobalQuoteParams = {symbol : string} & BaseParams

export type RequestMakerResponse = {data : any}
export type RequestMaker = (params : BaseParams) => Promise<RequestMakerResponse>
