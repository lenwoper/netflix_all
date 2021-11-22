import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Error from './components/Error';
import Sigh from './components/Sigh';

function App() {

  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/sigh" component={Sigh} />
      {/* itis 404 components that why we have not any exact path for this  */}
      <Route component={Error} />
    </Switch>
  )
}
export default App;
