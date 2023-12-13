import { useEffect, useState } from 'react';
import Products from './Component/Products/Products';
import './Component/Products/Product.css'
import '../src/App.css'
import getDatafromLs from './Component/GetDatalf/LgetDateFromLs.js'
function App() {
            const [products,setProducts] = useState (getDatafromLs())
            const [name,setName] = useState ('')
            const [pId,setPId] = useState ('')
            const [price,setPrice] = useState ('')
            const [quantity,setQuantity] = useState ('')
            const [color,setColor] = useState ('')
            const [comment,setComment] = useState ('')

            const inputHandler = (e) =>{
              e.preventDefault()
               // create object
              let product ={
                  name,
                  pId,
                  price,
                  quantity,
                  color,
                  comment
              }
              setProducts([...products,product])
              setPId('')
              setName('')
              setPrice('')
              setQuantity('')
              setColor('')
              setComment('')
            }
            const removeAll = () =>{
              setProducts ([])
            }
            
            useEffect (()=>{
              localStorage.setItem('products' ,JSON.stringify(products))
            },[products])

            const deleteElement =(pId)=>{  
             const fillteredData =   products.filter((product)=>product.pId !==pId)
             setProducts(fillteredData)
            }
       
            
  return (
    <>
    <h1>Product List</h1>
    <div className='main-container'>
      
     <div className="form-container">
     <form action="#" autoComplete='off' onSubmit={inputHandler}>
        <label htmlFor="productName"></label>
        <input required value={name} onChange={(e) =>setName(e.target.value)} type="text" name="" id="productName" placeholder='Product Name'/>
        <br /> <br />

        <label htmlFor="productId"></label>
        <input required value={pId} onChange={(e) => setPId(e.target.value)} type="number" name="" id="productId"placeholder='Product ID' />
        <br /> <br />

        <label htmlFor="productPrice"></label>
        <input required value={price} onChange={(e) => setPrice(e.target.value)} type="number" name="" id="productPrice" placeholder='Product Price'/>
        <br /> <br />

        <label htmlFor="pQuantity"></label>
        <input required value={quantity} onChange={(e) => setQuantity(e.target.value)} type="number" name="" id="pQuantity" placeholder='Product Quantity'/>
        <br /> <br />

        <label htmlFor="selectColor"></label> 
       <select required value={color} onChange={(e) => setColor(e.target.value)} name="" id="selectColor">
          <option value="">Choose Color</option>
          <option value="Red">Red</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
        </select> <br /> <br />

        <label htmlFor="comment"></label> 
        <textarea required value={comment} onChange={(e) =>setComment(e.target.value)} name="" id="comment" cols="30" rows="6" placeholder='Leave Your Comment'></textarea> <br /> <br />

        <button type='submit'>Add Product</button>
      </form>
     </div>
     <div className="view-container">
      {products.length > 0 && 
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Color</th>
              <th>Comments</th>
              <th>Delete</th>
            </tr>
            
          </thead>
          <tbody>
        
            {
              products.map((product) => <Products product = {product} deleteElement = {deleteElement} /> )
            }
         
          </tbody>
          <button className='removebtn' onClick={removeAll} >remove all</button> 
        </table>
      </div>}
      {products.length < 1 && <h3>No Product are Added</h3>}
     </div>
     
    </div>
    </>
  )
}

export default App