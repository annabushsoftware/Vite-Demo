import express from 'express'
import fs from 'fs/promises'
import path from 'path'

const router = express.Router()
const environment = process.env.NODE_ENV

router.get('/*', async (_req, res) => {
  const data = {
    environment,
    manifest: await parseManifest(),
  }

  res.render('index.html.ejs', data)
})

const parseManifest = async () => {
  if (environment !== 'production') return {}

  const manifestPath = path.join(path.resolve(), 'dist/.vite/manifest.json')
  const manifestFile = await fs.readFile(manifestPath)
  console.log('manifest file: ', manifestFile.toString())

  return JSON.parse(manifestFile.toString())
}

export default router
