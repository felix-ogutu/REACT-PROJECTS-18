import React,{Component} from "react";
class Car extends Component{
    constructor(props) {
        super(props);
        this.state={
            name:"Felix",
            position:"one",
            regNo:123
        };
    }

    render(){
        return(
            <div>
                <h1>My  name is {this.state.name}</h1>
                <p>The position one {this.state.position} and have the admission number of {this.state.regNo}</p>
            </div>
        )
    }
}

export default Car;