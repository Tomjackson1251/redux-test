import { createStore, applyMiddleware } from 'redux'
import countreducer from './count_reducer'
import thunk from 'redux-thunk'

export default createStore(countreducer, applyMiddleware(thunk))
