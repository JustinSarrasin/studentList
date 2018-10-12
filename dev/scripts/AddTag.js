import React from 'react';


export default class AddTag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tagValue: '',
      tags: []
    }
    this.handleTagChange = this.handleTagChange.bind(this);
    this.addTag = this.addTag.bind(this);
  }
  
  handleTagChange(e) {
    this.setState({tagValue: e.target.value})
  }

  addTag(e) {
    e.preventDefault();
    const newTagName = {
      value: this.state.tagValue
    }

    const newTagArray = Array.from(this.state.tags)
    newTagArray.push(newTagName);

    this.setState({
      tags: newTagArray,
      tagValue: ''
    })
  }

  render(){
    // console.log('at', this.props.tagValue);
    console.log('tag', this.props.students);
    let filteredTag = this.state.tags.filter((tag) => {
      // this.props.students.tags = tag.value;
      // console.log('tv', this.props.students.tags);
      return this.props.student
      // tag.value.toLowerCase().indexOf(this.props.tagValue.toLowerCase()) !== -1;
      // return this.props.student.includes(tag);
      // console.log(this.props.student);
      // return this.props.student
    });

    // console.log('ft', filteredTag);

    // let filteredTag = this.state.students.filter((student) => {
    //   return student.firstName.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1 || student.lastName.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1;
    // })
    return (
    <div>
      
        {this.state.tags.map((tag, i) => {
          // console.log(tag);
          // {this.state.tags.map((tag) => {
            return (
              <div key={i} className="tags">
                  <p>{tag.value}</p>
            
                {/* {this.props.students.map((i) => {
                  return this.props.students = tag.value;
                })} */}
              </div>
          )
        })}
        {console.log('st', this.props.students.tag)}
  
      <form action="" onSubmit={this.addTag}>
        <input className="addTag" type="text" name="tagValue" value={this.state.tagValue} onChange={this.handleTagChange} placeholder="Add a tag" />
      </form>

    </div>

    )
  }


}

// export default AddTag;