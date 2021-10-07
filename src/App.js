
import './App.css';
import Home from './Components/Home/Home';
import Navigation from './Components/Navbar/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Product from './Components/Products/Product'
import About from './Components/About/About';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Cart from './Components/Cart/Cart';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import Signup from './Components/Login/Signup';
import { AuthProvider } from './Components/AuthContext';
import PrivateRoute from './Components/Navbar/PrivateRoute';
import ForgotPassword from './Components/Login/ForgotPassword'

function App() {
  return (
    <AuthProvider>
    <Router>
    <Navigation/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/products" component={Product}/>
        <Route path="/aboutus" component={About}/>
        <Route path="/productDetails" component={ProductDetails}/>
        <PrivateRoute path="/cart" component={Cart}/>
        <Route path="/login" component={Login}/>
        <PrivateRoute path="/register" component={Register}/>
        <Route path="/forgotPassword" component={ForgotPassword}/>
        <Route path="/signup" component={Signup}/>
      </Switch>
    </Router>
    </AuthProvider>
  );
}

export default App;
