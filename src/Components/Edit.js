import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"
function Edit(){
    let id = useParams().id;
    
    let move = useNavigate()
    useEffect(()=>{
        const getData = async()=>{
            await axios.get(`http://localhost:9000/products/${id}`)
            .then((res)=>{ 
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
                setCategory(res.data.category)
            })
        }
        getData();
    },[])
    let [theTitle,setTitle] = useState()
    let [thePrice,setPrice] = useState()
    let [theDescription,setDescription] = useState()
    let [theCategory,setCategory] = useState()
    
    


    function submitHandler(event){
        event.preventDefault();
        fetch(`http://localhost:9000/products/${id}`,{
            method:"put",
            headers: { // must added
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                title:theTitle,
                price:thePrice,
                description:theDescription,
                category:theCategory,
            })
        }).then((res)=>{res.json()})
          .then(()=>{move("/products")})
    }
    return(
        <>
            <h1>You are now Going to edit pro number {id}</h1>
            <form onSubmit={submitHandler}>
                    <input value={theTitle} onChange={(e)=>{setTitle(e.target.value)}} type="text" placeholder="Title"/>
                    <input value={thePrice} onChange={(e)=>{setPrice(e.target.value)}} type="text" placeholder="Price"/>
                    <textarea value={theDescription} onChange={(e)=>{setDescription(e.target.value)}} type="text" placeholder="Description"/>
                    <input value={theCategory} onChange={(e)=>{setCategory(e.target.value)}} type="text" placeholder="Category"/>
                    <input type="submit" value="Edit"/>
            </form>
        </>
    )
}

export default Edit ;