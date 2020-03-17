import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = (props) => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 23 },
      { name: 'Manu', age: 14 },
      { name: 'Stephanie', age: 26 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value');
  console.log(personsState, otherState);

  const switchNameHandler = () => {
    //console.log('Was clicked!');
    // DON'T DO THIS: personsState.persons[0].name = 'Maxamilian';
    setPersonsState({
      persons: [
        { name: 'Maxamilian', age: 23 },
        { name: 'Manu', age: 114 },
        { name: 'Stephanie', age: 57 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App!</h1>
      <p>class is not used in JSX</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>My Hobbies: Racing!</Person>
    </div>
  )
};

export default App;