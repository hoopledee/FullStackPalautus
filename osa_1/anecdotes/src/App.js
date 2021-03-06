import React, { useState } from 'react'


const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
    {props.text}
    </button>
  )
}
const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  
  
  const plus = () => setSelected(Math.floor(Math.random() * anecdotes.length))
  const [selected, setSelected] = useState(0)
  
  const [count, setCount] = useState(Array(anecdotes.length).fill(0))
  const vote = () => {
    const copy = [ ...count ]
  	copy[selected] += 1
  	setCount(copy)
   
  }
  const lead = count.indexOf(Math.max(...count))
  console.log(count)
  
  console.log(count.indexOf(Math.max(...count)))
  
  
   
  return (
    <div>
      <h2>anecdote of the day</h2>
       <Button
        handleClick={plus}
        text='push for next line'
      />
      <br></br>
      <Button
        handleClick={vote}
        text='vote'
      />
      
      this line has {count[selected]} votes
      <br></br>
      {anecdotes[selected]}
      <br></br>
      <h2>anecdotes with most votes </h2>
      {anecdotes[lead]}
      <br></br>
     has {count[lead]} votes
    </div>
  )
}

export default App
