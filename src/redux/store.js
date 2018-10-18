import { createStore, combineReducers, applyMiddleware } from "redux"

import { createLogger } from "redux-logger"
import thunk from "redux-thunk"

import { reducer as formReducer } from "redux-form"
import { reducer as navReducer } from "./navReducer"

export const store = createStore(
  combineReducers({
    nav: navReducer,
    form: formReducer
  }),
  applyMiddleware(createLogger(), thunk)
)
