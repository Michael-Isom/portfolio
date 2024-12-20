import React, { useState } from 'react';
import Header from './components/Header';     // Make sure this file exists in src/components/
import About from './components/About';       // Make sure this file exists in src/components/
import Portfolio from './components/Portfolio';  // Make sure this file exists in src/components/
import Contact from './components/Contact';   // Make sure this file exists in src/components/
import Resume from './components/Resume';     // Make sure this file exists in src/components/
import Footer from './components/Footer';     // Make sure this file exists in src/components/
import './styles.css';  // Ensure this file is located inside the src/ folder

function App() {
  const [currentSection, setCurrentSection] = useState('about');

  const renderSection = () => {
    switch (currentSection) {
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  return (
    <div>
      <Header 
        currentSection={currentSection} 
        handleSectionChange={handleSectionChange} 
      />
      <main>{renderSection()}</main>
      <Footer />
    </div>
  );
}

export default App;