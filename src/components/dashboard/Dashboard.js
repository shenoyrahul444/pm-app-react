import React , {Component} from 'react';
import Notifications from './Notifications';
import PlanList from '../plans/PlanList';
import {connect} from 'react-redux';

import {compose} from 'redux';
import {firestoreConnect } from 'react-redux-firebase';

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
            // plans : state.plan.plans
            plans : state.firestore.ordered.plans
        }
    )
}



// Compose for composing multiple HOC. FirestoreConnect Syncs
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection:'plans'
        }
    ])
)(Dashboard);