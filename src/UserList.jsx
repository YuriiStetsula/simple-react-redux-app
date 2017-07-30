import React from "react";
import SingleUser from "./SingleUser"

const UserList = (props) =>{


    
    return (
        <div>

            {props.users.filter((user)=>{
                return user.name.toUpperCase().indexOf(props.filterBy.toUpperCase()) >= 0
            })
            .map((user)=>{
              return  <SingleUser userName={user.name} key={user.id} userId={user.id} delete={props.delete}/>
            })}
         
        </div>
    )
}

export default UserList