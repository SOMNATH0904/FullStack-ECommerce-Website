import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignUp from './Pages/LoginSignUp';
import Cart from './Pages/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Shop></Shop>}></Route>
          <Route path='/mens' element={<ShopCategory category="men" />}></Route>
          <Route path='/womens' element={<ShopCategory category="women" />}></Route>
          <Route path='/kids' element={<ShopCategory category="kid" />}></Route>
          <Route path='product' element={<Product></Product>}>
              <Route path=':productId' element={<Product></Product>}></Route>
          </Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/login' element={<LoginSignUp></LoginSignUp>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
