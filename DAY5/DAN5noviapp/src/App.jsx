import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function ListItem({ text }) {
  return <li>{text}</li>;
}

function App() {
  const [items, setItems] = useState(['Jabuka', 'Banana', 'Kruška']);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
  

    
    setItems([...items, inputValue]);
    setInputValue('');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Moja Interaktivna Lista</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Unesi novu stavku..." 
          style={{ padding: '8px', marginRight: '8px', width: '200px' }}
        />
        <button type="submit" style={{ padding: '8px 15px' }}>Dodaj</button>
      </form>

      <ul>
        {items.map((item, index) => (
          <ListItem key={index} text={item} />
        ))}
      </ul>
    </div>
  );
}

export default App;