import React, { useState } from 'react'




const Statistics = (props) => {
  // ...
  const all = props.good+ props.neutral+ props.bad
  const  yhteensa= props.good + props.neutral + props.bad
  const pos =props.good/yhteensa * 100
  const aver = (props.good-props.bad)/yhteensa

  if (isNaN(pos)  || isNaN(aver) || isNaN(all) ){
    return (
      <div>
        <p>no feedback given</p>
      </div>
    )
  }else{

  return (
   <div>
     <p>
      good {props.good} <br></br>
      neutral {props.neutral} <br></br>
      bad {props.bad}
      </p>
     <p>all {all}  </p>
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
      
      
      
      

      
      < Statistics good ={good} bad ={bad} neutral ={neutral} />
    </div>
  )
}

export default App
