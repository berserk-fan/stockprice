import express from 'express'

const app = express()

app.all('/api')

app.get('/v1/prices', (req, res) => {
   res.send('Hello world!')
})

export default app