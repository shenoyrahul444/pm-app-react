import React, { Component } from 'react'

export default class CreatePlan extends Component {
  state = {
    title:'',
    content:''
  }
  handleChange = (e) => {
    this.setState({
        [e.target.id] : e.target.value
    })  
  }
  handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
  }
    render() {
      
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="while">
            
            <h5 className="grey-text text-darken-3">Create Plan</h5>
            
            <div className="input-field">
                <label htmlFor="title">Plan Title</label>
                <input type="text" id="title" onChange={this.handleChange} />
            </div>
            <div className="input-field">
                <label htmlFor="content">Plan Content</label>
                <textarea className="materialize-textarea" type="text" id="content" onChange={this.handleChange} />
            </div>
            <div className="input-field">
                <button className="btn pink lighten-1 z-index-0">Create Plan</button>
            </div>
        </form>
      </div>
    )
  }
}
