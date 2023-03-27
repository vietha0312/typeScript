import React,{useEffect,useState} from 'react'

import {useParams} from 'react-router-dom'
import { getOneProduct } from '../api/products'


const ProductsDetail = () => {
    const {id} = useParams()
    const [product,setProduct] = useState({id:0 ,name:' ',price: 0})
    
    
    useEffect(()=>{
        getOneProduct(Number(id)).then(({data})=> setProduct(data))
    })
  return (
    <div>

<div>{product.name}</div>
<div>{product.price}</div>

    </div>
  )
}

export default ProductsDetail