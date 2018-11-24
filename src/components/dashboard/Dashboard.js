import React , {Component} from 'react';
import Notifications from './Notifications';
import PlanList from '../plans/PlanList';
import {connect} from 'react-redux';


class Dashboard extends Component {

    render(){

        // console.log(this.props)
        const { plans } = this.props;


    return (
        <div className="dashboard container">
            <div className="row">
                
                <div className="col s12 m6">
                
                    <PlanList plans = {plans} />
                
                </div>
                
                <div className="col s12 m5 offset-m1">
                
                        <Notifications />
                
                </div>
            
            </div>
        </div>

    )}
};

const mapStateToProps = (state) => {
    console.log(state);
    return (
        {
            plans : state.plan.plans
        }
    )
}

export default connect(mapStateToProps)(Dashboard);