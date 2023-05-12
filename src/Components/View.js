import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function View(){
    let id = useParams().id;
    let [obj,setobj] = useState({})
    useEffect(()=>{
        fetch(`http://localhost:9000/products/${id}`)
        .then((res)=>{return res.json()})
        .then((obj)=>{setobj(obj)})
    },[])
    return(
        <>
            <h1>you are in details page for product number {obj.id}</h1>
            <div>
                <p>id: {obj.id}</p>
                <p>title: {obj.title}</p>
                <p>price: {obj.price}</p>
                <p>description: {obj.description}</p>
                <p>category: {obj.category}</p>
                <img src={obj.image} />
            </div>
        </>
    )
}

export default View;