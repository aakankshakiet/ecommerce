import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainHeader from './components/layout/MainHeader';
import MainFooter from './components/layout/MainFooter';
import Home from './components/Pages/Home';
import ProductDetails from './components/Pages/ProductDetails';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import OrderPlaced from './components/Pages/OrderPlaced';
import NotFound from './components/Pages/NotFound'


function App() {
  return (
    <>
      <CartProvider>
        <MainHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products/:productId" element={<ProductDetails />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/OrderPlaced" element={<OrderPlaced />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <MainFooter />
      </CartProvider>
    </>
  );
}

export default App;
