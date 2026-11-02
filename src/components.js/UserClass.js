import React from "react";
class UserClass extends React.Component{
   constructor(props){
    console.log("Constructor called")
    super(props)
    //these are state variables
    this.state={
     count: 1,
     name:"",
     location:"India",
     url:"data:image/jpeg;base64,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"
    }
   }


   async componentDidMount(){
    console.log("Component mounted")
   const respnse=await fetch("https://api.github.com/users/sandeep76876");
   const data=await respnse.json();
   this.setState({
    name:data.login,
    location:data.location,
    url:data.avatar_url
   })
   }
   componentDidUpdate(){
    console.log("Component updated");
   }
   componentWillUnmount(){
    console.log("Component unmounted")
   }
   render(){
    console.log("Rendering")
    return (
        <div>
            <div className="usercard">
                <img  className="userProfile"src={this.state.url} alt="photo"></img>
            <h1>UserName: {this.state.name}</h1>
            <h2>Location: {this.state.location}</h2>
            </div>
            <h3>Count:{this.state.count}</h3>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1
                })
            }}>click</button>
            <button onClick={()=>{
                this.setState({
                    count:0
                })
            }}>Reset</button>
        </div>
    )
   }
}

export default UserClass