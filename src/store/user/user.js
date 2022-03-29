import { combineReducers } from "redux";
const ADD_USER = 'ADD_USER'; 
export function adduser(user) {
    return {
      type: 'ADD_USER',
      user,
    }
  }
 
  const defaultUser = 
    {
      email: '',
      password: '',
    }
  ;
  
  function users(state=defaultUser, action) {
      console.log(action)
    switch (action.type) {
        case ADD_USER:
          return [
            ...state,
            {
              email: action.email,
              password: action.password
            }
          ];
        default:
          return state;
      }
  }
  const combine=combineReducers(users)
export default combine;