import React from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Button>Default</Button>
      <Button size='xs'>Default</Button>
      <Button size='sm'>Default</Button>
      <Button size='lg'>Default</Button>
      <Button size='xl'>Default</Button>
      <Button rounded='sm'>Default</Button>
      <Button rounded>Default</Button>
      <Button rounded='lg'>Default</Button>
      <Button rounded='pill'>Default</Button>
      <Button rounded='circle'>Default</Button>
      
      
    </div>
  );
}

export default App;
