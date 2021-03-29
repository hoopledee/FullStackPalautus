import React from 'react'

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.kurssi}</h1>
    </div>
  )
}

const Content = (props) => {
  
  return (
    <div>
      
      <Part nimi = {props.parts[0].name} teht = {props.parts[0].exercises}/>
      <Part nimi = {props.parts[1].name} teht = {props.parts[1].exercises}/>
      <Part nimi = {props.parts[2].name} teht = {props.parts[2].exercises}/>
      
    </div>
  )
}
const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        
        {props.parts[0].exercises+ props.parts[1].exercises+ props.parts[2].exercises}
      </p>
    </div>
  )
}
const Part = (props) => {
  console.log(props)
  return (
    <div>
      {props.nimi} {props.teht}
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

 


  return (
    <div>
    < Header kurssi = {course}/>

    < Content parts ={parts}/>
    
    < Total parts={parts} />
   
    </div>

  )
}
export default App
