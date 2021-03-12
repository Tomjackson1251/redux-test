import { createStore, applyMiddleware } from 'redux'
import countreducer from './reducers/count'
import thunk from 'redux-thunk'

export default createStore(countreducer, applyMiddleware(thunk))
