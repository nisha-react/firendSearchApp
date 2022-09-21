import React, { Component } from "react";
import Cardlist from "../components/Cardlist";
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
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
        const {robots, searchfield} = this.state; //structure the props
        const filterfirends = robots.filter(robot =>{
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
        });
        return !robots.length ? <h1>Loding</h1>:
        (
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

export default App;