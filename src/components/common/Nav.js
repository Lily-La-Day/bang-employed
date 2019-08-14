import React from 'react'


import { Link, withRouter } from 'react-router-dom'

class Nav extends React.Component {
  constructor() {
    super()

    this.state = { }



  }




  render() {

    return(
      <nav className="navbar">


        <Link to="/days/daybyday" className="nav-item nav-three">Create Day</Link>
        <Link to="/days" className="nav-item nav-three">Calendar</Link>
        <Link to="/lily-la-day" className="nav-item nav-three">About Me</Link>



      </nav>
    )
  }
}

export default withRouter(Nav)
