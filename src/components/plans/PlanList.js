import React from 'react';
import PlanSummary from './PlanSummary';

const PlanList = ({plans}) => {

    // const { plans } = this.props;


    return (
        <div className="plan-list section">
            {
                plans && plans.map(plan => {
                    return (
                        <PlanSummary plan={plan} key={plan.id} />
                        )
                    }
                )
            }
        </div>
    )
}

export default PlanList;