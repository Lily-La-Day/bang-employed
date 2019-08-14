import  React  from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Iframe from 'react-iframe'
import ReactEmbedGist from 'react-embed-gist'








class Day extends React.Component {
  constructor() {
    super()

    this.state = { project: null, markDown: '' }


  }


  getDay() {

    axios.get(`/api/projects/${this.props.match.params.id}`)
      .then(res => this.setState({ project: res.data }))
      .catch(err => console.log(err))


  }


  componentDidMount() {
    this.getDay()

  }



  render() {


    if(!this.state.project) return null

    return(
      <div className="show-project main">

        {this.state.project.url &&
          <section>

            <Iframe  url={this.state.project.url}
              width="600px"
              height="600"
              id="myId"
              className="preview"
              display="initial"
              position="relative"/>
            <Link to={this.state.project.url} className="preview-wrapper">Go to site.</Link>
          </section>}

        <button className="github-link"><a href={this.state.project.resource}> See on GitHub</a></button>



        {this.state.project.gist && <ReactEmbedGist id="gist"
          gist={this.state.project.gist}
          titleClass="title-small"
          wrapperClass="gist-wrapper"
        />}






      </div>
    )
  }
}

export default Day
