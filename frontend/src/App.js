import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import NavBar from './components/NavBar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

function App() {
  const [show, toggleShow] = React.useState(false)
  return (
    <Router>
      <NavBar toggleShow={toggleShow}/>
      <SideDrawer show={show} toggleShow={toggleShow}/>
      <Backdrop show={show} toggleShow={toggleShow}/>

      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:id" element={<ProductScreen/>} />
          <Route path="/cart" element={<CartScreen />} />
        </Routes>
      </main>
    </Router>

  );
}

export default App;
