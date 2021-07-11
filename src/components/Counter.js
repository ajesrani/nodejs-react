import React, { Component } from 'react';

// Controlled component -- doesnt have its own local state, recieves all data via props
class Counter extends Component { 
    
    render() {
        //console.log('props', this.props);
        const {onDelete, onIncrement} = this.props;
      
        return (
        <div>
          <span className="badge badge-primary m-2">{this.props.value}</span>
          <button className="btn btn-secondary btn-sm" 
                                onClick={() => onIncrement(this.props.counter)}>Increment</button>
          <button className="btn btn-danger btn-sm  m-2" 
                                onClick={() => onDelete(this.props.id)}>Delete</button> 
        </div>
      )
    }
  }

  export default Counter;