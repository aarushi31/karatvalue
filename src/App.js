
import './App.css';
import Home from './Components/Home/Home';
import Navigation from './Components/Navbar/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Product from './Components/Products/Product'

function App() {
  return (
    <Router>
    <Navigation/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/products" component={Product}/>
      </Switch>
    </Router>
  );
}

export default App;
