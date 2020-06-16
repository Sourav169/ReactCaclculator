import React from 'react';
import './App.css';
import Key from "./Key.js";
import Result from "./Result.js";


 class  App extends React.Component {
   state={
     result:" "

   }
  buttonClick=(buttoId)=>{
    if(buttoId==="="){
      this.cal()
    }else
    if(buttoId==="c"){
      this.reload()
    }else if(buttoId==="ce"){
      this.backspace()
    }else
    
    this.setState({
      result:this.state.result + buttoId
    }

    );

  };
  reload=()=>{
    this.setState({
      result:" "

    }

    );
  };
  backspace=()=>{
    this.setState({
          result:this.state.result.slice(0, -1)
    })
  };
  cal=()=>{
    try {
      this.setState({
          
          result: (eval(this.state.result) || "" ) + ""
      })
  } catch (e) {
      this.setState({
          result: "not a valid input"
      })

  }
  };
  render(){
  return (
    <div className="App">
      <div className="Calc">
      <Result result={this.state.result}/>
       <Key buttonClick={this.buttonClick}/>
       </div>
    </div>
  );
}
}

export default App;
