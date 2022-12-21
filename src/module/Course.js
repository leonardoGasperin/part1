const course = {
    name : 'Half Stack application development',
    parts: [
        {
        part: 'Fundamentals of React',
        exercicies: 10
        },
        {
        part: 'Using props to pass data',
        exercicies: 7
        },
        {
        part: 'State of a component',
        exercicies: 14
        }
    ]
}

function TotalExercicies () {
    let total = 0

    course.parts.forEach(part => {
    total += part.exercicies    
    });

    return total
}

const total = {
    mensege: 'Number of exercises:'
}

export const Content = () => {
    return(
        <div>
            <h1>{course.name}</h1>
            {course.parts != null && (
                <div>
                {course.parts.map((part => (
                    <p key={part.id}>{part.part}. Total exercicies: {part.exercicies}</p>
                )))}
                <p>{total.mensege} {TotalExercicies()}</p>
                </div>
            )}
        </div>
    )
}

export default Content;