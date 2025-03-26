import { Component } from 'react'


class Greeting extends Component {

    constructor() {
        super();
        this.state = {
            toggle: false
        }
        this.toggleGreeting = this.toggleGreeting.bind(this)
    }    
        


    toggleGreeting() {
        this.setState((prevState) => ({
            toggle: !prevState.toggle
        }))
    }

    render() {

        return (
            <>
            <h1>{this.state.toggle ? "Goodbye": "Hello"}</h1>
            <button onClick={() => this.toggleGreeting()}>Toggle Me</button>
            </>
        )
        
    }
}

export default Greeting
