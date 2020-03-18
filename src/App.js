import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 23 },
      { name: 'Manu', age: 14 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'Some other value'
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    // DON'T DO THIS: this.persons[0].name = 'Maxamilian';
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: 'Manu', age: 114 },
        { name: 'Stephanie', age: 57 }
      ]
    })
  }
  // bind is more efficient than anonymous function
  render () {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>class is not used in JSX</p>
        <button onClick={ () => this.switchNameHandler('Better')} >Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} 
          click={this.switchNameHandler.bind(this, 'Secret')}>My Hobbies: Racing!
        </Person>
      </div>
    );
  }
}

export default App;