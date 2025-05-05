
// import Header from './component/Header';
import { Routes, Route } from "react-router-dom";
import "../src/App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
// import HeaderNav from './component/HeaderNav';
import Home from './component/Home';
import Abouts from './component/Abouts';
import Features from './component/Features';
import Shops from './component/Shops';
import Team from './component/Team';
import Services from './component/OurServices';
import OurServices from './component/OurServices';
import SingleServices from './component/SingleServices';
import Blogs from './component/Blogs';
import Contact from './component/Contact';
import CartPage from './component/CartPage';
import CheckOut from './component/CheckOut';
import Registration from './component/Registration';
import Profile from './component/Profile';
import Login from './component/Login';
import OrderSummary from './component/OrderSummary';
import OrderSuccess from './component/OrderSuccess';
import Admin from './admin/Admin';
import User from './admin/User';
import Order from './admin/Order';
// import Catalog from './admin/Catalog';
import Dashboard from './admin/Dashboard';
import AdminLogin from './component/AdminLogin';
import Settings from './admin/Settings';



function App() {
  return (
    <div>

      {/* <Header /> */}
      {/* <HeaderNav /> */}

      {/* Routes for Page Navigation */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkOut" element={<CheckOut />} />
        <Route path="/about" element={<Abouts />} />
        <Route path="/features" element={<Features />} />
        <Route path="/shop" element={<Shops />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/Register" element={<Registration />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/our-services" element={<Services />} />
        <Route path="/services/our-services" element={<OurServices />} />
        <Route path="/services/single-services" element={<SingleServices />} />
        <Route path="/OrderSummary" element={<OrderSummary />} />
        <Route path="/OrderSuccess" element={<OrderSuccess />} />

        <Route path="/admin-login" element={<AdminLogin />} />
        {/* Admin routes using nested routing */}
        <Route path="/admin" element={<Admin />}>
          <Route index element={<Dashboard />} /> {/* Default route */}
          <Route path="dashboard" element={<Dashboard />} />
          {/* <Route path="catalog" element={<Catalog />} /> */}
          <Route path="user" element={<User />} />
          <Route path="orders" element={<Order />} />
          <Route path="Settings" element={<Settings />} />
        </Route>

      </Routes>





    </div>


  );
}

export default App;
