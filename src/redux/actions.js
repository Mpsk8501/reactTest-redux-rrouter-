import { loadData } from '../functions/loadData'
import * as types from './types'

const setUsersAction = (users) => {
  return {
    type: types.INITIAL_LOAD_USERS,
    payload: users,
  }
}
const setAlbumsAction = (albums) => {
  return {
    type: types.INITIAL_LOAD_ALBUMS,
    payload: albums,
  }
}

const loadUsers = () => async (dispatch, getState) => {
  const { users } = getState()
  if (!users.length) {
    const newUsers = await loadData('users')
    dispatch(setUsersAction(newUsers))
  }
}
const loadAlbums = () => async (dispatch, getState) => {
  const { albums } = getState()
  if (!albums.length) {
    const newAlbums = await loadData('albums')
    dispatch(setAlbumsAction(newAlbums))
  }
}

export { loadUsers, loadAlbums }
