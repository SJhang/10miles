import React, { PropTypes } from 'react'
import { Route, Switch } from 'react-router-dom';

// custom components
import Splash from './splash/splash';
import Navbar from './shared/navbar';
import Chat from './chat/chat';
import About from './shared/about';
import Contact from './shared/contact';

const App = (props) => {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Splash}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/chat' component={Chat}/>
      </Switch>
    </div>
  )
}

export default App;
