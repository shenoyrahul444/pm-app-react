import React, { Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Dashboard from './dashboard/Dashboard';


class App extends Component {
  render() {
    return (
        <BrowserRouter>

            <div className="App">
            
                      <Navbar />
                      
                      <switch>
                        <Route path = "/" component={Dashboard} />
                      
                      
                      </switch>


              
            </div>
      </BrowserRouter>

    );
  }
}

export default App;
