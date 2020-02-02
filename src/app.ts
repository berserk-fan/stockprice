import express from 'express'
import {StockPriceClient} from './stockPriceClient'

function makeApp(client: StockPriceClient) {
   const app = express()
   
   app.get('/api/v1/prices', (req, res) => {
      res.json({price : '1234'})
   })

   return app
}

export default makeApp