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
    otherState: 'Some other value',
    showPersons: false
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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 23 },
        { name: 'Manu', age: 114 },
        { name: 'Stephanie', age: 57 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  // bind is more efficient than anonymous function
  render () {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>class is not used in JSX</p>
        <button onClick={this.togglePersonsHandler} >Switch Name</button>
        { this.state.showPersons === true ? 
          <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}
            changed={this.nameChangedHandler}
          />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} 
            click={this.switchNameHandler.bind(this, 'Secret')}>My Hobbies: Racing!
          </Person>
        </div> : null
        }
      </div>
    );
  }
}

export default App;