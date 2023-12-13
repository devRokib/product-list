export default function getDatafromLs (){
    let Data =  localStorage.getItem('products')
    return Data ?  JSON.parse(Data) : []
     
 }