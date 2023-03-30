import React, { Component } from "react"
import About from "./Component/About/About"
import Header from "./Component/Header/Header"
import Todo from "./Component/Todo/Todo"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom"
import Footer from "./Component/Footer/Footer"

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route exact path="/todoapp" component={Todo} />
          <Route path="/todoapp/about" component={About} />
          <Redirect exact from="/" to="/todoapp" />
        </Routes>
        <Footer />
      </Router>
    )
  }
}
export default App
