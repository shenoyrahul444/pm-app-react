import React , {Component} from 'react';
import Notifications from './Notifications';
import PlanList from '../plans/PlanList';
import {connect} from 'react-redux';

import {compose} from 'redux';
import {firestoreConnect } from 'react-redux-firebase';

class Dashboard extends Component {


    handleBankConnect(e){
        alert("To be Implemented");
    }


    render(){

                const netSpendableIncome = 10000;
                const { plans } = this.props;

                const btn_style = {
                    margin:10
                };


                return (
                    <div className="dashboard container">
                        <div className="row">
                            
                            <div className="col s12 m6">
                                <h5 className="grey-text text-darken-3"> Net Spendable Income: ${netSpendableIncome}</h5>

                                <button className="btn bank-connect-btn" style={btn_style} onClick={this.handleBankConnect} >Connect with Bank Account</button>
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
    return (
        {
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