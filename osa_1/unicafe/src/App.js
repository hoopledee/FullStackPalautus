import React, { useState } from 'react'


const StatisticLine = (props) => {
return (
  <div>
    {props.text} {props.value}
  </div>
)
}

const Statistics = (props) => {
  // ...
  if (props.good+ props.bad+ props.neutral == 0)  {
    return <div>no stats given</div>
  }
    else{
  const all = props.good+ props.neutral+ props.bad
  const  yhteensa= props.good + props.neutral + props.bad
  const pos =props.good/yhteensa * 100
  const aver = (props.good-props.bad)/yhteensa
  return(
    <div>
      <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="All" value ={all} />
      <StatisticLine text="aver" value ={aver} />
      <StatisticLine text="pos" value ={pos} />
    </div>
  )
    }
}
const Button =(props) =>{
  
  return (
    <button onClick={props.handleClick}>
    {props.text}
    </button>
  )
}
const App = () => {
  const goodplus = () => setGood(good + 1)
  const neutralplus = () => setNeutral(neutral + 1)
  const badplus = () => setBad(bad + 1)
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1> give feedback</h1>
      <Button
        handleClick={goodplus}
        text='good'
      />
      <Button
        handleClick={neutralplus}
        text='neutral'
      />
      <Button
        handleClick={badplus}
        text='bad'
      />
      
      <h2>statistics</h2>
      
      <Statistics good ={good} bad={bad} neutral={neutral}/>
      
      
    </div>
  )
}

export default App
