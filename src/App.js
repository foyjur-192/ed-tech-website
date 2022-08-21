
import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';

import Hero from './Pages/Hero';
import Services from './Pages/Services';
import Review from './Pages/Review';
import SignUp from './Pages/SignUp';
import RequiredAuth from './RequireAuth/RequiredAuth';
function App() {
  return (
    <div className="App">
  <Navbar></Navbar>
     <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/home" element={ <RequiredAuth> <Home /> </RequiredAuth>} />
        <Route path="/login" element={<LogIn />}/>
        <Route path="/signup" element={<SignUp></SignUp>}/>

        <Route path="/hero" element={<RequiredAuth><Hero /> </RequiredAuth>}/>
        <Route path="/services" element={<RequiredAuth><Services /> </RequiredAuth>}/>
        <Route path="/review" element={<RequiredAuth><Review /> </RequiredAuth>}/>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
