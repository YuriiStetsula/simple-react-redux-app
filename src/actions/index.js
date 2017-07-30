import {ADD_USER,DELETE_USER,FILTER_USER} from "../constants"
export  function addUserAction(user){
    const action = {
        type: ADD_USER,
        user: user
    }
    return action
}


export function deleteUserAction(id){
    const action = {
        type: DELETE_USER,
        id
    }
    return action
}

export function filterUserAction(filterBy){
    const action = {
        type: FILTER_USER,
        filterBy
    }
    return action
}