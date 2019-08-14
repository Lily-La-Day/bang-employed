const router = require('express').Router()
const projects = require('../controllers/projects')


router.route('/projects')
  .get(projects.index)

router.route('/projects/:id')
  .get(projects.showProject)


router.route('/projects')
  .post(projects.createDay)


module.exports = router
