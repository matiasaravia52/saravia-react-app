import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import CartContextProvider from './contexts/CartContext';

function App() {
  return (
    <CartContextProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/category/:id">
            <ItemListContainer />
          </Route>
          <Route path="/cart">
            <div>
              <h1>El carrito</h1>
            </div>
          </Route>
          <Route path="/">
            <ItemListContainer />
          </Route>
        </Switch>
      </Router>
    </CartContextProvider>
  );
}

export default App;
