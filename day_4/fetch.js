const getProducts = async () => {
    const res= await fetch("https://fakestoreapi.com/products");
    const data= await res.json();
    console.log(data.products);
}
getProducts();
fetch("https://fakestoreapi.com/products")
   .then((res)=>res.json())
   .then((data)=>console.log(data))
   
