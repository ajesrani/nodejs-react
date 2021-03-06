import React from 'react';

//let time = new Date().toLocaleString();

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          time: new Date().toLocaleString()
        };
    }

    componentDidMount() {
        this.intervalID = setInterval(
          () => this.tick(),
          1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
          time: new Date().toLocaleString()
        });
    }
  
    render() {
    return (
        <p className="badge badge-primary m-2">{this.state.time}</p>
    );
  }
}
export default Clock;