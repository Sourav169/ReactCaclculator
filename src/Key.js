import React from "react";
 class Key extends React.Component{
    buttonClick = (e) =>{
        this.props.buttonClick(e.target.id);
     };
    render(){
       
        return(
       <div className="buttons"> 
     
       <button id='c' onClick={this.buttonClick}>c</button>
       <button id='ce' onClick={this.buttonClick}>ce</button>
       <button id='(' onClick={this.buttonClick}>(</button>
       <button id=')' onClick={this.buttonClick}>)</button> 
       <button id='7' onClick={this.buttonClick}>7</button>
       <button id='8' onClick={this.buttonClick}>8</button>
       <button id='9' onClick={this.buttonClick}>9</button>

       <button id='*' onClick={this.buttonClick}>*</button>
       <button id='4' onClick={this.buttonClick}>4</button>
       <button id='5' onClick={this.buttonClick}>5</button>
       <button id='6' onClick={this.buttonClick}>6</button>
       <button id='-' onClick={this.buttonClick}>-</button>  
      
       <button id='1' onClick={this.buttonClick}>1</button>
       <button id='2' onClick={this.buttonClick}>2</button>
       <button id='3' onClick={this.buttonClick}>3</button>
       <button id='+' onClick={this.buttonClick}>+</button> 
       <button id='.' onClick={this.buttonClick}>.</button>
       <button id='0' onClick={this.buttonClick}>0</button>
       <button id='/' onClick={this.buttonClick}>/</button>
       <button id='=' onClick={this.buttonClick}>=</button>
      </div>
          
        );

    
    }
}
export default Key;
