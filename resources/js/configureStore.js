import { createStore, applyMiddleware, compose } from 'redux'
import cards from './reducers/cards'
import throttle from 'lodash/throttle'
export default function configureStore(preloadedState) {
  const session = sessionStorage.getItem('sessionState')
  const state = session && JSON.parse(session)
  let store = createStore(
    cards,
    state || preloadedState,
    window['__REDUX_DEVTOOLS_EXTENSION__']()
  )

  store.subscribe(
    throttle(
      p => {
        sessionStorage.setItem('sessionState', JSON.stringify(store.getState())
          ,
          1000)
      })
  )
  return store
}
