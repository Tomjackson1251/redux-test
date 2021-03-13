import count from './count'
import persons from './person'
import { combineReducers } from 'redux'

const allReducer = combineReducers({
  count,
  persons,
})

export default allReducer
