import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Admin from './pages/Administration'
import SignIn from './pages/Sign-in'
import Home from './pages/Home'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
