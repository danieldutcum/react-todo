import React from 'react'
import JokeQS from './JokeQS'
import jokesData from './jokesData'

function JokeApp() {
    // const jokeComponent = jokesData.map(joke => <JokeQS key={joke.id} question={joke.question} answer={joke.answer} />)

    const jokeComponent = jokesData.map(function(joke){
        return (
            <JokeQS key={joke.id} jokes={joke} />
        )
    })

    return (
        <div>
            {jokeComponent}
            {/* <JokeQS 
                question= "Why is 6 afraid of 7" 
                answer= "because 7 8 9"
            />

            <JokeQS 
                answer= "It is hard to explain puns to kleptomaniacs because they always take things literally"         
            />

            <JokeQS 
                question= "What is the best thing about Switzerland" 
                answer= "I don't know, but the flag is a big plus!"       
            /> */}
        </div>
        )
}

export default JokeApp