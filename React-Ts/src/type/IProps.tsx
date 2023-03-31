 
 import { Iproduct } from "./IProducts"
 export interface IProps{
    products: Iproduct[],
    onRemove:(id:number)=> void 
}