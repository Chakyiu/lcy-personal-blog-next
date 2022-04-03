import { combineReducers } from 'redux'
import appReducer from './appReducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootPersistConfig = {
  key: 'root',
  storage: storage,
}

const appPersistConfig = {
  key: 'app',
  storage: storage,
}

const rootReducer = combineReducers({
  app: persistReducer(appPersistConfig, appReducer),
})

const rootPersistReducer = persistReducer(rootPersistConfig, rootReducer)

export default rootPersistReducer

export type RootState = ReturnType<typeof rootPersistReducer>
