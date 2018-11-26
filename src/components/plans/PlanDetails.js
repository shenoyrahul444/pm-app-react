import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import { deletePlan } from '../../store/actions/planActions';


const PlanDetails = (props) => {
    
const { plan,id } = props;

function delete_plan(){
 props.delete_plan(id);   
 console.log(props.history.push('/'));
}

if (plan){
    return (
                <div className="container section plan-details">
                        <div className="card z-depth-0">
                            <div className="card-content">
                                <span className="card-title">{plan.title}</span>
                                <p>{plan.description}</p>
                            </div>

                            <div className="card-action grey lighten-4 grey-text">
                                    <p>Frequency: {plan.frequency}</p>
                                    <p>Description: {plan.description}</p>
                                    <p>Amount: ${plan.amount}</p>
                                    <p>Next Withdrawal: After a Given period</p>    
                                    <p>Periodic Budget : ${plan.periodic_budget}</p>
                                    <p className="grey-text">Current Contribution: ${plan.current_contribution}</p>
                                    <p className="grey-text">Remaining Contribution: ${plan.remaining_contribution}</p>
                                    <button className="btn" onClick={delete_plan} >Delete Plan</button>
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
}

const matchStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const plans = state.firestore.data.plans;
    const plan = plans ? plans[id] : null;

    return {
        plan : plan,
        id
    }                
}

const matchDispatchToProps = (dispatch) =>{
    return {
        delete_plan : (id) =>  dispatch(deletePlan(id))
        
        }
    }

export default compose(
    connect(matchStateToProps,matchDispatchToProps),
    firestoreConnect()
)(PlanDetails);