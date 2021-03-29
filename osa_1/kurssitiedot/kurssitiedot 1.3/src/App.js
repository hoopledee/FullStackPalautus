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
      
      <Part nimi = {props.part1} teht = {props.teht1}/>
      <Part nimi = {props.part2} teht = {props.teht2}/>
      <Part nimi = {props.part3} teht = {props.teht3}/>
      
    </div>
  )
}
const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        {props.teht +props.teht2 +props.teht3} 
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
    < Header kurssi = {course}/>

    <Content part1 = {part1.name} teht1= {part1.exercises} />
    <Content part2 = {part2.name} teht2= {part2.exercises} />
    <Content part3 = {part3.name} teht3= {part3.exercises} />
    
    < Total teht = {part1.exercises} teht2 = {part2.exercises} teht3 = {part3.exercises} />
   
    </div>

  )
}
export default App
