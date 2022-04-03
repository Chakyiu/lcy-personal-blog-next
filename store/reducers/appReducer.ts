import { AppState, Action, actionTypes } from '../types'
import { HYDRATE } from 'next-redux-wrapper'

export const initialState: AppState = {
  theme: 'light',
}

const appReducer = (
  state = initialState,
  action: Action | { type: typeof HYDRATE; payload: AppState }
): AppState => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload }

    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      }

    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ placeholderData: action.data },
      }

    case actionTypes.TICK_CLOCK:
      return {
        ...state,
        ...{ lastUpdate: action.ts, light: !!action.light },
      }

    default:
      return state
  }
}

export default appReducer
