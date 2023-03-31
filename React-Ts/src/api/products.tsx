import instance from "./instance";
interface Iproduct {
    id:number,
    name: string,
    price : number
}

const getAllProducts  = ()=>{
return instance.get('/products')
}


const getOneProduct  = (id:number)=>{
    return instance.get("/products/"+ id)
}

const removeProduct = (id:number)=>{
    return instance.delete('/products/' + id)
}


const addProduct = (product: Iproduct) =>{
    return instance.post('/products', product)
}


const updateProduct = (product:Iproduct)=>{
    return instance.put('/products/' + product.id, product)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
}


export {getAllProducts,getOneProduct,updateProduct,removeProduct,addProduct}