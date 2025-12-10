
import { initJokeFeature } from './logic/randomJoke/logicRandomJoke'
import { ratingListener } from './logic/ratings joke/ratingsLogic'
import './style.css'
import { nextJokeButton } from './ui/randomJoke/uiRandomJoke'



initJokeFeature(nextJokeButton)

ratingListener()