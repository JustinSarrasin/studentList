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
      tagSearchValue: '',
      expand: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleTagChange = this.handleTagChange.bind(this);
    this.changeExpand = this.changeExpand.bind(this);
  }

  componentDidMount() {
    axios.get(`https://www.hatchways.io/api/assessment/students`, {
    })
      .then(({ data }) => {
        this.setState({
          students: data.students
        });
      });
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  handleTagChange(e) {
    this.setState({tagSearchValue: e.target.value})
  }

  changeExpand(e){
    this.setState(prevState => ({
      expand: !prevState.check
    }))
  }

    render() {
      let filteredName = this.state.students.filter((student) => {
        return student.firstName.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1 || student.lastName.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1;
      });

      // this.state.students.map((student, i) => {
      //   return student.tag = [];
      // })
 
      return (
        <div className='page'>
            <div className='wrapper'>
                <input type="text" placeholder="Search by name" onChange={this.handleChange}/>
                <input type="text" placeholder="Search by tag" onChange={this.handleTagChange}/>

                {filteredName.map((student, key) => {
                  return <SingleStudent student={student} key={student.id} expand={this.changeExpand} tagValue={this.state.tagSearchValue} studentsArray={this.state.students} /> 
                })}
          </div>
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
