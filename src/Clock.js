import React, { Component } from 'react';
import Display from './Display'; 
import Panel from './Panel';

class Clock extends Component {
    constructor(){
        super();

        this.state = {
            date : new Date(),
            dateOn : true 
        }

        this.toggleDate = this.toggleDate.bind(this);
    }

    componentDidMount(){
        this.startTime();
    }

    componentWillUnmount(){
        clearInterval(this.t);
    }

    startTime(){
        this.t = setInterval(() => {
            this.setState(() => ({date : new Date()}));
        }, 1000)
    }

    toggleDate(){
        this.setState({dateOn : !this.state.dateOn});
    }

    render(){
        return(
            <div>
                <Panel toggleDate={this.toggleDate}/>
                <Display date={this.date} dateOn={this.state.dateOn} />
            </div>
        )
    }
}

export default Clock;