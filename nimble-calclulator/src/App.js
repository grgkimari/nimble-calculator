import './App.css';
import './Components/Button'
import Button from './Components/Button';
import Display from './Components/Display';
import {useState, useReducer} from 'react'

const initialState = {
  topDisplayContent : "",
  bottomDisplayContent : "0",
  result: null,

}

const mainReducer = (state = initialState, action) =>{
  switch (action.type){
    case "SET-RESULT":
      console.log("SETTING RESULT : \n", JSON.stringify(action))
      return {
        topDisplayContent: state.bottomDisplayContent,
        bottomDisplayContent: action.payload.result,
        result: action.payload.result,
      }

    case 'CLEAR': 
      return {
        topDisplayContent : "",
        bottomDisplayContent : "0",
        result: null,
      
      }   

    case 'UPDATE-BOTTOM-DISPLAY':
      return Object.assign({}, state, {bottomDisplayContent : action.payload.bottomDisplayContent})
    default:
      return state
  }
}


function App() {

 const [state, dispatch] = useReducer(mainReducer, initialState)


  const addToDisplay = (event) => {
    let char = event.target.innerHTML
    const arr = state.bottomDisplayContent.trim().split(' ')
    if(char === '.'){
      
      if(/[.]/.test(arr[arr.length - 1])){
        return
      }
    }

    if(state.bottomDisplayContent === "0"){
      let action = {
        type : "UPDATE-BOTTOM-DISPLAY",
        payload: {
          bottomDisplayContent: event.target.innerHTML,
        }
      }
      dispatch(action)
    }
    else if(/^[/*+-]$/.test(char)){
      let action = {
        type : "UPDATE-BOTTOM-DISPLAY",
        payload: {
          bottomDisplayContent: state.bottomDisplayContent += (" " + event.target.innerHTML + " "),
        }
      }
      dispatch(action)
    }
    else{
      let action = {
        type : "UPDATE-BOTTOM-DISPLAY",
        payload: {
          bottomDisplayContent: state.bottomDisplayContent += event.target.innerHTML,
        }
      }
      dispatch(action)    }
  }

  const clearAll = (event) => {
    let action = {
      type : "CLEAR",
    }
    dispatch(action)
  }

  const calculate = () => {

   let action = {
    type : "SET-RESULT",
    payload : {
      result: eval(state.bottomDisplayContent),
    }
   }
   dispatch(action)
  }

  return (
    <div className="App">
      <div id="topPanel">
      <Display id="previous" displayContent={state.topDisplayContent}></Display>
      <Display displayContent = {state.bottomDisplayContent}  id="display"></Display>
      </div>
      <Button id="equals" btnText="=" clickFunction={calculate} className="btn" ></Button>
      <Button  id="one" btnText="1"clickFunction={addToDisplay} className="btn"></Button>
      <Button id="two" btnText="2"clickFunction={addToDisplay} className="btn"></Button>
      <Button id="three" btnText="3" clickFunction={addToDisplay} className="btn"></Button>
      <Button id="four" btnText="4" clickFunction={addToDisplay} className="btn"></Button>
      <Button id="five" btnText="5" clickFunction={addToDisplay} className="btn"></Button>
      <Button id="six" btnText="6" clickFunction={addToDisplay} className="btn"></Button>
      <Button id="seven" btnText="7" clickFunction={addToDisplay} className="btn"></Button>
      <Button id="eight" btnText="8" clickFunction={addToDisplay} className="btn"></Button>
      <Button id="nine" btnText="9" clickFunction={addToDisplay} className="btn"></Button>
      <Button id="add" btnText="+" clickFunction={addToDisplay} className="btn"></Button>
      <Button id="multiply" btnText="*" clickFunction={addToDisplay} className="btn"></Button>
      <Button id="divide" btnText="/" clickFunction={addToDisplay} className="btn"></Button>
      <Button id="subtract" btnText="-" clickFunction={addToDisplay} className="btn"></Button>
      <Button id="zero" btnText="0" clickFunction={addToDisplay} className="btn"></Button>
      <Button id="decimal" btnText="." clickFunction={addToDisplay} className="btn"></Button>
      <Button id="clear" btnText="AC" clickFunction={clearAll}></Button>

    </div>
  );
}



export default App;
