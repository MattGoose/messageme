import React from 'react';

//library handles routing
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
// import Footer from './components/layout/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
