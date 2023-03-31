import instance from "./index";

const getAllProduct =()=>{
    return instance.get("/products")
}


const getOneProduct =(id)=>{
    return instance.get("/products/" + id)
}


const reomveProduct =(id)=>{
    return instance.delete("/products/" + id)
}
const addProduct =(product)=>{
    return instance.post(`/products`,product)
}

const updateProduct = (item) => {
    return instance.put(`/products/${item.id}`, item)
}






export {getAllProduct,getOneProduct,reomveProduct,addProduct,updateProduct}