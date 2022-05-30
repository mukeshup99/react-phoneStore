import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route exact path='/' element={<ProductList />}></Route>
        <Route path='/Cart' element={<Cart />}></Route>
        <Route path='/Details' element={<Details />}></Route>
        <Route element={<Default />}></Route>
      </Routes>
      <Modal />
    </>
  );
}

export default App;
