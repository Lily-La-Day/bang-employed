const Project = require('../models/project')



function index(req, res) {
  Project
    .find(req.query)
    .then(projects => res.status(200).json(projects))
    .catch(err => console.log(err))
}

function showProject(req, res) {
  Project
    .findById(req.params.id)

    .then(project => {
      if(!project) throw new Error('Not Found')
      return res.status(200).json(project)
    })
    .catch(err => console.log(err))
}

function createDay(req, res) {
  Project
    .create(req.body)
    .then(track => res.status(201).json(track))
    .catch(err => console.log(err))
}




module.exports = {
  index: index,
  showProject: showProject,
  createDay: createDay
}
