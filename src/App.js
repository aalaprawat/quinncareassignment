import React, { Component } from 'react';
import Nav from './components/navigation';
import Top from './components/top';
import Home from './components/home'
import Calendar from './components/calendar'
import axios from 'axios'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[]
    }
  }
  componentDidMount(){
    axios.get("https://gorest.co.in/public-api/users")
    .then((result)=>{
      result=result.data.data
      this.setState({data:result})
    })
  }
  
render(){
  return (
    <Router>
      
    <div className="App">
      <Top></Top>
        <Switch>
          <Route path='/calendar' ><Calendar data={this.state.data}/></Route>
          <Route exact path='/'><Home data={this.state.data}/></Route>
        </Switch> 
      <Nav></Nav>
    </div>
    </Router>
      
  )
}
}

export default App;
