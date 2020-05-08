import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupFormContainer from './session/signup_container';
import LoginFormContainer from './session/login_container';
import GreetingContainer from './greeting/greeting_container';



const App = () => (
  <div>
    <header> 
      <h1 className='title'>Tetsy</h1>
      <GreetingContainer/>
    </header>
    <Switch>
      <Route path='/signup' component={SignupFormContainer} />
      <Route path='/login' component={LoginFormContainer} />
    </Switch>

  </div>
)

export default App;