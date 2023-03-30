import React, { Component } from "react"
import About from "./Component/About/About"
import Header from "./Component/Header/Header"
import Todo from "./Component/Todo/Todo"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import Footer from "./Component/Footer/Footer"

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Navigate replace to="/todoapp" />}
            Component={Todo}
          />
          <Route
            path="/about"
            element={<Navigate replace to="/todoapp/about" />}
            Component={About}
          />
        </Routes>
        <Footer />
      </Router>
    )
  }
}
export default App
