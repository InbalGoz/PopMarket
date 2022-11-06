import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./shared/pages/HomePage";
import MainHeader from "./shared/components/Navigaition/MainHeader";
//import ProductListPage from "./product/pages/ProductListPage";
import WishListPage from "./shared/pages/WishListPage";
import NewProducts from "./shared/pages/productsPages/NewProducts";
import PopularProducts from "./shared/pages/productsPages/PopularProducts";
import SpecialProducts from "./shared/pages/productsPages/SpecialProducts";
import OtherProducts from "./shared/pages/productsPages/OtherProducts";
import PopProductPage from "./product/pages/PopProductPage";
import CartPage from "./user/pages/CartPage";
import RegisterPage from "./user/pages/RegisterPage";
import LoginPage from "./user/pages/LoginPage";

import ProductCarousel from "./product/components/ProductCarousel";
import PopProduct from "./product/components/PopProduct";

//<ProductListPage type={new}>
const App = () => {
  return (
    <Router>
      <MainHeader />
      <div className='main'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='newproducts' element={<NewProducts />} />
          <Route path='popularproducts' element={<PopularProducts />} />
          <Route path='speicalproducts' element={<SpecialProducts />} />
          <Route path='moreproducts' element={<OtherProducts />} />
          <Route path='product/:id' element={<PopProductPage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='wishList' element={<WishListPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

//shoppingCart;
// <Route path='cart/:id/*' element={<CartPage />} />

//mongodb+srv://Inbal:T78y0101u@inbalgoz.2yxesmj.mongodb.net/PopMarket
