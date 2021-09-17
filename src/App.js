import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/detalle/:id">
          <ItemDetailContainer />
        </Route>
        <Route path="/">
          <ItemListContainer greeting="La cantidad de productos en el carrito es:"/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
