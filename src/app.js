import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Nav from './components/common/Nav'
import Footer from './components/common/Footer'
import Home from './components/common/Home'
import Day from './components/Days/Day'
import NewDay from './components/Days/NewDay'
import './style.scss'





const App = () => {
  return (
    <BrowserRouter>
      <main>
        <div>
          <Nav />
          <Switch>
            <Route path='/days/daybyday' component={NewDay} />

            <Route path='/days/:id' component={Day} />
            <Route path='/days' component={Home} />


          </Switch>
          <Footer/>
        </div>
      </main>
    </BrowserRouter>

  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
