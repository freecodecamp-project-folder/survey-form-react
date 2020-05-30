import React from 'react';
import './App.css';
import Jumbotron from './components/TestJumbotron'
import FormContainer from './components/FormContainer/'
function App() {
  return (
    <div className='container'>
      <Jumbotron />
      <FormContainer />
    </div>
  );
}

export default App;
