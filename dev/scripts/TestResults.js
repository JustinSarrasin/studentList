import React from 'react';


const TestResults = (props) => {
  if(!props.clicked){
    return <div>
      <p>Test {props.index} <span>{props.grade}%</span></p>
    </div>
  } else {
    return null
  }
}

export default TestResults;