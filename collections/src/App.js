import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoCollector from "./ToDoCollector";
import ToDoItem from "./ToDoItem";
import Address from "./Address";

class App extends Component {
    render() {
        //called raw data module and required it
        const rawDataArray = require('./rawData');

        return (
            <div className="App">
                <h1>To Do Collection</h1>
                <ToDoCollector array={rawDataArray}/>
                {/*<Address/>*/}
            </div>
        );
    }
}

export default App;