
import './App.css';
import Home from './Components/Home/Home';
import Navigation from './Components/Navbar/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Product from './Components/Products/Product'
import About from './Components/About/About';

function App() {
  return (
    <Router>
    <Navigation/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/products" component={Product}/>
        <Route path="/aboutus" component={About}/>
      </Switch>
    </Router>
  );
}

export default App;
