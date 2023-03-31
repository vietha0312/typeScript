import { useState,useEffect } from 'react'
import { Route,Routes } from 'react-router-dom'
import { addProduct, getAllProducts ,removeProduct} from './api/products'
import HomePage from './pages/HomePage'
import ProductsDetail from './pages/ProductsDetail'
import ProductsPage from './pages/ProductsPage'
import DashBoard from './pages/admin/DashBoard'
import AddProductsPage from './pages/admin/AddProducts'
import ProductManagement from './pages/admin/ProductManagement'





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
removeProduct(id).then(()=>setProducts(products.filter((item)=> item.id !== id)))
}
const onHandleAdd = (product:Iproduct)=>{
  addProduct(product).then(()=>setProducts([...products,product]))
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
        <Route path='products'>
          <Route index element={<ProductManagement products={products} onRemove={onHandleRemove} />} />
            <Route path='add' element={<AddProductsPage onAdd={onHandleAdd} />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  </div>
  )
}

export default App
