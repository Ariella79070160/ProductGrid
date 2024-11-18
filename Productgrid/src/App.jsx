import { Routes, Route } from 'react-router-dom'

import Layout from './Layout'
import LatestArrival from './pages/LatestArrival'
import ProductDetail from './pages/ProductDetail'
import ProductListing from './pages/ProductListing'
import './App.css'

function App() {

  return (
   <Routes>
    <Route path='/' element={<Layout />}>
      <Route path='/products/:productId' element={<ProductDetail />}/>
      <Route path='/products' element={<ProductListing />}/> 
      <Route path='/' element={<LatestArrival />}/>
    </Route>
   </Routes>
  )
}

export default App
