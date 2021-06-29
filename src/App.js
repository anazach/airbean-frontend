import { Route, Switch } from 'react-router-dom'
import Homepage from './views/Homepage'
import Menu from './views/Menu'
import About from './views/About'
import Profile from './views/Profile'
import Orderstatus from './views/Orderstatus'
import './style/main.scss'

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Homepage} />
      <Route path='/menu' component={Menu} />
      <Route path='/about' component={About} />
      <Route path='/profile' component={Profile} />
      <Route path='/status' component={Orderstatus} />
    </Switch>
  )
}

export default App
