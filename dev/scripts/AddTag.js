import React from 'react';


export default class AddTag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tagValue: 'test',
      tags: ['test']
    }
    this.handleTagChange = this.handleTagChange.bind(this);
    this.addTag = this.addTag.bind(this);
  }
  
  handleTagChange(e) {
    this.setState({ tagValue: e.target.value })
    console.log(e.target.value);
  }

  addTag(e) {
    e.preventDefault();
    const newTagName = {
      value: this.state.tagValue
    }

    const newTagArray = Array.from(this.state.tags)
    newTagArray.push(newTagName);

    this.setState({
      tags: newTagArray
    })
  }

  render(){
    return (
    <div>
      
        {this.state.tags.map((tag) => {
          return (
            <div className="tags">
              {tag.value}
            </div>
          )
        })}
  
      <form action="" onSubmit={this.addTag}>
        <input className="addTag" type="text" name="tagValue" value={this.state.tagValue} onChange={this.handleTagChange} placeholder="Add a tag" />
      </form>

    </div>

    )
  }


}

// export default AddTag;