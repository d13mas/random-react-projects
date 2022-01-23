import React, { useState } from 'react'

import jokesData from '../data/jokesData'
import Joke from './Joke'

const Jokes = ({mode}) => {
    const [thejokes, setThejokes] = useState(jokesData)

    const handleClickPlus = (theid) => {
        setThejokes(prevThejokes => {
            return prevThejokes
                .map((joke, idx) => {
                return idx === theid ? {...joke, votes: joke.votes + 1} : joke
                })
        });
        console.log(theid)
    }

    const handleClickRest = (theid) => {
        setThejokes(prevThejokes => {
            return prevThejokes.map((joke, idx) => {
                return idx === theid ? { ...joke, votes: joke.votes - 1 } : joke
            })
        });
    }

    const jokesElements = thejokes.map((joke, idx) => (
        <Joke
            joke={joke}
            key={idx + 1}
            handleClickPlus={() => handleClickPlus(idx)}
            handleClickRest={() => handleClickRest(idx)}
        />
    ))

    return (
        <div className={`jokes ${mode}`}>
            {jokesElements}
        </div>
    )
}

export default Jokes