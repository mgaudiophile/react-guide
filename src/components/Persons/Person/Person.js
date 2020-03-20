import React, { Component } from 'react';
import classes from './Person.module.css';

class Person extends Component {
  
  // static getDerivedStateFromProps(props, state) {
  //   console.log('Person.js getDerivedStateFromProps()');
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log('Person.js componentWillReceiveProps()', props);
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Person.js shouldComponentUpdate()');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Person.js getSnapshotBeforeUpdate()');
    return {message: 'Snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Person.js componentDidUpdate()');
    console.log(snapshot);
  }

  render() {
    console.log('Person.js rendering...')
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    )
  }
}

export default Person;
