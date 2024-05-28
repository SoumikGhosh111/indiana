import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// importing components
import Navbar from './components/Navbar/Navbar';
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
      </Router>
    </>
  )
}

export default App
