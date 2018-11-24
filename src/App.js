import React, { Component } from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';

import PlanDetails from './components/plans/PlanDetails';
import CreatePlan from './components/plans/CreatePlan';

import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';

class App extends Component {
  render() {
    return (
        <BrowserRouter>

            <div className="App">
            
                      <Navbar />
                      
                      <Switch>
                        <Route exact path = "/" component={Dashboard} />
                        <Route path = "/plan/:id" component={PlanDetails} />
                        <Route path = "/signin" component={Signin} />
                        <Route path = "/signup" component={Signup} />
                        <Route path = "/create" component={CreatePlan} />
                      
                      </Switch>


              
            </div>
      </BrowserRouter>

    );
  }
}

export default App;
