import { combineReducers } from 'redux'
import * as types from './types'

// INITIAL  STATE

const initialUsersState = []
const initialAlbumsState = []

const usersReducer = (state = initialUsersState, { type, payload }) => {
  switch (type) {
    case types.INITIAL_LOAD_USERS:
      return payload
    default:
      return state
  }
}
const albumsReducer = (state = initialAlbumsState, { type, payload }) => {
  switch (type) {
    case types.INITIAL_LOAD_ALBUMS:
      return payload
    default:
      return state
  }
}

// COMBINED REDUCERS
const reducers = {
  users: usersReducer,
  albums: albumsReducer,
}

export default combineReducers(reducers)
