//import logo from './logo.svg';
//import Car from "./exercise/state";
import React,{Component} from "react";

import './App.css';

import ItemList from "./ItemList/ItemList";
import AddItem from "./AddItem/AddItem";
class App extends Component {

    state={
        Items:[

        ]
    }

    deleteItem=(id)=>{
        let Items=this.state.Items.filter(item=>{
            return item.id!==id;
        })
        this.setState({
            Items
        })

    }
    addItem=(data)=>{
        let Items=this.state.Items;
        data.id=Math.floor(Math.random()*1000);
        Items.push(data);
        this.setState({
            Items
        })

    }

    render(){

        return (
            <div>

                <ItemList Items={this.state.Items} deleteitem={this.deleteItem} />
                <AddItem addItem={this.addItem}/>

            </div>


        )



    }


}

export default App;