import React,{Component} from "react";

class Car extends   Component{
    constructor(props) {
        super(props);
        this.state = {
            id: 123,
            name: "Felix",
            course: "Bit"
        };
    }



    render(){
        return(
            <div>
                <p>{this.state.id}</p>
                <p>{this.state.name}</p>
                <p>{this.state.course}</p>
            </div>
        )
    }

}

export default Car;