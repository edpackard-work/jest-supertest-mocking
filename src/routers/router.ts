import { Router } from 'express'
import MyController from '../controllers/controller';

class MyRouter {

  private myRouter: Router
  private myController: MyController

  constructor(controller: MyController = new MyController) {
    this.myController = controller
    this.myRouter = Router();
    this.setUpRouter();
  }

  private setUpRouter() {
    this.myRouter.get('/', (_, res) => {
      const myData = this.myController.getData()
      res.status(200).json(myData)
    })
  }

  getRouter() {
    return this.myRouter
  }

}

export default MyRouter