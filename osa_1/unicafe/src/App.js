import React, { useState } from 'react'
const Stats = (props) => {
  return (
    <div>All {props.good+ props.neutral+ props.bad}</div>
  )
}
const Keskiarvo = (props) =>{
  
  const  yhteensa= props.good + props.neutral + props.bad
  const  good =props.good

  
  return (
   <div>
     <p>positive {good/yhteensa * 100} %</p>
   
   </div>
  )
}
const Average = ({good, bad,neutral}) => {
  const  yhteensa= good + neutral + bad
  return(
    <div>
      <p>average {(good-bad)/yhteensa} % </p>
    </div>
  )
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
      < Keskiarvo  good ={good} neutral ={neutral} bad ={bad}/>

      < Average good ={good} bad ={bad} neutral ={neutral} />
    </div>
  )
}

export default App
