import { 
  createStore as reduxCreateStore, 
  combineReducers, 
  applyMiddleware, 
  compose
} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { reducer as reduxFormReducer } from 'redux-form'
import { routerReducer, routerMiddleware } from 'react-router-redux'

import * as reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      ...reducers,
      router: routerReducer,
      form: reduxFormReducer,
    }),
    composeEnhancers(
      applyMiddleware(
        logger,
        thunk,
        routerMiddleware(history)
      )
    )
  )
}
