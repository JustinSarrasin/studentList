import React from 'react';
import TestResults from './TestResults';

export default class SingleStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: true
    }
  }

// function Grades(){
//   return <h2>test</h2>;
// }
// function userGreeting(){
//   return <h1>test</h1>
// }

changeExpand(props) {
  const isClicked = this.state.expand
  if(isClicked){
    return null
  } else {
    return <h1>hello</h1>
  }
}

  render() {
    let grades = this.props.student.grades;
    let numGrades = grades.map(Number);

    console.log(numGrades);
    // let scoreNum = this.props
    // console.log('grades', grades);
    let sum, avg = 0;

    if(numGrades.length){
      sum = numGrades.reduce(function(a,b) {
        return a + b;
      })
      avg = sum/numGrades.length;
    }

    {console.log(sum, avg)};
    // for(let i = 0; i < grades.length, i++){
    //   sum += parseInt
    // }
    
    return (
      <div className='studentContainer'>
        <div className='singleStudentContainer'>
            <img src={`${this.props.student.pic}`} alt=""/>
            <div className='studentInfo'>
              <div className='nameContainer'>
                <h2>{this.props.student.firstName} {this.props.student.lastName}</h2>
                  {/* {console.log(this.props.expand)} */}
            
                {/* <button onClick={this.expand}>
                  <i className="fas fa-plus"></i>
                </button> */}
                <button onClick={() =>
                this.setState({ expand: !this.state.expand })}>
                {this.state.expand
                  ? <i className="fas fa-plus"></i>
    
                  :   <i className="fas fa-minus"></i>
  
             
                  
                  
                }}
                </button>
                {/* <button onClick=}{() => 
                  // this.setState({ expand: !this.props.expand})}>
                  // {console.log(this.props.expand)}
                  {this.props.expand 
                  ? <i className="fas fa-plus"></i>
                  : <i className="fas fa-minus"></i>
                  }}
                </button> */}
              </div>

              <p>Email: {this.props.student.email}</p>
              <p>Company: {this.props.student.company}</p>
              <p>Skill: {this.props.student.skill}</p>
              <p>Average: {avg} </p>
              {/* {this.state.expand}
              <TestResults clicked={this.state.expand} grades={this.props} />
              return  */}
                {/* {console.log('grades', grades)} */}
              {grades.map((grade, i) => {
                return <TestResults grade={grade} clicked={this.state.expand} index={i + 1} />
              })}
              {/* <p>{this.props[1]}</p>
             
    */}
              {/* <changeExpand isClicked={false} /> */}
          
              
            </div>
            {/* <p>{props.student.average}</p> */}
            {/* <img src={`https://image.tmdb.org/t/p/w200/${props.movie.poster_path}`} alt="" /> */}
        </div>
      </div>
    )
  }
} 

// export default SingleStudent;