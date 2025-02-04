/*
  Created with initial setup instructions (especially concerning connection of frontend and backend):
  https://blog.codeminer42.com/making-a-full-stack-app-with-vue-vite-and-express-that-supports-hot-reload/
*/
import express from 'express'
import path from 'path'
import uiRouter from './uiRouter.ts'
import assetsRouter from './assetsRouter.ts'
import endpoint from './utils/endpoint.ts'

import getUsers from './handlers/getUsers.ts'

const app = express()
const port = process.env.PORT || 3000

app.get('/api/v1/hello', (_req, res) => {
  res.json({ message: 'Hello API!' })
})

app.get('/api/users', endpoint(getUsers))

/*
  order matters - this section must be after all API calls
*/

// serve public folder and assets in /src dir
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

// Log when running
app.listen(port, () => {
  console.log('Server listening on port', port)
})
