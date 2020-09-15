import React from 'react';
import RobotList from './RobotList';
import SearchBox from './SearchBox';
import './App.css'
import Scroll from './Scroll';

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            return response.json();
        })
        .then(users=>{
            this.setState({robots: users})
        })
    }

    onSearchChange = (event)=>{
        this.setState({searchfield: event.target.value})
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return(
        <div>
            <div className = "tc">
                <h1>Robo Friends</h1>
                <SearchBox State={this.state} searchChange={this.onSearchChange} />
            </div>
            <Scroll>
                <RobotList robots = {filteredRobots} />
            </Scroll>
        </div>
        )
    }
}

export default App;