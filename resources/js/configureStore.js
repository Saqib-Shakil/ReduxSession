import { createStore, applyMiddleware, compose } from 'redux'
import cards from './reducers/cards'

export default function configureStore(preloadedState) {

  return createStore(
    cards,
    preloadedState,
    window['__REDUX_DEVTOOLS_EXTENSION__']()
  )
}
