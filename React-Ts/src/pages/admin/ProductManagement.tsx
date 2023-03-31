import React,{useEffect,useState} from 'react'
import { Iproduct } from '../../type/IProducts'
import { IProps } from '../../type/IProps'

const ProductManagement = (props:IProps) => {
    const[data,setData]= useState<Iproduct[]>([])
    useEffect(()=>{
        setData(props.products)
    },[props])


    const removeProduct = (id:number)=>{
        props.onRemove(id)
    }
  return (
    <div>
         {data.map((item)=>{
            return  (
                <div key={item.id}>
                <h3>{item.name}</h3>
                <button onClick={() => removeProduct(item.id)}>Remove</button>
            </div>
            )
        })}
    </div>
  )
}

export default ProductManagement