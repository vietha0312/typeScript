import { useState,useEffect } from 'react'

import { Route,Routes } from 'react-router-dom'
import { getAllProducts } from './api/products'
import HomePage from './pages/HomePage'
import ProductsDetail from './pages/ProductsDetail'
import ProductsPage from './pages/ProductsPage'
import DashBoard from './pages/admin/DashBoard'

interface Iproduct {
id: number,
name:string,
price : number
}


function App() {
const [products,setProducts] = useState<Iproduct[]>([])
useEffect(()=>{
  getAllProducts().then(({data})=> setProducts(data))
},[])
const onHandleRemove = (id:number)=>{

}
  return (
    <div className="App">
    <Routes>
      <Route path='/'>
        <Route index element={<HomePage />} />
        <Route path='products' >
          <Route index element={<ProductsPage products={products} onRemove={onHandleRemove} />} />
          <Route path=':id' element={<ProductsDetail />} />
        </Route>


        <Route path='admin'>
        <Route index element={<DashBoard  />} />
        </Route>
      </Route>
    </Routes>
  </div>
  )
}

export default App
