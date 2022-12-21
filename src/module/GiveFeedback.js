import { useEffect, useState } from "react";

const mensege = {
    titles: [
        {
            title: 'give feedback'
        },
        {
            title: 'statistic'            
        }
    ],
}

const Header = (title) => {
    return <h1>{title.name}</h1>
}

export const Feedback = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad]  = useState(0)
    const [totalFeed, setTotalFeed] = useState(0)
    const [average, setAverage] = useState(0)
    const [positive, setPositive] = useState(0)

    useEffect(() => {
        if(totalFeed !== 0)
            setPositive((good * 100) / totalFeed);
    }, [good, totalFeed])

    const FeedbackMenu = () => {
        return(
            <div>
                <ButtonFeed name='good' counter={FeedGoodCount}/>
                <ButtonFeed name='neutal' counter={FeedNeutalCount}/>
                <ButtonFeed name='bad' counter={FeedBadCount}/>
            </div>
        )
    }

    const ButtonFeed = (props) => {
        return(
            <button style={{height: '20px', width: '60px', marginRight: '5px', borderRadius: 5, borderWidth: 1}}
                    onClick={props.counter}
            >
                {props.name}
            </button>
        )
    }

    const FeedGoodCount = () => {
        setGood(good + 1);
        setTotalFeed(totalFeed + 1);
        setAverage(average + 1);
     }

     const FeedNeutalCount = () => {
        setNeutral(neutral + 1);
        setTotalFeed(totalFeed + 1);
     }

     const FeedBadCount = () => {
        setBad(bad + 1);
        setTotalFeed(totalFeed + 1);
        setAverage(average - 1);
     }

     const FeedbackResult = (props) => {
        return <p>{props.name}: {props.value}{props.symbol}</p>
     }

    return(
        <div>
            <Header name={mensege.titles[0].title}/>
            <FeedbackMenu/>
            <br></br>
            <Header name={mensege.titles[1].title}/>
            {totalFeed !== 0 && (
                <table>
                    <tr>
                        <FeedbackResult name='Good' value={good}/>
                        <FeedbackResult name='Neutral' value={neutral}/>
                        <FeedbackResult name='bad' value={bad}/>
                        <FeedbackResult name='All' value={totalFeed}/>
                        <FeedbackResult name='Average' value={average}/>
                        <FeedbackResult name='Positive %' value={positive} symbol='%'/>
                    </tr>
                </table>
            )}
            {totalFeed === 0 && (<h3>no feedsback given</h3>)}
        </div>
    )
}

export default Feedback;