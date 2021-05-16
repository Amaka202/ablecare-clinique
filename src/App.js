import { Route, Switch } from "react-router-dom";
import React from 'react'
import 'rsuite/dist/styles/rsuite-default.css';
import {ProtectedRoutes} from './components/ProtectedRoute';

import './App.css';
import SIgnUp from "./components/SIgnUp";
import Login from "./components/Login";
import Home from "./components/Home";
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div className="">
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/signup' exact component={SIgnUp} />
          <Route path='/login' exact component={Login} />
          {/* <Route path='/dashboard' exact component={Dashboard} /> */}
          <ProtectedRoutes path='/dashboard' exact component={Dashboard} />

          
      </Switch> 
    </div>
  );
}

export default App;
