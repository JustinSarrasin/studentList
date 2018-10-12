import React from 'react';
import TestResults from './TestResults';
import AddTag from './AddTag';

export default class SingleStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: true
    }
  }

  render() {
    let grades = this.props.student.grades;
    let numGrades = grades.map(Number);

    let sum, avg = 0;

    if(numGrades.length){
      sum = numGrades.reduce(function(a,b) {
        return a + b;
      })
      avg = sum/numGrades.length;
    }

    return (
      <div className='studentContainer'>
        <div className='singleStudentContainer'>
            <img src={`${this.props.student.pic}`} alt=""/>
            <div className='studentInfo'>
              <div className='nameContainer'>
                <h2>{this.props.student.firstName} {this.props.student.lastName}</h2>
                <button onClick={() =>
                this.setState({ expand: !this.state.expand })}>
                {this.state.expand
                  ? <i className="fas fa-plus"></i>
                  : <i className="fas fa-minus"></i> 
                }
                </button>
              </div>

              <p>Email: {this.props.student.email}</p>
              <p>Company: {this.props.student.company}</p>
              <p>Skill: {this.props.student.skill}</p>
              <p>Average: {avg}% </p>

              {grades.map((grade, i) => {
                return <TestResults grade={grade} clicked={this.state.expand} index={i + 1} key={i}/>
              })}

              {!this.state.expand ? <AddTag tagValue={this.props.tagValue} students={this.props.studentsArray}/> : null}
            </div>
        </div>
      </div>
    )
  }
} 
