import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Admin from './pages/Administration'
import SignIn from './pages/Sign-in'
import Home from './pages/Home'
import SignUp from './pages/Sign-Up'
import Checkout from './pages/Checkout'
import Products from './pages/Product'
import Users from './pages/Users'
import Sales from './pages/Sales'
import Facturation from './pages/Facturation'
import ProductAdmin from './pages/ProductAdmin'
import CartModal from './components/Cart/CartModal'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/ordenes-de-compra" component={Admin} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/products" component={Products} />
          <Route path="/users" component={Users} />
          <Route path="/deliverer" component={Sales} />
          <Route path="/billing" component={Facturation} />
          <Route path="/cataloger" component={ProductAdmin} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
