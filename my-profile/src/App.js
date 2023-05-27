import './App.css';

import React, { Component } from 'react';

class App extends Component {

  state = {
    person: {
      fullName: 'Ogah Vincent',
      bio: 'I am a web developer.',
      imgSrc:  "project.png",  
      profession: 'Software Engineer'
    },

    show: false,
    lastMounted: null

  };
  

  render() {
    const { person, show, lastMounted } = this.state;


    return (
      <div className='toggle'>

<button onClick={() => this.setState({ show: !show })} style={{fontSize: 30, backgroundColor: 'bisque', borderRadius: 10}}>Toggle Profile</button>

      {show && (
        <div className='profile'>
          <h2>{person.fullName}</h2>
          <img src={person.imgSrc} alt="Profile" />
          <p>{person.bio}</p>
          <p>Profession: {person.profession}</p>
        </div>
      )}
      <p style={{fontSize: 25}}>Time since last mount: {lastMounted ? (new Date() - lastMounted) / 1000 : 0} seconds</p>

      </div>
    );
  }
}

export default App;
