const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const { dbURI } = require('../config/environment')
const Project = require('../models/project')

mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true }, (err, db) => {
  if (err) return console.log(err)
  db.dropDatabase()
    .then(() => {
      return Project.create([
        {

          title: 'Tetris',
          start: new Date(2019, 3, 31,),
          end: new Date(2019, 4, 6,),
          allDay: true,
          resource: 'https://github.com/Lily-La-Day/sei-project-one-tetris',
          gist: 'Lily-La-Day/7b10218f751069397c48f8a8922cc92f',
          url: 'https://lily-la-day.github.io/sei-project-one-tetris/'


        },
        {

          title: 'Snake',
          start: new Date(2019, 4, 8,),
          end: new Date(2019, 4, 10,),
          allDay: true,
          resource: 'https://github.com/Lily-La-Day/snake',
          gist: 'Lily-La-Day/d779d2a5295d3e3417c07d6cef33af4c',
          url: 'https://lily-la-day.github.io/snake/'


        },
        {

          title: 'Who Dat?',
          start: new Date(2019, 5, 19,),
          end: new Date(2019, 5, 22,),
          allDay: true,
          resource: 'https://github.com/Lily-La-Day/sei-project-two',
          gist: 'Lily-La-Day/28c65579b2daa008f1d3e84f098b54a4',
          url: 'https://who--dat.herokuapp.com/'


        },
        {

          title: 'Beatle-Maniacs',
          start: new Date(2019, 6, 1,),
          end: new Date(2019, 6, 7,),
          allDay: true,
          resource: 'https://github.com/Lily-La-Day/beatle-maniacs',
          gist: 'Lily-La-Day/79c09dcf703141f791563b577261d08b',
          url: 'https://beatle-maniacs.herokuapp.com/'


        },
        {

          title: 'Stranger Things',
          start: new Date(2019, 6, 6),
          end: new Date(2019, 6, 13),
          allDay: true,
          resource: 'https://github.com/Lily-La-Day/sei-group-project-forked',
          gist: 'Lily-La-Day/3b5435660057df2f2ac69dcfe3c3f300',
          url: 'https://stranger--things.herokuapp.com/'


        },
        {

          title: 'Haiku Who?',
          start: new Date(2019, 6, 19),
          end: new Date(2019, 6, 22),
          allDay: true,
          resource: 'https://github.com/Lily-La-Day/haiku-who',
          gist: 'Lily-La-Day/d74c32cbf97eebb321d1e37fb94f3562',
          url: 'https://haiku-who.herokuapp.com/'


        },


        {

          title: 'am i write?',
          start: new Date(2019, 6, 24),
          end: new Date(2019, 6, 31),
          allDay: true,
          resource: 'https://github.com/Lily-La-Day/project-four',
          gist: 'Lily-La-Day/f171a5f3ab3f243eafec4789e68cce56',
          url: 'https://am-i-write.herokuapp.com/'



        },
        {

          title: 'Tetris Take Two',
          start: new Date(2019, 7, 3),
          end: new Date(2019, 7, 3),
          allDay: true,
          resource: 'https://github.com/Lily-La-Day/sei-project-one-tetris/blob/master/scripts/take-two.js',
          gist: 'Lily-La-Day/7b10218f751069397c48f8a8922cc92f',
          url: 'https://lily-la-day.github.io/sei-project-one-tetris/'

        },
        {

          title: 'Lily La Day',
          start: new Date(2019, 7, 10),
          end: new Date(2019, 7, 12),
          allDay: true,
          resource: 'https://github.com/Lily-La-Day/lily-la-day',
          gist: 'Lily-La-Day/78b46bfb20a0addfa2341cb8da94f03a',
          url: 'http://lily-la-day.com/'


        },
        {

          title: 'Bang Employed',
          start: new Date(2019, 7, 12),
          end: new Date(),
          allDay: true,
          resource: 'https://github.com/Lily-La-Day/bang-employed',
          gist: 'Lily-La-Day/c1ab64d20357e4dc199676a9b33afe34',
          url: 'www.bang-employed.com'


        }

      ])
    })
    .then(() => console.log('project galore (well not quite)!'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())

})
