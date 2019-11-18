import React from 'react';
import './App.css';
import  { Route } from 'react-router-dom'

import BracketInput from './pages/BracketInput/bracket'

class App extends React.Component {
  render() {
    return(
      <div>
        <Route exact path ='/' component = {BracketInput} />
      </div>
    )
  }
}
export default App;
