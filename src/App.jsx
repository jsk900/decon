import React from 'react';
import data from './data';
import './App.css';
import Show from './Show';

const App = () => {
  const { name, age, gender } = data;

  return (
    <>
      <h1>Welcome to React</h1>
      <Show name={name} age={age} gender={gender} />
    </>
  );
};

export default App;
