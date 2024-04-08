import './App.css';
// eslint-disable-next-line no-unused-vars
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// importing pages
import Home from './pages/Home.jsx';
import Services from "./pages/Services.jsx";
import OurPortfolio from './pages/OurPortfolio.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import ShowServices from './pages/ShowServices.jsx';
import Error from './pages/Error.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Logout from './pages/Logout.jsx';
import Review from './pages/Review.jsx';
import { ReviewList } from './Components/ReviewList.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-portfolio" element={<OurPortfolio />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/service/:category" element={<ShowServices />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/review/add' element={<Review />} />
        <Route path='/review' element={<ReviewList />} />
        <Route path="*" element={<Error />} />
        

      </Routes>
    </BrowserRouter>
  );
}

// eslint-disable-next-line react/no-deprecated
export default App;
