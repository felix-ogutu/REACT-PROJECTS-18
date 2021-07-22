import React,{Component} from "react";

class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            msg:"This is the React Demo",
            name:"Felix Omondi Ogutu"
        };
        this.updateSetState=this.updateSetState.bind(this);



    }
    updateSetState(){
        this.setState({
            msg:"Its is the best ReactJS tutorials"
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.msg}</h1>
                <h2>{this.state.name}</h2>
                <button onClick={this.updateSetState}>SET STATE</button>
            </div>
        )
    }
}
export default Form;