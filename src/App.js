import logo from "./logo.svg";
import "./App.css";
import "./components/WelcomeBack";
import WelcomeBack from "./components/WelcomeBack";
import ParentComponent from "./components/ParentComponentSingleFile";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
// import Home from "./pages/Home";
// import Products from "./pages/Products";
// import ProductDetail from "./pages/ProductDetail";
import MyButton from "./components/MyButton";

const ProductDetail = () => <h2>Product Detail</h2>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeBack />} />
        <Route path="/header" element={<Header />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
      <li>
        <Link to="header" element="Header">
          Go to Header
        </Link>
      </li>
      <li>
        <Link to="products/:id" element="ProductDetail">
          Go to Product Detail page
        </Link>
      </li>
      <MyButton />
    </BrowserRouter>
  );
}

export default App;
