import React from 'react'

export default function PlanDetails(props) {

    console.log(props.match.params.id);
  return (
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Plan Title</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo dolore nemo officia quia consectetur dignissimos eius? Ratione optio inventore repudiandae reiciendis fugit dolorem soluta sint, praesentium atque. Eveniet, architecto suscipit.</p>
            </div>

            <div className="card-action grey lighten-4 grey-text">
                <div>Posted by Rahul Shenoy</div>
                <div>on 21st Nov, 2018</div>
            </div>
        </div>
    </div>
  )
}
