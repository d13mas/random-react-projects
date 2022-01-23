import React, { useState } from 'react';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

// Styles
import './index.scss';

// Main 
const App = () => {
  const [mode, setMode] = useState("toggle_off")

  const handlerMode = () => {
    setMode((prevMode) => prevMode === "toggle_off" ? "toggle_on" : "toggle_off")
  }

  return (
    <div className={`App ${mode}`}>
      <Header
        onClick={handlerMode}
        mode={mode}
      />
      <MainContent mode={mode} />
      <Footer mode={mode} />
    </div>
  );
}

export default App;
