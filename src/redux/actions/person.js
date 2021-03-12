import { ADD_PERSON } from '../constant'

export const person = (personObj) => ({ type: ADD_PERSON, data: personObj })
