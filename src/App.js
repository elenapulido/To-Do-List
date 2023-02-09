import React from 'react';
import './App.css';
import Form from './components/Form';

import background from './img/fondo.jpg';

const App = () => {

  return (


    <div className="App">
      <div className="Img">
        <img src={background} alt="" />
      </div>

      <div className="Monday">
        <Form />
      </div>
      <div className="Tuesday">
        <Form />
      </div>
      <div className="Wednesday">
        <Form />
      </div>
      <div className="Thursday">
        <Form />
      </div>
      <div className="Friday">
        <Form />
      </div>
      <div className="Saturday">
        <Form />
      </div>
      <div className="Sunday">
        <Form />
      </div>


    </div>
  );
}

export default App;


