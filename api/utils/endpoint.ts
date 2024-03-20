import { HttpError } from '../config/error.ts'
import ApiError from '../models/ApiError.ts'

/**
 *
 * @param {function} method
 * @returns response
 */
const endpoint = (method: any) => async (req: any, res: any) => {
  try {
    // check if the user exists / is logged in
    // if (!req.user) {
    //   throw new ApiError('UNAUTHORIZED', {})
    // }

    const result = await method(req, res)
    if (result) {
      res.json(result)
    }
  } catch (error: ApiError | any) {
    const statusCode = error?.statusCode || HttpError.INTERNAL_SERVER_ERROR
    console.info('@@@error', error)
    res.status(statusCode).json({
      error: error?.type,
      meta: error?.meta,
    })
  }
}

export default endpoint
