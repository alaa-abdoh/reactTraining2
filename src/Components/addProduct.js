import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Add(){
    let [theTitle,setTitle] = useState("")
    let [thePrice,setPrice] = useState(0)
    let [theDescription,setDescription] = useState("")
    let [theCategory,setCategory] = useState("")
    let [theImage,setImage] = useState("")

    let move = useNavigate() // return method named "move" used for fo th specific link

    function submitHandler(event){
        event.preventDefault();
        fetch(" http://localhost:9000/products",{
            method:"post",
            headers: { 
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                title:theTitle,
                price:thePrice,
                description:theDescription,
                category:theCategory,
                image:theImage
            })
        }).then((res)=>{res.json()})
          .then(()=>{move("/products")})
    }
    return(
        <>
            <h1>Adding a new product </h1>
            <form onSubmit={submitHandler}>
                <input onBlur={(e)=>{setTitle(e.target.value)}} type="text" placeholder="Title"/>
                <input onBlur={(e)=>{setPrice(e.target.value)}} type="text" placeholder="Price"/>
                <textarea onBlur={(e)=>{setDescription(e.target.value)}} type="text" placeholder="Description"/>
                <input onBlur={(e)=>{setCategory(e.target.value)}} type="text" placeholder="Category"/>
                <input onChange={(e)=>{setImage(e.target.value)}} type="text" placeholder="path of image"/>
                <input type="submit" value="add"/>
            </form>
            <Link to="/products">Back to Products</Link>
        </>

    )
}

export default Add ;






