const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT
const { ROLE, users } = require('./data')
const { authUser, authRole } = require('./basicAuth')

app.use(express.json())
app.use(setUser)
app.use('/projects', require('./routes/projects'))

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('/dashboard', authUser, (req, res) => {
  res.send('Dashboard Page')
})

// first a user need to be auth, then have a role 
app.get('/admin', authUser, authRole(ROLE.ADMIN), (req, res) => {
  res.send('Admin Page')
})

function setUser(req, res, next) {
  const userId = req.body.userId
  if (userId) {
    req.user = users.find((user) => user.id === userId)
  }
  next()
}

app.listen(port, () => console.log(`App listening on port ${port}`))
