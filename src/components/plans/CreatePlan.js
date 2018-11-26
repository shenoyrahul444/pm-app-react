import React, { Component } from 'react';
import {connect} from 'react-redux';
import { createPlan } from '../../store/actions/planActions';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class CreatePlan extends Component {
  state = {
    title:'',
    description:'',
    amount:0,
    periodic_budget:0,
    frequency:'',
    value:'Select an option',
    current_contribution:0  // Displaying money deducted periodically towards goal
  }
  
  handleChange = (e) => {
    this.setState({
        [e.target.id] : e.target.value,
        
    })  
    console.log(this.state);
  }
  handleSubmit = (e) => {
      e.preventDefault();
      this.props.createPlan(this.state);
      console.log(this.props.history.push('/'));
  }

    render() {

      const options = [
        {label:'Weekly',value:"Weekly"},
        {label:'Biweekly',value:"Biweekly"},
        {label:'Monthly',value:"Monthly"},
        {label:'Quarterly',value:"Quarterly"},
        {label:'Yearly',value:"Yearly"}
      ]
      const defaultOption = options[0];
      const frequency_drowdown = <Dropdown options={options} onChange={this.onChange} id="frequency"  value={defaultOption} placeholder="Select an option" />
      
      const hardcoded_dropdown =   
            <select id="frequency" onChange={this.handleChange} value={this.state.value}>
                  <option value="select">Select</option>
                  <option value="week">Weekly</option>
                  <option value="biweek">Biweekly</option>
                  <option value="month">Monthly</option>
                  <option value="quarter">Quarterly</option>
                  <option value="year">Yearly</option>
               </select> 
              
      const years_required = (this.state.amount > 0 && this.state.periodic_budget >0)  
                              ?
                                       <p className="duration-message"> The duration for the completion is: {Math.ceil(this.state.amount/this.state.periodic_budget)} years </p> 
                              : null;
                                  
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
            
            <h5 className="grey-text text-darken-3">Create Plan</h5>
            
            {/* Title */}
            <div className="input-field">
                <label htmlFor="title">Plan Title <sub>(Like Car, Bike)</sub></label>
                <input type="text" id="title" onChange={this.handleChange} />
            </div>

            {/* Description */}
            <div className="input-field">
                <label htmlFor="description">Description</label>
                <textarea className="materialize-textarea" type="text" id="description" onChange={this.handleChange} />
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
          {years_required}
            
            
            {/* Frequency */}
            
            <div className="input-field">
                <label htmlFor="frequency">Frequency</label>
                {/* {frequency_drowdown} */}
                <input type="text" id="frequency" onChange={this.handleChange} />
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
