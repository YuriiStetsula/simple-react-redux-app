import React from "react"
import "./main-component.css"
import AdddUser from "./AddUser"
import UserList from "./UserList"
import {connect} from "react-redux"
import { bindActionCreators } from 'redux';
import * as actions from "./actions"

class User extends React.Component{
    constructor(){
        super()
        this.addUser = this.addUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
        this.filterUsers = this.filterUsers.bind(this)
    }

       addUser(user){
        this.props.addUserAction(user)
     }

      deleteUser(id){
        this.props.deleteUserAction(id)
      }   
    
      filterUsers(filterBy){
        this.props.filterUserAction(filterBy)
      }

    render(){
        console.log(this.props.stateFromReducer)
        return(
            <div className="main-component">
              <AdddUser 
              users={this.props.stateFromReducer.users} 
              addUser = {this.addUser}
              filter = {this.filterUsers}
              userName = {this.props.stateFromReducer.inputField}
              ></AdddUser>
              <UserList users={this.props.stateFromReducer.users}
               delete = {this.deleteUser}
               filterBy = {this.props.stateFromReducer.inputField}
               ></UserList>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}


const UserConnected = connect(function(state){
   return {
        stateFromReducer: state
    }
},mapDispatchToProps)(User)

export default UserConnected