import React from 'react';
import './App.css';


const App = () => (
  <section id='app' className='container'>
    <header>
      <h1 className='title'>Todo</h1>
    </header>
    <section className='main'>
      <input className='new-todo' placeholder='O que precisa ser feito?'/>
    </section>

  </section>
);

export default App;
