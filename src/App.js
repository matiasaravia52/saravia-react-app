import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="La cantidad de productos en el carrito es:"/>
    </>
  );
}

export default App;
