import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import About from './About/About';
import Parent from './Parent/Parent';
import Projects from './Projects/Projects';


class App extends Component{
  state={}
  render(){
    return <>
    <About></About>
    <Parent></Parent>
    <Projects></Projects>
    </>
  }
}

export default App;
