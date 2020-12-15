import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import LoginPage from './pages/Login'
import HomePage from './pages/Home'
import ShowDataPage from './pages/showData'

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={LoginPage} />
        <Route path="/" exact component={HomePage} />
        <Route path="/showData" exact component={ShowDataPage} />
      </Switch>
    </Router>
  )
}

export default App
