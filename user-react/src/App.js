import React from 'react';
import _ from 'lodash';
import './App.css';
import { BrowserRouter as Router ,Switch } from 'react-router-dom';

/* router */
import { routerConfig } from './Router/index';
import PrivateRouter from './Common/PrivateRoute';

function App () {
  function renderRouter (){

    return _.map(routerConfig,(item)=>{

      return (

        <PrivateRouter { ...item } key={ Math.random() }/>
      );
    });
  }
  return (
    <Router>
      <div className="App">
        <Switch>
          { renderRouter()}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
