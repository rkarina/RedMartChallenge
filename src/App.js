import React, { Component } from 'react';
import Main from './Components/Main';
import Header from './Components/Header';
import Filter from './Components/Filter';

/** Import Content/Resources **/

/** CSS **/
import './CSS/App.css';
import './CSS/MainSection.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Filter />
        <Main />
      </div>
    );
  }
}

export default App;
