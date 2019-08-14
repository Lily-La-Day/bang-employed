const mongoose = require('mongoose')



const projectSchema = new mongoose.Schema({

  title: {type: String, required: true, unique: true},
  start: {type: Date, required: true},
  end: {type: Date, required: true},
  allDay: {type: Boolean, required: true},
  resource: {type: String},
  gist: {type: String},
  url: {type: String}




}, {
  timestamps: true
})

projectSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Project', projectSchema)
