import { useEffect, useState } from "react"

const anecdotes = [
    {
        anecdotes: 'If it hurts, do it more often.',
        votes: 0,    
    },
    {
        anecdotes: 'Adding manpower to a late software project makes it later!',
        votes: 0,    
    },
    {
        anecdotes: 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        votes: 0,    
    },
    {
        anecdotes: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        votes: 0,    
    },
    {
        anecdotes: 'Premature optimization is the root of all evil.',
        votes: 0,    
    },
    {
        anecdotes: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        votes: 0,    
    },
    {
        anecdotes: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        votes: 0,    
    }
  ]

export const Anecdotes = () => {
    
    const [selected, setSelected] = useState(0)
    const [mostVoted, setMostVoted] = useState({
        anecdotes: '',
        votes: 0,
    })
    const [anecdoteHook, setAnecdoteHook] = useState({
        anecdotes: '',
        votes: 0,
    })
    
    const Header = (props) => {
        return <h1>{props.name}</h1>
    }

    const ShowAnecdotes = (props) => {
        return(
            <div>
                <p>{anecdotes[props.selected].anecdotes}</p>
                <p>{anecdotes[props.selected].votes}</p>
            </div>
        )
    }
    const ShowMostVotedAnecdotes = (props) => {
        return(
            <div>
                <p>{props.anecdotes}</p>
                <p>{props.votes}</p>
            </div>
        )
    }

    const AnecdotesButton = (props) => {
        return(
            <button style={{height: '20px', width: '110px', marginRight: '5px', borderRadius: 5, borderWidth: 1}}
                    onClick={props.counter}
            >
                {props.name}
            </button>
        )
    }

    const RandonAnecdotes = () => {
        setSelected(Math.floor(Math.random() * 7))
    }

    const VoteAnecdotes = (props) => {
        return (
                    <button style={{height: '20px', width: '40px', marginRight: '5px', borderRadius: 5, borderWidth: 1}}
                            onClick={props.counter}
                    >
                        {props.name}
                    </button>
                )
    }

    const GetvoteCount = () => {
        anecdotes[selected].votes = anecdotes[selected].votes + 1
        console.log(anecdotes[selected].votes)
        setAnecdoteHook({
            anecdotes: anecdotes[selected].anecdotes,
            votes: anecdotes[selected].votes
        })
    }

    useEffect(() => {
        if(mostVoted.votes < anecdoteHook.votes)
        {
            setMostVoted({
                anecdotes: anecdoteHook.anecdotes,
                votes: anecdoteHook.votes
            })
        }
    },[mostVoted, anecdoteHook])

    return(
        <div>
            <Header name='Anecdote of the day.'/>
            <ShowAnecdotes selected={selected}/>
            <div>
                <VoteAnecdotes name='vote' counter={GetvoteCount}/>
                <AnecdotesButton name='Next anecdotes' counter={RandonAnecdotes}/>
            </div>
            <Header name='Anecdote wih most votes.'/>
            {mostVoted.votes !== 0 && (
                <ShowMostVotedAnecdotes anecdotes={mostVoted.anecdotes} votes={mostVoted.votes}/>
            )}
            {mostVoted.votes === 0 && (
                <h3>None votes done yet.</h3>
            )}
        </div>
    )
}