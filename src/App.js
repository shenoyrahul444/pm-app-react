import React, { Component } from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Dashboard from './dashboard/Dashboard';
import PlanDetails from './plans/PlanDetails';


class App extends Component {
  render() {
    return (
        <BrowserRouter>

            <div className="App">
            
                      <Navbar />
                      
                      <Switch>
                        <Route exact path = "/" component={Dashboard} />
                        <Route path = "/plan/:id" component={PlanDetails} />
                      
                      </Switch>


              
            </div>
      </BrowserRouter>

    );
  }
}

export default App;
