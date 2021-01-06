import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import App2 from "./App2"
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      template:"Starting",
      data:"",
      view:true
    }
  }
  componentDidMount(){
// this.setState({
//   template:"Starting Now"
// });
alert("Welcome to Lifecycle")

  }
  componentDidUpdate(prevstate){
    if(this.state.template !== prevstate.template){
      alert("the Component is Updated")
    }
  }
  update=()=>{
    this.setState({
      template:"All is well"
    })
      }
  next =()=>{
    this.setState({
      view:false
    })
  }
 

  render(){
  return (
    <div className="App">
    {this.state.view &&
    <div>
    <h1>LifeCycle</h1>
      <header className="App-header">        
        <p>
        {this.state.template} 
        <br/>
        {this.state.data}
        </p>
       <button onClick={this.update}>Clickhere</button>
       <button onClick={this.next}>Next</button>
      </header>
      </div>}
{!this.state.view && 
<div>
  <App2 template={this.state.template}/>
</div>
}

    </div>
  );
  }
}

export default App;
