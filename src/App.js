import React, { Component } from "react"
import About from "./Component/About/About"
import Header from "./Component/Header/Header"
import Todo from "./Component/Todo/Todo"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact Component={Todo} />
          <Route path="/about" Component={About} />
        </Routes>
      </Router>
    )
  }
}
export default App
