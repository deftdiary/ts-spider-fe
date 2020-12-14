import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import LoginPage from './pages/Login'
import HomePage from './pages/Home'

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={LoginPage} />
        <Route path="/" exact component={HomePage} />
      </Switch>
    </Router>
  )
}

export default App
