import { Link } from "react-router-dom";

function Bar(props){
    return(
        <div className='bar'>
            <ul>
                <li>
                    <Link to="/products">Get all Products</Link>
                </li>
               
            </ul>
        </div>
    )
}

export default Bar ;