import React from 'react';


const TestResults = (props) => {
  // return <h1>{props.grade}</h1>
  if(!props.clicked){
    return <p>Test {props.index} <span>{props.grade}%</span></p>
  } else {
    return null
  }
}

export default TestResults;