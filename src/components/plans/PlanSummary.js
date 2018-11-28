import React from 'react';

const PlanSummary = ({plan}) => {
    // var parser=new DOMParser();
    // const frequency = parser.parseFromString(plan.frequency, "text/html");
    
    return (
        <div className="card z-depth-0 plan-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">
                        {plan.title}    
                    </span>
                    <p>Frequency: {plan.frequency}</p>
                    <p>Description: {plan.description}</p>
                    <p>Amount: ${plan.amount}</p>
                    <p>Next Withdrawal: After a Given period</p>
                </div>
            </div>
    )
}

export default PlanSummary;