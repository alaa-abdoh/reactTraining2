import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

function MakeTableRow(props){
    function updateTable(){
        fetch("http://localhost:9000/products")
        .then((res)=>{return res.json()})
        .then((data)=>{props.setpro(data)})
    }
    function deletePro (id) {
        fetch(`http://localhost:9000/products/${id}`,{method:"delete"})
        .then((res)=>{res.json()})
    }
    function collectionForDelete(){
        Swal.fire({
            title: 'Cation!',
            text: 'Are you sure you want continue delete product ?',
            icon: 'warning',
            footer: "Note: you cant undo this operation",
            showDenyButton:true,
            denyButtonText:"No",
            confirmButtonText:"yes sure"
          }).then((data)=>{
            if(data.isConfirmed == true){
                deletePro(props.id)
                updateTable()
            }
          })
    } 
    return(
        <tr>
            <th>{props.id}</th>
            <th>{props.title}</th>
            <th>${props.price}</th>
            <th>
                <button onClick={collectionForDelete}>Delete</button>
                <Link to={`/products/view/${props.id}`}>View</Link>
                <Link to={`/products/edit/${props.id}`}>Edit</Link>
            </th>
        </tr>
    )
}

export default MakeTableRow;