import React, { Component } from "react";
import "../styles/App.css";
import Todolist from "./Todolist";
import TodoItem from "./TodoItem";

class App extends Component {
  inputElement = React.createRef();
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: { text: "", key: "" }
    };
  }
  handleInput = e => {
    // console.log("hello input");
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    this.setState({
      currentItem
    });
  };
  addItem = e => {
    e.preventDefault();
    // console.log("hello Input");
    const newItem = this.state.currentItem;
    if (newItem !== "") {
      console.log(newItem);
      const item = [...this.state.items, newItem];
      this.setState({
        items: item,
        currentItem: { text: "", key: "" }
      });
    }
  };
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key;
    });
    this.setState({
      items: filteredItems
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Todo list</h1>
        <Todolist
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />

        <TodoItem entries={this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
