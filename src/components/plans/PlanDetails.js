import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


const PlanDetails = (props) => {
    
const { plan } = props;


if (plan){
    return (
                <div className="container section plan-details">
                        <div className="card z-depth-0">
                            <div className="card-content">
                                <span className="card-title">{plan.title}</span>
                                <p>{plan.description}</p>
                            </div>

                            <div className="card-action grey lighten-4 grey-text">
                            <p>Periodic Budget : {plan.periodic_budget}</p>
                            <p className="grey-text">Current Contribution: {plan.current_contribution}</p>
                            <p className="grey-text">Remaining Contribution: {plan.remaining_contribution}</p>
                            {/* <p>Plan Creation Date: {plan.createdAt}</p>         */}
                            </div>
                        </div>
                    </div>
        )}else{
            return (
                        <div className="container-center">
                                    Loading.....
                        </div>
            )
        }


//   return (
    
//   )
}

const matchStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    
    const plans = state.firestore.data.plans;
    const plan = plans ? plans[id] : null;
    return {
        plan : plan
    }                
}
export default compose(
    connect(matchStateToProps),
    firestoreConnect()
)(PlanDetails);