import React from 'react';
import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container'


const App = () => (
  <div className='app-body'>
    <Modal />
    <header>
      <h1>TurnTable</h1>
      <GreetingContainer />
    </header>
    <div className='changetosearch'>
      <p>Where will you be tonight?</p>
    </div>
  </div>
);

export default App;