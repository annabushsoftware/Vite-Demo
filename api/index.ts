import express from 'express'
import path from 'path'
import uiRouter from './uiRouter.ts'
import assetsRouter from './assetsRouter.js'

const app = express()
const port = process.env.PORT || 3000

app.get('/api/v1/hello', (_req, res) => {
  res.json({ message: 'Hello API!' })
})

// order matters - this section must be after all API calls

// serve public folder and assets from /src dir
if (process.env.NODE_ENV === 'production') {
  const distPath = path.join(path.resolve(), 'dist')
  app.use('/', express.static(distPath))
} else {
  const publicPath = path.join(path.resolve(), 'public')
  app.use('/', express.static(publicPath))
  app.use('/src', assetsRouter)
}

// serve UI
app.use(uiRouter)

app.listen(port, () => {
  console.log('Server listening on port', port)
})
