import { Toaster } from 'react-hot-toast';
import './App.css'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Contact from './pages/Contact/Contact';
import ProductPage from './pages/ProductPage/ProductPage';

function App() {

  return (
    <div className='app'>
      <Toaster/>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </Router>
      {/* <Signup/> */}
      {/* <Login/> */}
    </div>
  )
}

export default App
