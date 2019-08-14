const port = process.env.PORT || 4000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/projects'
const secret = process.env.SECRET || 'secret sauce'

module.exports = {
  port: port,
  dbURI: dbURI,
  secret: secret
}
