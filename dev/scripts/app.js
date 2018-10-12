import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SingleStudent from './SingleStudent';
import AddTag from './AddTag';



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
  }

  changeExpand(e){
    this.setState(prevState => ({
    expand: !prevState.check
   }))
  }

    render() {
      let filteredName = this.state.students.filter((student) => {
        return student.firstName.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1 || student.lastName.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1;
      })
      return (
        <div className='page'>
            <div className='wrapper'>
                <input type="text" placeholder="Search by name" onChange={this.handleChange}/>
                <input type="text" placeholder="Search by tag" onChange={this.handleChange}/>

                {filteredName.map((student, key) => {
                  return <SingleStudent student={student} key={student.id} expand={this.changeExpand} /> 
                  // <AddTag />
                })}
          </div>
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
