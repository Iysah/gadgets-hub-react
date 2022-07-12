import React, { useState, useEffect } from 'react';
import { Navbar, Products } from './components';
import { commerce } from './lib/commerce';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({})

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

   

  useEffect(() => {
    fetchProducts();
    fecthCart();
  
  }, []);

  console.log(products);
  
  return (
    <div>
        <Navbar />
        <Products />
    </div>
  )
}

export default App