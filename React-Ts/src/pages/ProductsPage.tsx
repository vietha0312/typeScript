import React,{useState,useEffect} from 'react'

interface Iproduct{
    id: number,
    name: string,
    price: number
}
interface IProps{
    products: Iproduct[],
    onRemove:(id:number)=> void 
}


const ProductsPage = (props:IProps) => {

const [data,setData]= useState<Iproduct[]>([])
useEffect(()=>{
    setData(props.products)

},[props])


const removeProduct = (id:number)=>{
    props.onRemove(id)
}


  return (
    
    <div>
        <div>ProductsPage</div>

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

export default ProductsPage