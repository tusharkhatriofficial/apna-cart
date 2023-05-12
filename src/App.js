import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList.jsx'
import React from 'react';


function App() {

  const productList = [
    {
      name: "Iphone 11 pro",
      price: 120000,
      quantity: 0
    },
    {
      name: "Iphone XR",
      price: 80000,
      quantity: 0
    },
    {
      name: "Iphone X",
      price: 72000,
      quantity: 0
    },
  ]

  return (
    <React.Fragment>
      <Navbar/>
      <ProductList productList={productList}/>
    </React.Fragment>
  );
}

export default App;
