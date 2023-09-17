import { useState } from 'react'

const AutoCounter = (props) => {
  return(
    <div>
      <h2>Auto Counter</h2>
      <p>Counter: {props.counter}</p>
    </div>
  )
}

const ButtonCounter = (props) => (
  <div>
    <h2>Button Counter</h2>
    <button onClick={props.plusClickEvent}> + Plus +</button>
    <button onClick={props.resetClickEvent}> + Reset +</button>
    <p>Counter: {props.btnCounter}</p>
  </div>
);

const App = (props) => {
  const [ counter, setCounter] = useState(0)
  const [ btnCounter, setBtnCounter] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  const handleButtonClick = (btnId) => {
    if(btnId === 0) {
     setBtnCounter(btnCounter - btnCounter)
    } else {
     setBtnCounter(btnCounter + 1)
    }  
  }
  const handleResetClick = () => {
    handleButtonClick(0);
  }

  return (
    <div>
    <h1>##### Stateful example #####</h1>
    <AutoCounter counter = {counter} />
    <ButtonCounter btnCounter = {btnCounter} plusClickEvent = {handleButtonClick} resetClickEvent = {handleResetClick} />
    </div>
  )
}

export default App