import React, { useState } from 'react'
const Stats = (props) => {
  return (
    <div>All {props.good+ props.neutral+ props.bad}</div>
  )
}



const Statistics = (props) => {
  // ...
  const  yhteensa= props.good + props.neutral + props.bad
  const pos =props.good/yhteensa * 100
  const aver = (props.good-props.bad)/yhteensa

  if (isNaN(pos)  || isNaN(aver) ){
    return (
      <div>
        <p>no feedback given</p>
      </div>
    )
  }else{

  return (
   <div>
     <p>positive {pos} % </p>
     <p>average {aver} % </p>
    
   </div>
  )
  }
}

const App = () => {
  
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1> give feedback</h1>
      <button onClick={() => setGood(good + 1)}>
      good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
      neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
      bad
      </button>
      <h2>statistics</h2>
      <p>
      good {good} <br></br>
      neutral {neutral} <br></br>
      bad {bad}
      </p>
      
      <Stats good ={good} neutral = {neutral} bad = {bad}/>
      

      
      < Statistics good ={good} bad ={bad} neutral ={neutral} />
    </div>
  )
}

export default App
