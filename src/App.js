import React from 'react';
import Hearder from './components/Header/Hearder';
import Navbar from './components/Navbar/Navbar.jsx';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import CartShop from './pages/CartShop.jsx';
import LoginSignUp from './pages/LoginSignUp.jsx';
import Shop from "./pages/Shop.jsx"
import Product from './pages/Product.jsx';
import ShopCategory from './pages/ShopCategory.jsx';


function App() {
  return (
    <div>
      <BrowserRouter>
     
      <Hearder/>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/relojes-inteligentes' element={<ShopCategory category="relojes-inteligentes"/>}/>
        <Route path='/auriculares-inalambricos' element={<ShopCategory category="auriculares-inalambricos"/>}/>
        <Route path='/zapatillas-inteligentes' element={<ShopCategory category="zapatillas-inteligentes"/>}/>
        <Route path='/accesorios-inteligentes' element={<ShopCategory category="accesorios-inteligentes"/>}/>
        <Route path='/producto' element={<Product/>} />
        <Route path=':productId' element={<Product/>} />
      </Routes>
      <Routes>
       <Route path='/carrito' element={<CartShop/>}/>
      <Route path='/login' element={<LoginSignUp/>}/> 
      </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
