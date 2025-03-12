
import Header from './component/Header';
import {  Routes, Route } from "react-router-dom";
import "../src/App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNav from './component/HeaderNav';
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


function App() {
  return (
    <div>
      
        <Header />
        <HeaderNav />

        {/* Routes for Page Navigation */}
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<Abouts />} />
          <Route path="/features" element={<Features />} />
          <Route path="/shop" element={<Shops />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/our-services" element={<Services />} />
          <Route path="/services/our-services" element={<OurServices />} />
          <Route path="/services/single-services" element={<SingleServices />} />

        </Routes>


     


    </div>


  );
}

export default App;
