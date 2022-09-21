import React, { Component } from "react";
import Cardlist from "./Cardlist";
//import { robots } from "./robots";
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';
// const App = () => {
class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
            return response.json();
        })
        .then(users => {
            this.setState({robots: users})
        
        });

        /** Or Another Way to use
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
            console.log('check');
        */
    }
    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value})
        console.log(event.target.value);
        
    }
    render(){
        const filterfirends = this.state.robots.filter(robots =>{
            return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
        });
        if (this.state.robots.length === 0 ) {
            return <h1>Loding</h1>
        }else{
            return(
                <div className="tc">
                    <h1 className="f1"> Friends</h1>
                    <SearchBox searchChange ={this.onSearchChange}/>
                    <Scroll>
                        <Cardlist robots={filterfirends}/>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;