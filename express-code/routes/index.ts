import { Router, Request, Response, NextFunction } from 'express'
const router: Router = Router()

/* GET home page. */
router.get('/', function (req: Request, res: Response, _next: NextFunction) {
  res.render('index', { title: 'Express' })
})

export default router
