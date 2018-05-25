import React, { Component } from 'react';
import './App.css';
import logo from '../../medical (1).svg';

class HomeScreen extends Component{
    render() {
        return(
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title"> Welcome to the HIV / Tuberculosis Patient Database </h1>
                </header>
                <p className="App-intro">
                    Mea ludus minimum interpretaris ut, vel ei quem percipitur dissentias. Vel deserunt ullamcorper ut,
                    has admodum civibus repudiandae id. Electram theophrastus pro ad, ut solet mediocrem pro, mel nullam
                    mollis ea. Sit ullum everti sanctus ad. Impedit pericula at ius, ei vis omnium disputationi. Wisi
                    definiebas reprehendunt vel te.
                </p>
            </div>
        )
    }
};

export default HomeScreen;

