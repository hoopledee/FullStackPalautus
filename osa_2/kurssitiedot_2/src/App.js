import React from 'react';
import ReactDOM from 'react-dom';
const Course = ({course}) => {
  
const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = (props) => {
  const total = props.course.parts.reduce(
    (s, p) => s + p.exercises,0
  );
  return <p>Total: {total}</p>;
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>    
  )
}


const Content = ({ course }) => {
  return (
    <div>
      <Part part={course.parts[0]} />
      <Part part={course.parts[1]} />
      <Part part={course.parts[2]} />
    </div>
  )
}
return (
  <div>
    <Header course={course} />
    <Content course={course} />
    <Total course={course} />
  </div>
)
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  
  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App;
