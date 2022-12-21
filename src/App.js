function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercicies1 = 10
  const part2 = 'Using props to pass data'
  const exercicies2 = 7
  const part3 = 'State of a component'
  const exercicies3 = 14

  const Header = (props) => {
    return <h1>{props.course}</h1>
  }

  const Part = (part, exercicies) => {
    return <p>{part.name} {exercicies.points}</p>
  }

  const Content = () => {
    return(
      <div>
        <Part name={part1} points={exercicies1}/>
        <Part name={part2} points={exercicies2}/>
        <Part name={part3} points={exercicies3}/>
      </div>
    )
  }

  function Total(){
    return <p>Number of exercises {exercicies1+exercicies2+exercicies3}</p>
  }

  return (
    <div>
      <Header course={course}/>  
      <Content name={part1} points={exercicies1}/>
      <Total/>
    </div>
  );
}

export default App;
