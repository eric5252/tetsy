import * as UsersApiUtil from '../utils/user_api';
import { receiveCurrentUser } from './session_action';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

export const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const fetchAllUsers = () => dispatch => (
  UsersApiUtil.fetchAllUsers().then(response => (
    dispatch(receiveAllUsers(response))
  ))
);

export const updateUser = formData => dispatch => (
  UsersApiUtil.updateUser(formData).then(response => (
    dispatch(receiveCurrentUser(response))
  ))
);