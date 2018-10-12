import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SingleStudent from './SingleStudent';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      students: [],
      value: '',
      expand: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.changeExpand = this.changeExpand.bind(this);
    // console.log('test');
  }

  componentDidMount() {
    axios.get(`https://www.hatchways.io/api/assessment/students`, {
    })
      .then(({ data }) => {
        // console.log(data.students);
        this.setState({
          students: data.students
        });
      });
  }

  handleChange(e) {
    this.setState({value: e.target.value})
    // console.log(e.target.value);
  }

  changeExpand(e){
    this.setState(prevState => ({
    expand: !prevState.check
  }))
}

  // findAverage = (props) => {
  //   console.log(props.grades);
  //   // let sum =
  // }
    render() {
      let filteredName = this.state.students.filter((student) => {
        return student.firstName.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1 || student.lastName.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1;
      })
      return (
        <div className='page'>
          {/* <div className='test'> */}
            <div className='wrapper'>
              {/* <div> */}
                <input type="text" placeholder="Search by name" onChange={this.handleChange}/>
  
  
                {/* <ul>
                  <li>
                  {filteredName.map((student, key) => {
                    return 
                    <div className='studentContainer'>
                      <div className='singleStudentContainer'>
                        <img src={`${student.pic}`} alt="" />
                        <div className='studentInfo'>
                          <div className='nameContainer'>
                            <h2>{student.firstName} {student.lastName}</h2>
  
                             
                          </div>
  
                          <p>Email: {student.email}</p>
                          <p>Company: {student.company}</p>
                          <p>Skill: {student.skill}</p>
                          <p>Average: </p>
                        </div>
                      </div>
                    </div>
  
  
                    
  
  
                  })}
                  </li>
                </ul> */}
              {filteredName.map((student, key) => {
                return <SingleStudent student={student} key={student.id} expand={this.changeExpand} />
              })}
  
              
                {/* {filteredName.map((student) => {
                  // return student
                  // console.log('student', student);
                  return <SingleStudent student={student} key={student.id} expand={this.changeExpand} />
                })} */}
              {/* </div> */}
            {/* </div> */}
          </div>
        </div>
        // <div>
        //   <p>hello yal</p>
        // </div>
      )
    }
}

const test = () => {
  console.log('test');
}

ReactDOM.render(<App />, document.getElementById('app'));
