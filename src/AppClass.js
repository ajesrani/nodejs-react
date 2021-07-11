import React, { Component } from 'react';
import Counter from './components/Counter';

class AppClass extends Component {
    state = {
        counters: [
          { id: 1, value: 4},
          { id: 2, value: 0},
          { id: 3, value: 0},
          { id: 4, value: 0}
        ]
    };

    constructor() {
        super();
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {c.value = 0; return c;});
        this.setState({ counters });
    }

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        //counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    }

    handleDelete = (counterId) => {
        //console.log("Event Handler called", counterId);
        const counters = this.state.counters.filter(c => c.id != counterId);
        this.setState({ counters: counters });
    }
    
    render() {
      return (
        <React.Fragment>
            <h1>Hello React</h1>   
            {
              this.state.counters.map(counter => <Counter key={counter.id} 
                id={counter.id} value={counter.value} counter={counter}
                onIncrement={this.handleIncrement} onDelete={this.handleDelete} />
              ) 
            }
            <button className="btn btn-primary btn-sm m-2" onClick={this.handleReset}>Reset</button> 
        </React.Fragment>
      )
    }
  }

  export default AppClass;