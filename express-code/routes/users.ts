import { Router, Request, Response, NextFunction } from 'express'
const router: Router = Router()

/* GET users listing. */
router.get('/', function (req: Request, res: Response, _next: NextFunction) {
  res.send('respond with a resource')
})

export default router
