import "./App.css";
import HomePage from "./shared/pages/HomePage";
import ProductListPage from "./product/pages/ProductListPage";
import PopProductPage from "./product/pages/PopProductPage";
import RegisterPage from "./user/pages/RegisterPage";
import LoginPage from "./user/pages/LoginPage";

import ProductCarousel from "./product/components/ProductCarousel";
import PopProduct from "./product/components/PopProduct";

//<ProductListPage type={new}>
function App() {
  return <HomePage />;
}

export default App;

//mongodb+srv://Inbal:T78y0101u@inbalgoz.2yxesmj.mongodb.net/PopMarket
