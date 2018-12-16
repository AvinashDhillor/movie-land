import React, { Component } from 'react';
import './App.css';
import Home from './Home/Home';
import Header from '../shared/components/Header';
import Footer from '../shared/components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Home/>
        <Footer/>
      </div>
    );
  }
}

export default App;
