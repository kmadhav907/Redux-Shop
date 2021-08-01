import './App.css';
import { Header } from './Components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProductList } from './Components/ProductList';
import { ProductDetails } from './Components/ProductDetails';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={ProductList} />
          <Route path='/product/:product_id' component={ProductDetails} />
          <Route>404! NOT FOUND</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
