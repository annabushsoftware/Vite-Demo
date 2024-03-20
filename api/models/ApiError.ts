import { ApiErrorType, ApiErrorMap } from '../config/error.ts'

class ApiError extends Error {
  type: string
  meta: object
  statusCode: number

  constructor(type: keyof typeof ApiErrorType, meta: object) {
    super(type)

    this.type = type
    this.meta = meta
    this.statusCode = ApiErrorMap[type]
  }
}

export default ApiError
