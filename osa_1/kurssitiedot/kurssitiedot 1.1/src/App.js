import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.kurssi}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>
        {props.nimi}  {props.tehtava}
        
      </p>
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>
        {props.teht +props.teht2 +props.teht3} 
      </p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header kurssi = {course }/>
      
        <Content nimi = {part1} tehtava = {exercises1}/>
        <Content nimi = {part2} tehtava = {exercises2}/>
        <Content nimi = {part3} tehtava = {exercises3}/>
      
      
      <Total teht = {exercises1} teht2 = {exercises2} teht3 = {exercises3}/>
    </div>
  )
}

export default App
