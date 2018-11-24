import React, { Component } from 'react';
import {connect} from 'react-redux';
import { createPlan } from '../../store/actions/planActions';

class CreatePlan extends Component {
  state = {
    title:'',
    description:'',
    amount:0,
    periodic_budget:0,
    frequency:'',
    current_contribution:0  // Displaying money deducted periodically towards goal
  }

  handleChange = (e) => {
    this.setState({
        [e.target.id] : e.target.value
    })  
  }
  handleSubmit = (e) => {
      e.preventDefault();
      this.props.createPlan(this.state);
  }
    render() {
      
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
            
            <h5 className="grey-text text-darken-3">Create Plan</h5>
            
            {/* Title */}
            <div className="input-field">
                <label htmlFor="title">Plan Title</label>
                <input type="text" id="title" onChange={this.handleChange} />
            </div>

          {/* Amount */}
            <div className="input-field">
                <label htmlFor="amount">Amount</label>
                <input type="number" id="amount" onChange={this.handleChange} />
            </div>

          {/* Periodic Budget */}
            <div className="input-field">
                <label htmlFor="periodic_budget">Periodic Budget</label>
                <input type="number" id="periodic_budget" onChange={this.handleChange} />
            </div>


            {/* Frequency */}
            <div className="input-field">
                <label htmlFor="frequency">Frequency</label>
                <input type="text" id="frequency" onChange={this.handleChange} />
            </div>

            {/* Description */}
            <div className="input-field">
                <label htmlFor="description">Description</label>
                <textarea className="materialize-textarea" type="text" id="description" onChange={this.handleChange} />
            </div>
            
            <div className="input-field">
                <button className="btn pink lighten-1 z-index-0">Create Plan</button>
            </div>
        </form>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    createPlan : (plan) => dispatch(createPlan(plan))
  }
}


export default connect(null,mapDispatchToProps)(CreatePlan);
