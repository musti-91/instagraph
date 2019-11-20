import { createStore, combineReducers, applyMiddleware } from "redux"

import { createLogger } from "redux-logger"
import thunk from "redux-thunk"

import { reducer as formReducer } from "redux-form"
import { reducer as navReducer } from "./navReducer"
import { reducer as searchReducer } from "./searchReducer"

export const store = createStore(
  combineReducers({
    NAV: navReducer,
    ASSETS: searchReducer,
    form: formReducer
  }),
  applyMiddleware(createLogger(), thunk)
)
