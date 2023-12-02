
import { MdDelete } from "react-icons/md";
import './SingleProduct/Single.css'

function Products({product,deleteElement}) {
  const {name,pId,price,quantity,color,comment} = product;
 
 return (
    
    <tr>
      <td>{name}</td>
      <td>{pId}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{color}</td>
      <td>{comment}</td>
      <td onClick={()=>deleteElement(pId)} > <MdDelete /></td>
     
    </tr>
    
  )
  
}

export default Products;