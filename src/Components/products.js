import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MakeTableRow from "./makeTableRow";

function Products(props){
     let [pro,setpro] = useState([]);

    useEffect(()=>{
     fetch("http://localhost:9000/products")
        .then((res)=>{return res.json()})
        .then((data)=>{setpro(data)})
    },[])
        
    function prepare(){
        let tableRow = pro.map((obj)=>{
            return <MakeTableRow key={obj.id} {...obj} pro={pro} setpro={setpro}/>
        })
        return tableRow; 
        
    }
    return(
        <>
            <h1>Products Page</h1>
            <Link className="add" to="/products/add">Add New Product</Link>
            <table className="productsTable">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Title</td>
                        <td>Price</td>
                        <td>Operations</td>
                    </tr>
                </thead>
                <tbody>
                    {prepare()}
                </tbody>
            </table>
        </>
    )
}

export default Products;