import { useState } from 'react';
import './App.css';
import Navbar from './components/Nav-Bar';
import TextForm from './components/Text-Form';
 function App() {
  const [mode,setMode] = useState('light');
  
  const toggleMode = () => {
    if (mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor='#1f2536'
    } 
    else {
      setMode('light');
      document.body.style.backgroundColor='white'
    }

  }
  return (
    <> 
<Navbar Title="Triangle" toggleMode={toggleMode} mode={mode} />
<div className='container mg-3'> 
<TextForm heading= "Enter the text here"  mode={mode} />
</div>
    </>
  );
}

export default App;
