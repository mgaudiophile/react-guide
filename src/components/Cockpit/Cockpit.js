import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {

  // useEffect(() => {
  //   console.log('Cockpit.js useEffect()');
  //   // Http request...
  //   setTimeout(() => {
  //     alert('Saved data to cloud');
  //   }, 1000);
  //   return () => {
  //     console.log('Cockpit.js cleanup work in useEffect()');
  //}
  // }, []);  // second arg controls when it runs

  const assignedClasses = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.Red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.Bold);
  }

  return (
    <div className={classes.Cockpit}>
    <h1>{props.title}</h1>
    <p className={assignedClasses.join(' ')}>This is working!</p>
    <button
      className={btnClass}
      onClick={props.clicked} >Toggle Persons
    </button>
    </div>
  );
};

export default cockpit;