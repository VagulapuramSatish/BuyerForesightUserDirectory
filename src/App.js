import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Users from './components/Users'
import UserItemDetails from './components/UserItemDetails'
import Header from './components/Header'
import Menu from './components/Menu'
import './App.css'

const App = () => {
  return (
    <>
      <Header />
      <div className="user-container">
      <Menu />
      <BrowserRouter>
        <Switch>
          <Route exact path="/users" component={Users} />
          <Route path="/users/:id" component={UserItemDetails} />
          <Redirect from="/" to="/users" />
        </Switch>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
