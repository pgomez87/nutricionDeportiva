import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@nd.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: 'true',
  },
  {
    name: 'Julio Castro',
    email: 'jc@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Marta Alvarado',
    email: 'ma@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
