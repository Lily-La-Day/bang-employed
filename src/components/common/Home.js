import React from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'




const localizer = momentLocalizer(moment)
class Home extends React.Component {
  constructor() {
    super()

    this.state = { projects: null, selected: null }



  }

  // redirect() {
  //   if(!this.state.selected) return null
  //   console.log(this.state.selected._id)
  //   return <Redirect to={`/days/${this.state.selected._id}`} />
  // }

  getData(){
    axios.get('/api/projects')
      .then(res => this.setState({ projects: res.data }))
      .catch(err => console.log(err))

  }

  componentDidMount() {
    this.getData()

  }

  // componentDidUpdate() {
  //   this.redirect()
  // }




  render() {
    if(!this.state.projects) return null
    if(this.state.selected) {
      console.log(this.state.selected._id)
      return <Redirect to={`/days/${this.state.selected._id}`} />
    }

    return(

      <div className="calendarContainer /''">
        <Calendar
          events={this.state.projects && this.state.projects.map(event => event)}

          views={['month']}
          step={60}
          startAccessor="start"
          endAccessor="end"
          showMultiDayTimes

          onSelectEvent={(event) => {

            this.setState({ selected: event })

          }}
          // onSelectEvent={event =>  <Link to={event.resource}/>}
          defaultDate={new Date()}

          localizer={localizer}
        />

      </div>
    )
  }



}

export default Home
