import pgp from 'pg-promise'

export default () => {
  return pgp()(
    `postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@host:port/database`,
  )
}
