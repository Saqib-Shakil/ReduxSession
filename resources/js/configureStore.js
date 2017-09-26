import { createStore, applyMiddleware, compose } from 'redux'
import allreducers from './reducers/allreducers'
import throttle from 'lodash/throttle'
import thunkMiddleware from 'redux-thunk'

export default function configureStore(preloadedState) {
  const session = sessionStorage.getItem('sessionState')
  const state = session && JSON.parse(session)
  let store = createStore(
    allreducers,
    state || preloadedState,
    compose(
      applyMiddleware(thunkMiddleware),
      window['__REDUX_DEVTOOLS_EXTENSION__']())
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
