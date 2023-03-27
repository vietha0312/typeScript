import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/homePage'
import ProductPage from './pages/product'
import ProductDetailPage from './pages/productDetails'

function App() {
  
  return (
    
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="products">
            <Route index element={<ProductPage />} />
            <Route path=":id" element={<ProductDetailPage />} />
          </Route>
        </Route>
    
      </Routes>
    </div>
  )
}

export default App