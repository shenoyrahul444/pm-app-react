import React from 'react';

const PlanSummary = ({plan}) => {
    
    return (
        <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">
                        {plan.title}
                    </span>
                    <p>Posted by Rahul Shenoy</p>
                    <p className="grey-text">21st November 2018</p>
                </div>
            </div>
    )
}

export default PlanSummary;