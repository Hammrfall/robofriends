import React from 'react';

import Card from './Card.js'

class RobotList extends React.Component{
    render(){
        return (
            <div>
            {this.props.robots.map((el, i)=>{return <Card key={i} robot={el}/>})}
            </div>
        )
    }

}

export default RobotList;