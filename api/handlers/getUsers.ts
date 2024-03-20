// import getDb from '../utils/getDb'

export default async () => {
  console.log('get users')

  //   const db = getDb()
  //   db.one('SELECT $1 AS value', 123)
  //   .then((data) => {
  //     console.log('DATA:', data.value)
  //   })
  //   .catch((error) => {
  //     console.log('ERROR:', error)
  //   })

  return { data: 'hey' }
}

// const getUsers = async (req) => {
//     await connectToDB()
//     const users = await User.find()
//     return { data: users }
//   }
