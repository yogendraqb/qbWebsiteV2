import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

// import Login from './components/common/Login';
// import LoggedIn from './components/common/LoggedIn';
import LandingPage from './components/LandingPage';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
      <BrowserRouter>

        <div className="App" style={{height:'100%'}}>
           <Switch>   
            {/* <Route exact path="/login" component={Login}/>   */}
            <Route exact path="/" component={LandingPage}/> 
            {/* <Route  path="/" component={LoggedIn}/>  */}

           </Switch> 
        </div>

      </BrowserRouter>

      </Provider>
    );
  }
}


 
export default App;