export type Price = {
    symbol: string,
    open: number,
    high: number,
    low: number,
    latestDay: string,
    previousClose: number,
    change: number,
    changePercent: number
}

export enum FUNCTION {
    GLOBAL_QUOTE = 'GLOBAL_QUOTE'
}

export type BaseParams = {
    function : FUNCTION,
}

export type GlobalQuoteParams = {symbol : string} & BaseParams

export type RequestMaker = (params : BaseParams) => Promise<any>
