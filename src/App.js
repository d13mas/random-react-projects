import React from 'react';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

// Styles
import './index.css';

// Main 
function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
