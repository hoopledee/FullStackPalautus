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
      
      <Part nimi = {props.course.parts[0].name} teht = {props.course.parts[0].exercises}/>
      <Part nimi = {props.course.parts[1].name} teht = {props.course.parts[1].exercises}/>
      <Part nimi = {props.course.parts[2].name} teht = {props.course.parts[2].exercises}/>
      
    </div>
  )
}
const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        
        {props.course.parts[0].exercises+ props.course.parts[1].exercises+ props.course.parts[2].exercises}
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
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }


  return (
    <div>
    < Header kurssi = {course.name}/>

    < Content course ={course}/>
    
    < Total course={course} />
   
    </div>

  )
}
export default App
