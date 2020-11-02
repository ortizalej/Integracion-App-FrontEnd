import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListUserComponent from "./user/ListUserComponent";
import AddUserComponent from "./user/AddUserComponent";
import EditUserComponent from "./user/EditUserComponent";
import './App.css';
import Admin from './pages/Administration'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={ListUserComponent} />
          <Route path="/users" component={ListUserComponent} />
          <Route path="/add-user" component={AddUserComponent} />
          <Route path="/edit-user" component={EditUserComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
