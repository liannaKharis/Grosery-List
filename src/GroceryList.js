import { Component } from "react";
import icon from './icon.png';

export class GroceryList extends Component {
    state = {
        userInput: "",
        groceryList: []
    }

    onChangeEvent(e) {
        this.setState({userInput:e});
    }

    addItem(input) {
        if(input === ''){
            alert("Please enter an item")
        } else {
        let listArray = this.state.groceryList;
        listArray.push(input);
        this.setState({groceryList: listArray, userInput: ''});
    }
}

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }
    
    deleteItem(){
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState({groceryList: listArray})
    }

    onFormSubmit(e){
        e.preventDefault();
    }


    render() {
        return (
            <div>
                <form onSubmit = {this.onFormSubmit}>
                <div className="container">
                <input type="text"
                placeholder = "What to you want to  buy today?"
                onChange = {(e) =>{this.onChangeEvent(e.target.value)}}
                value = {this.state.userInput}
                />
                </div>
                <div className="container">
                    <button onClick = {()=> this.addItem(this.state.userInput)} className="btn add">Add</button>
                </div>
                <ul>
                    {this.state.groceryList.map((item, index) => (
                        <li onClick={this.crossedWord} key = {index}> 
                        <img src={icon} width="40px" alt="grocery"/>
                         {item}</li>
                    ))}
                </ul>
                <div className="container">
                <button onClick={()=>this.deleteItem()} className="btn delete">Delete</button>
                </div>
                </form>
            </div>
        )
    }
}