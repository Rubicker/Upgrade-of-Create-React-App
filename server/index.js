import express from 'express'
import serverRenderer from './middleware/renderer'
import { constants } from 'zlib';

const PORT = 3000
const path = require('path')

// 初始化项目并创建路由
const app = express()
const router = express.Router()

// 首页 '/' 采用服务端渲染，其余页依旧采用客户端渲染
router.use('^/$', serverRenderer)
router.use(express.static(
  path.resolve(__dirname, '..', 'build'),
  { maxAge: '30d' }
))

app.use(router)

app.listen(PORT, (error) => {
  if (error){
    return console.log('something wrong happend', error)
  }

  console.log(`listening on ${PORT} ...`)
})