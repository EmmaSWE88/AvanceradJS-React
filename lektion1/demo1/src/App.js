import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navigation/Navbar';

function App() {

  const [title, setTitle] = useState('React App') //enda stora skillnaden från VUE än så länge

  return (
    <div>
      {/* Detta är en kommentar? */}
      
      <Navbar title={title} /> 
    </div>
  );
}

export default App;
