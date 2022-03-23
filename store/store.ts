import {
    applyMiddleware,
    createStore,
    Middleware,
    StoreEnhancer,
    Store,
} from 'redux'
import { createWrapper, MakeStore } from 'next-redux-wrapper'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducer'
import rootSaga from './saga'
import { AppState } from './types'

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}

export const makeStore: MakeStore<Store<AppState>> = () => {
    const sagaMiddleware = createSagaMiddleware()

    const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]))

    store.sagaTask = sagaMiddleware.run(rootSaga)

    return store
}

export const wrapper = createWrapper<Store<AppState>>(makeStore, {
    debug: true,
})
