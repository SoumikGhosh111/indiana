import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// importing components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
// importing pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/login' element={<LoginPage />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
