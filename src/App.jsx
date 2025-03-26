import { Component } from 'react'
import Counter from './components/Counter'
import Greeting from './components/Greeting'
import Toggle from './components/Toggle'

class App extends Component {
  
  render() {

    return (
      <>
        <h1>Home Page</h1>
        <Counter />
        <Greeting />
        <Toggle />
      </>
    )
  }
}

export default App
