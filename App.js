import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Routes from "./routes";

class App extends Component {

  componentDidMount() {

    console.log("login system")
  }

  render() {
    return (
      <Routes />
    )
  }
}

export default App;