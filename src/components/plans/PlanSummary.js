import React from 'react';

const PlanSummary = ({plan}) => {
    
    return (
        <div className="card z-depth-0 plan-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">
                        {plan.title}
                    </span>
                    <p>Frequency: {plan.frequency}</p>
                    <p>Periodic Budget : {plan.periodic_budget}</p>
                    <p>Description: {plan.description}</p>
                    <p>Amount: {plan.amount}</p>
                    
                    <p className="grey-text">Current Contribution: {plan.current_contribution}</p>
                    <p className="grey-text">Remaining Contribution: {plan.remaining_contribution}</p>
                    
                    <p>Next Withdrawal: After a Given period</p>
                </div>
            </div>
    )
}

export default PlanSummary;