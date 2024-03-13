import logo from './logo.svg';
import './App.css';
import Name from './Name';
import { useState } from 'react';



// This is a component. A component is interpreted by react differently. It must return html
function App() {
  const [name, setName] = useState("Hemanth")

  // This is a callback function. Not a component
  function fullName() {
    setName(name + " Kumar")
    console.log(name)
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p label={name} onClick={fullName}> Hello {name}! </p>
        <Name first="Hemanth" last="Kumar"></Name>
        <Name first="Hem" last="Kum"></Name>
        <Name first="Heman" last="K"></Name>
      </header>
    </div>
  );
}

export default App;
