import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom' 
import Product from './Pages/Product'
import ProductDetails from './Pages/ProductDetails'
import Home from './Pages/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} /> 
        <Route path='/product/:id' element={<ProductDetails />} /> 
      </Routes>
    </div>
  )
}

export default App
