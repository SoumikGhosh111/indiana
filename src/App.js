import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// importing components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
// importing pages
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
