import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Product'
import ProductDetailPage from './pages/ProductDetail'
import AdminPage from './pages/admin/productManager'
import React, { useEffect, useState } from 'react'
import { getAllProduct, reomveProduct,addProduct } from './api/product'
import AddProductPage from './pages/admin/addProduct'
import Dashboard from './pages/admin/dashBoard'
import updateProduct from './pages/admin/updateProduct'

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    // fetch('http://localhost:3000/products')
    //   .then(response => response.json())
    //   .then(data => setProducts(data))
    getAllProduct().then(({data})=>setProducts(data))
  }, [])

  const onHandleAdd = (product) => {
    addProduct(product).then(() => setProducts([...products, product]))
  }
  const onHandleRemove = (id) => {
    // fetch('http://localhost:3000/products/' + id, {
    //   method: 'DELETE'
    // }).then(() => setProducts(products.filter((item) => item.id !== id)))
 reomveProduct(id).then(() => setProducts(products.filter((item) => item.id !== id)))
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="products">
            <Route index element={<ProductPage products={products} onRemove={onHandleRemove}/>} />
            <Route path=":id" element={<ProductDetailPage />} />
          </Route>
          <Route path='/admin'>
          <Route index element={<Dashboard />} />
          <Route path='products' >
            <Route index element={<AdminPage products={products} />} />
            <Route path='add' element={<AddProductPage onAdd={onHandleAdd} />} />
            <Route path='edit/:id' element={<updateProduct onAdd={onHandleAdd} />} />


          </Route>
        </Route>
        </Route>
      
      </Routes>
    </div>
  )
}

export default App
