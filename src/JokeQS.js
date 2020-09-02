import React from 'react'

function JokeQS (props){
    return (
        <div>
            <h3 style={{display: props.jokes.question ? "block" : "none"}}>Question: {props.jokes.question}</h3>
            <p>Answer: {props.jokes.answer}</p>
            <br />
        </div>
    )
}

export default JokeQS