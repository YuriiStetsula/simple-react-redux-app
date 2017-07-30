import {ADD_USER,DELETE_USER,FILTER_USER} from "../constants"

const initialState = {
    users: [],
    inputField: ""
}

export default function addUser (state = initialState, action){

    switch(action.type){
        case ADD_USER:{
            const newState = Object.assign({},state)
            newState.users =  newState.users.concat(action.user)
            newState.inputField = ""
            return newState
        }
        case DELETE_USER:{
        const newState = Object.assign({},state)
        let arr = newState.users.concat([])
        let index = null
        
         arr.find((el,ind)=>{
            if( Number(el.id) === Number(action.id) ){
                index = ind
                return true
            }else return false
         })

         arr.splice(index,1)
         newState.inputField = ""
         newState.users = arr
         return newState
        }
        case FILTER_USER:{
           const newState = Object.assign({},state)
           newState.inputField = action.filterBy
           return newState
          }
        default:{
            return state
        } 
    }
}

  
