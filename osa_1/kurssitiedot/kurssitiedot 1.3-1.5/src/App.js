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
      
      <Part nimi = {props.part1} teht = {props.teht1}/>
      <Part nimi = {props.part2} teht = {props.teht2}/>
      <Part nimi = {props.part3} teht = {props.teht3}/>
      
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
const Part = (props) => {
  return (
    <div>
      {props.nimi} {props.teht}
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
      
      <Content part1 = {part1} teht1= {exercises1} />
      <Content part2 = {part2} teht2= {exercises2} />
      <Content part3 = {part3} teht3= {exercises3} />

      <Total teht = {exercises1} teht2 = {exercises2} teht3 = {exercises3}/>
    </div>
  )
}

export default App
