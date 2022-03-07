import MyRouter from '../routers/router'
import MyController from '../controllers/controller'

import request from 'supertest'
import express from 'express'

let router = new MyRouter

const app = express();
app.use('/', router.getRouter())

describe('good route - not mocked', () => {
  test('responds correctly to get /', async() => {
    const res = await request(app).get('/')
    expect(res.statusCode).toBe(200)
    expect(res.body).toBe('Data from the controller')
  })
})