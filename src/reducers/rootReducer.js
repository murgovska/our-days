import { combineReducers } from 'redux'
import products from './products'

export const createReducer = asyncReducers => {
  return combineReducers({
    products,
    ...asyncReducers
  })
}

// https://stackoverflow.com/questions/32968016/how-to-dynamically-load-reducers-for-code-splitting-in-a-redux-application
