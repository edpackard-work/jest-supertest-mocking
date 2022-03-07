import MyRouter from '../routers/router'

import request from 'supertest'
import express from 'express'

let router = new MyRouter

const app = express();
app.use('/', router.getRouter())

describe('good route - not mocked', () => {
  test('responds correctly to get /', async() => {
    console.log('Starting the test without mocking')
    const res = await request(app).get('/')
    expect(res.statusCode).toBe(200)
    expect(res.body).toBe('Data from the controller')
  })
})