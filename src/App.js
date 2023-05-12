import './App.css';
import Header from "./Components/Header"
import Bar from "./Components/Bar"
import About from "./Components/about"
import Products from "./Components/products"
import Add from "./Components/addProduct"
import View from './Components/View';
import Edit from './Components/Edit';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (

    <>
      <Header/>
     
        <div className='page'>
          <Bar/>
          <div className='content'>
            <Routes>
              <Route path="about" element={<About/>}/>
              <Route path="/" element={<h1>You are in home</h1>}/>
              {/* <Route path="products" element={<Products/>}/>
              <Route path="products/add" element={<Add/>}/>
              <Route path="/products/view/:id" element={<View/>}/> */}
              
              {/* Another Way  */}

              <Route path="products">
                <Route index element={<Products />} />
                <Route path="add" element={<Add />} />
                <Route path="view/:id" element={<View />} />
                <Route path="edit/:id" element={<Edit />} />
            </Route>
              

            </Routes>
          </div>
        </div>
    </>

  );
}

export default App;
