import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Admin from './pages/Administration'
import SignIn from './pages/Sign-in'
import Home from './pages/Home'
import SignUp from './pages/Sign-Up'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/admin" component={Admin} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
