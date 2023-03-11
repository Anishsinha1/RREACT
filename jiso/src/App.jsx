import React from 'react';
import './App.css';
import  userjson from './user.json'
import Course from './Course';

function App() {
  return (
    <>
    <Course payload={userjson}/>
    </>
  );
}

export default App;
