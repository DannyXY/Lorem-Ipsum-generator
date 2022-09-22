import './App.css';
import { useGlobalContext } from "./context";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar'
import Footer from './components/footer'
import Modal from './components/modal'
import Home from './pages/home';
import About from './pages/about';
import Profile from './pages/profile';


function App() {
  const {  showModal } = useGlobalContext()
    

  return (
    <Router>
        <div style={{minWidth:'468px'}} className='relative min-h-screen'>
      <Navbar />
      <Modal  />
      <div className={showModal?'overflow-hidden fixed':''}>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/profile' element={<Profile />} />
        <Route path='/about' element={<About />} />

      </Routes>
        </div>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
