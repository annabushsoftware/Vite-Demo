export const HttpError = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
}

export const ApiErrorType = {
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  INVALID_PARAMS: 'URL_PARAMS_NOT_VALID',
  POST_DATA_NOT_VALID: 'POST_DATA_NOT_VALID',
  OBJECT_NOT_FOUND: 'OBJECT_NOT_FOUND',
  COULD_NOT_CONNECT_TO_DB: 'COULD_NOT_CONNECT_TO_DB',
  COULD_NOT_SAVE_OBJECT: 'COULD_NOT_SAVE_OBJECT',
  COULD_NOT_FIND_OBJECTS: 'COULD_NOT_FIND_OBJECTS',
  COULD_NOT_DELETE_OBJECT: 'COULD_NOT_DELETE_OBJECT',
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
}

export const ApiErrorMap = {
  [ApiErrorType.INVALID_PARAMS]: HttpError.BAD_REQUEST,
  [ApiErrorType.POST_DATA_NOT_VALID]: HttpError.BAD_REQUEST,
  [ApiErrorType.OBJECT_NOT_FOUND]: HttpError.NOT_FOUND,
  [ApiErrorType.COULD_NOT_CONNECT_TO_DB]: HttpError.INTERNAL_SERVER_ERROR,
  [ApiErrorType.COULD_NOT_SAVE_OBJECT]: HttpError.INTERNAL_SERVER_ERROR,
  [ApiErrorType.COULD_NOT_DELETE_OBJECT]: HttpError.INTERNAL_SERVER_ERROR,
  [ApiErrorType.COULD_NOT_FIND_OBJECTS]: HttpError.INTERNAL_SERVER_ERROR,
  [ApiErrorType.UNAUTHORIZED]: HttpError.UNAUTHORIZED,
  [ApiErrorType.FORBIDDEN]: HttpError.FORBIDDEN,
  [ApiErrorType.INTERNAL_SERVER_ERROR]: HttpError.INTERNAL_SERVER_ERROR,
}
