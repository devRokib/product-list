import { useEffect, useState } from 'react';
import Products from './Component/Products/Products';
import './Component/Products/Product.css'
import '../src/App.css'
function App() {
            const [products,setProducts] = useState ([])
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
        <label htmlFor="productName">Product Name</label><br />
        <input required value={name} onChange={(e) =>setName(e.target.value)} type="text" name="" id="productName" placeholder='Product Name'/>
        <br /> <br />

        <label htmlFor="productId">Product ID</label><br />
        <input required value={pId} onChange={(e) => setPId(e.target.value)} type="number" name="" id="productId"placeholder='Product ID' />
        <br /> <br />

        <label htmlFor="productPrice">Product Price</label><br />
        <input required value={price} onChange={(e) => setPrice(e.target.value)} type="number" name="" id="productPrice" placeholder='Product Price'/>
        <br /> <br />

        <label htmlFor="pQuantity">Product Quantity</label><br />
        <input required value={quantity} onChange={(e) => setQuantity(e.target.value)} type="number" name="" id="pQuantity" placeholder='Product Quantity'/>
        <br /> <br />

        <label htmlFor="selectColor">Choose Color</label> <br />
       <select required value={color} onChange={(e) => setColor(e.target.value)} name="" id="selectColor">
          <option value="Red">Red</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
        </select> <br /> <br />

        <label htmlFor="comment">Leave Your Comment</label> <br />
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
          
        </table>
      </div>}
      {products.length < 1 && <h3>No Product are Added</h3>}
     </div>
     
    </div>
    </>
  )
}

export default App