import React, {Component} from "react";
import ReactDOM from "react-dom";
import {render}  from "react-dom";
import Table from "../src/components/Table"

class App extends Component{ 
render(){
    return(<Table/>)
}
}
render(<App/>,document.getElementById('root'))