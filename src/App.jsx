import { Navigation } from "./components";
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import {
  CarsForRental,
  Contact,
  FAQ,
  Hero,
  Posts,
  Pricing,
  RentingProcess,
  Services,
  Testimonials,
  Footer,
} from "./views";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";


function App() {
  return (
    <>
    <BrowserRouter>
      <Navigation />
    <Routes>
      <Route  path="/" element={<Hero/>}/>
      <Route  path="/bikes" element={<CarsForRental/>}/>
      <Route  path="/contact" element={<Contact/>}/>
      <Route  path="/testimonials" element={<Testimonials/>}/>
      <Route  path="/faq" element={<FAQ/>}/>
      <Route  path="/about" element={<About/>}/>
      <Route  path="/login" element={<Login/>}/>
      <Route  path="/signup" element={<SignUp/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
