
# BANG EMPLOYED



**By me, Lily Day, a junior full-stack web developer just "graduated" from code school and currently !employed.**

This API has been created so that I may continue to play with databases while ostensibly still doing something vaguely job hunt related in that this is also sort of like a "portfolio".

I don't like the word portfolio, that is why I have put it in quotes. Well and also because it's not really my portfolio, my real portfolio is here:

https://lily-la-day.com/ 

-have a look, it's pretty fun (if I do say so myself). 

This website will be less fun, well to anybody other than me. I've made it public only so I feel obliged to post things regularly, I've found that even if no-one is watching and/or caring that sense (no matter how deluded) of the appraising public eye is enough to ensure that I live up to my commitments. 

So that is what I am doing here, publically declaring my intention to post a new thing (nice and vague yes) on this app pretty much daily (hence the calendar layout). 

These things will hopefully be in some way related to job hunting/learning. I'm envisioning coding challenge practice exercises and similar. Maybe some other more creative stuff too but who knows, that may be pushing it. I will only give myself a day for each thing as I've found this a a good tactic in the past. Not sure how this will pan out (as anyone who has coded anything ever knows that) things take (on average) 14 jazillion times longer than anticipated.

The ongoing, non-daily project will be this website itself. So first thing's first I'll just do a little readme style explanation of what I've done so far. 

## Built using


||||
|--- |--- |--- |
|React|JavaScript(ES6)|SCSS|
|MongoDB|Mongoose|react-big-calendar
|Node.js|Webpack|Yarn
|bcrypt|jsonwebtoken|axios
|body-parser|file-loader|

(so far)

## Deployment

The app is deployed on Heroku, though I have a nice custom domain name because I'm professional like that now:

https://bang-employed.herokuapp.com/ 
https://bang-employed.com/ . 

Despite being deployed it is still very much "under construction", that's sort of the whole point. If you notice that things don't work, it may the case that they don't work yet or it may be the case that they are broken. 

The styling does also leave a lot to be desired. I should confess at this early juncture that I don't enjoy styling and although I value it and recognise its importance and would love to love it. I don't. I therefore don't really want a job that involves doing much of it so it won't be something I prioritise (here or ever). Sorry about that.

### The Models and Controllers

The back-end/ database of this website is a collection of all the things I have developed (well the project things, not every single little thing) since starting the SEI bootcamp at the end of May this year. 

My project model looks like this 

```const projectSchema = new mongoose.Schema({

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
```

I have used react-big-calendar to create the calendar layout. The componenent used within the main index takes an "event" prop, my projects are being fed to the calendar as events and the first five keys on my model correspond to those dictated by the calendar documentation (which can be seen here: https://www.npmjs.com/package/react-big-calendar).

<img src="https://i.ibb.co/5v1MQNS/Screenshot-2019-08-15-at-07-46-00.png" width="800">

So to create my main page I simply make an axios request to my database, set the events/projects in state and then to display the calendar component, mapping/looping through the events.

    ```<Calendar
          events={this.state.projects && this.state.projects.map(event => event)}
          views={['month']}
          step={60}
          startAccessor="start"
          endAccessor="end"
          showMultiDayTimes
          onSelectEvent={(event) => {

            this.setState({ selected: event })

          }}
          defaultDate={new Date()}
          localizer={localizer}
        />```
        
        
 As you can see, I have also included functionality so that a selected event is set in state which then conditionally renders a react Redirect to the corresponding event component. 


Each "show page", (you  could be on one now) is (at this time of writing at least) composed of an Iframe of the hosted project, the readme (actually a gist that I had to create separately as github does not allow Iframes). And then links to the hosted site and to the main gitHub repo. 

The other bit of the app is only accessible/relevant to me but I will tell you all about it anyway. I have created a "User" model, but the only user is me. So I haven't bothered making a register funtion or page or even a proper login, I've hardcoded in a a username so that the database at least has something to look me up by (tried to use just a password first time around but I think there needs to be something to look up to then compare the password to if that makes sense? Could well be wrong here though). But anyhow, I only need to enter my password to login. 

I have made myself a nice "create day" page though so I can enter my projects onto the app wherever I am. 

(I have wrapped this bit in a secure route function so only logged in users (ie me) will ever see it)

<img src="https://i.ibb.co/K5SgZY2/Screenshot-2019-08-15-at-07-38-11.png" width="600" />

At this point you may be wondering what the point of this is. I have essentially created a very convoluted data-basey wrapper for gitHub that will undoubtedly be slower and less user friendly than the original. 

Well you are right to wonder about this as essentially there is no point. I just wanted to make a database as I like databases and want the practice. So that's it. 

(Oh and I haven't yet worked out how/if it's possible to change the format of these gist snippets displayed here so sorry about the weird central alignment and unnecassary heavy font-weight. I will work on this but bear in mind that thing I said before about styling.)
