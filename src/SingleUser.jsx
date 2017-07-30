import React from "react"
import "./single-user.css"

class SingleUser extends React.Component{

    render(){
        return(
           <div className="single-user">
           
            <div className="single-user_info">{this.props.userName}</div>
             <div className="delete" onClick={() => this.props.delete(this.props.userId)}><span>x</span></div>
           </div> 
        )
    }
}

export default SingleUser