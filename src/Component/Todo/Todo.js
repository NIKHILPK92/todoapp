import React, { Component } from "react"
import "./Todo.css"
class Todo extends Component {
  state = {
    inputValue: "",
    items: [],
  }
  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    })
    console.log(this.state.inputValue)
  }
  storeItems = (event) => {
    event.preventDefault()
    const { inputValue, items } = this.state
    // let allItems = items
    // allItems.push(inputValue)
    this.setState({
      items: [...items, inputValue],
      inputValue: "",
    })
  }
  handleDelete = (index) => {
    const allItems = this.state.items
    allItems.splice(index, 1)
    // this.state.items.filter((data, key) => key !== index)
    // console.log("deletefunction", this.state.items)
    this.setState({
      items: allItems,
    })
  }

  render() {
    const { inputValue, items } = this.state
    console.log(items)
    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.storeItems}>
          <h1>TODO</h1>
          <input
            type="text"
            value={inputValue}
            placeholder="Enter your todos ..."
            onChange={this.handleChange}
          />
        </form>
        <ul>
          {items.map((item, index) => {
            return (
              <li key={index}>
                {item}
                <i
                  className="fa fa-trash"
                  aria-hidden="true"
                  onClick={() => this.handleDelete(index)}
                ></i>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Todo
