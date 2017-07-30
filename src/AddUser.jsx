import React from "react";
import "./add-user.css"


class AddUser extends React.Component {

   createUser(e){
    e.preventDefault()
    if (this.props.userName){
        const user = {
            name : this.props.userName,
            id: new Date().getTime()
        }
        this.props.addUser(user)
        this.props.filter("")
    }else{
        console.log("Type something")
    }

   }



   
    render(){
       return(
        <div className="add-user">
             <input  onChange={(e)=>this.props.filter(e.target.value)} value={this.props.userName} type="text" placeholder="user"/>
             <button onClick={(e)=>{this.createUser(e)}}>+</button>
        </div>
    )
   } 
}



export default AddUser