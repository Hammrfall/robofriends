import React from 'react';
// import ReactDOM from 'react-dom'


class Card extends React.Component{

    render(){
        return (
            <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                <img src={'https://robohash.org/' + this.props.robot.name + '?200x200'} alt="profilepic"/>
                <h2>{this.props.robot.name}</h2>
        <h3>{this.props.robot.email}</h3>
            </div>
        )
    }

}


export default Card