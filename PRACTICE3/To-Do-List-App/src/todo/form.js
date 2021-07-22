import React,{Component} from "react";

class Form extends Component{
    constructor(props) {
        super(props);

        this.state={
            items:[]
        };
        this.addItem=this.addItem.bind(this);
    }
    addItem(e){
        if(this._inputElement.value!==""){
            {/*Create the variable that will store the object*/}
            let newItem={
                text:this._inputElement.value,
                key:Date.now()
            };
            {/*Setting out the state property*/}

            this.setState((prevState)=>{
                return{
                    items:prevState.items.concat(newItem)
                };

            });
            this._inputElement.value="";
        }
        console.log(this.state.items);
        e.preventDefault();
    }
    render() {
        return(
            <div className="container">
                <div className="header">
                {/*Code for the form to allow to add the items*/}
                <form onSubmit={this.addItem}>
                    <input ref={(a)=>this._inputElement=a} placeholder="Enter the Task">
                    </input>

                        <button type="submit">Add</button>
                </form>
                </div>
            </div>
        )
    }
}
export default Form;