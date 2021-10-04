
import './App.css';
import Home from './Components/Home/Home';
import Navigation from './Components/Navbar/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Product from './Components/Products/Product'
import About from './Components/About/About';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <Router>
    <Navigation/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/products" component={Product}/>
        <Route path="/aboutus" component={About}/>
        <Route path="/productDetails" component={ProductDetails}/>
        <Route path="/cart" component={Cart}/>
      </Switch>
    </Router>
  );
}

export default App;
