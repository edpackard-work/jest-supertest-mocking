import MyRouter from '../routers/MyRouter'
import MyController from '../controllers/MyController'

jest.mock('../controllers/MyController')
const mockedMyController = (MyController as unknown) as jest.Mock<MyController>
let mockController: MyController

import request from 'supertest'
import express from 'express'

mockController = new mockedMyController

let router = new MyRouter(mockController)

const app = express();
app.use('/', router.getRouter())

describe('good route - mocked', () => {

  test('responds correctly to get /', async() => {
    console.log("Starting the test with mocking")
    jest.spyOn(mockController, 'getData').mockReturnValue('Data from the *mocked* controller')
    const res = await request(app).get('/')
    expect(res.statusCode).toBe(200)
    expect(mockController.getData).toHaveBeenCalled()
    expect(res.body).toBe('Data from the *mocked* controller')
  })
})

