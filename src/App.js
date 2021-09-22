import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  const [cart, setCart] = useState(0);
  
  const handleAddOn = (quantity) => {
    console.log(quantity);
    setCart(cart + quantity);
  }

  return (
    <>
      <Navbar />
      <Container>
        <div className="greeting">
            {`La cantidad de productos en el carrito es: ${cart}`}
        </div>
        <Router>
        <Switch>
          <Route path="/item/:id">
            <ItemDetailContainer addOn={handleAddOn}/>
          </Route>
          <Route path="/category/:id">
            <ItemListContainer addOn={handleAddOn}/>
          </Route>
          <Route path="/">
            <ItemListContainer addOn={handleAddOn}/>
          </Route>
        </Switch>
      </Router>
      </Container>
    </>
  );
}

export default App;
