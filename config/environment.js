const port = process.env.PORT || 4000
const dbURI =  'mongodb://localhost/projects'
const secret = process.env.SECRET || 'secret sauce'

module.exports = {
  port: port,
  dbURI: dbURI,
  secret: secret
}
