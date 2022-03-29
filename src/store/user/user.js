import { combineReducers } from "redux";
const ADD_USER = "ADD_USER";
export function adduser(user) {
  return {
    type: ADD_USER,
    user,
  };
}

const defaultUser = 
  {
    email: "",
    password: "",
  };

const users=(state = defaultUser, action) =>  {
  switch (action.type) {
    case ADD_USER:
      return {
          user: action.user,
        }
    default:
      return state;
  }
}

const combine = combineReducers({ users });
export default combine;

