import chai from 'chai'
import app from '../src/app'
import chaiHttp from 'chai-http'

chai.use(chaiHttp)

describe.skip('API', () => {
    it('should return price',(done) => {
        chai.request(app)
            .get('/api/v1/prices')
            .then(res => {
                console.log(res.body)
                res.body.should.be.json
            })
    })
})