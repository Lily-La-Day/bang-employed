import React from 'react'
import axios from 'axios'


class NewDay extends React.Component {
  constructor() {
    super()

    this.state = { data: { start: new Date(), end: new Date(), allDay: true} }

    this.handleChange = this.handleChange.bind(this)
    this.handleChangeResource = this.handleChangeResource.bind(this)
    this.handleChangeGist = this.handleChangeGist.bind(this)
    this.handleChangeURL = this.handleChangeURL.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)


  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value }

    this.setState({ data, error: '', title: value})

  }

  handleChangeResource({ target: { name, value }}) {
    console.log(value)
    const data = {...this.state.data, [name]: value }

    this.setState({ data, error: '', resource: value })

  }

  handleChangeGist({ target: { name, value }}) {
    console.log(value)
    const data = {...this.state.data, [name]: value }

    this.setState({ data, error: '', gist: value })

  }

  handleChangeURL({ target: { name, value }}) {
    console.log(value)
    const data = {...this.state.data, [name]: value }

    this.setState({ data, error: '', url: value })

  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.data)
    axios.post('/api/projects', this.state.data)
      .then(()=> {

        this.props.history.push('/days')
      })
      .catch(() => this.setState({ error: 'Invalid Crendentials'}))
  }





  render(){

    return (
      <main>
        <form className="form-style" onSubmit={this.handleSubmit} >
          <h3>Today</h3>

          <label className='label'>Name</label>
          <div className="control">
            <input
              onChange = {this.handleChange}
              className="input"
              name="title"
            />
          </div>
          <label className='label'>GitHub</label>
          <div className="control">
            <textarea
              onChange = {this.handleChangeResource}
              type="text"
              className="input"
              name="resource"
              rows="3"

            />
          </div>
          <label className='label'>Gist</label>
          <div className="control">
            <textarea
              onChange = {this.handleChangeGist}
              type="text"
              className="input"
              name="gist"
              rows="3"

            />
          </div>
          <label className='label'>URL</label>
          <div className="control">
            <textarea
              onChange = {this.handleChangeURL}
              type="text"
              className="input"
              name="url"
              rows="3"

            />
          </div>

          <button type="submit" className="button" > Create Day </button>


        </form>
      </main>
    )
  }
}

export default NewDay
