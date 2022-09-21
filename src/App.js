import React, { Component } from "react";
import Cardlist from "./Cardlist";
import { robots } from "./robots";
import SearchBox from './SearchBox';
import './App.css';

// const App = () => {
class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value})
        console.log(event.target.value);
        
    }
    render(){
        const filterfirends = this.state.robots.filter(robots =>{
            return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
        })
        return(
            <div className="tc">
                <h1 className="f1"> Friends</h1>
                <SearchBox searchChange ={this.onSearchChange}/>
                <Cardlist robots={filterfirends}/>
            </div>
        );
    }
}

export default App;