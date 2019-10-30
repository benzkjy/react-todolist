import React, { Component } from "react";
import "../styles/Todolist.css";

class Todolist extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus();
  }
  render() {
    return (
      <div className="todolist">
        <form className="form-inline" onSubmit={this.props.addItem}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Task"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            <button type="submit" className="btn btn-dark button-dark">
              Add Task
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Todolist;
