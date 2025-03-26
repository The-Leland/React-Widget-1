import { Component } from 'react'



class Counter extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
        this.handleChange = this.handleChange.bind(this)
    }    

    handleChange = (amt)  => {
        this.setState((prevState) => {
            return { count: amt ? prevState.count + amt : 0
            }
                
            
        })
    }

render() {
    return (
    <>
        <h1>Counter Component</h1>
        <h3>{this.state.count}</h3>
        <button onClick={() =>this.handleChange(1)}>Increment</button>
        <button onClick={() => this.handleChange(0)}>Reset</button>
        <button onClick={() => this.handleChange(-1)}>Decrement</button>

    </>
    );
}
}

  
export default Counter