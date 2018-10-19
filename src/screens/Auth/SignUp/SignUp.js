import React, { Component } from "react"
import { View, Text, Button, StyleSheet } from "react-native"

class SignUp extends Component {
  static navigatorStyle = {
    navBarBackgroundColor: "#00364A",
    statusBarColor: "#00364A",
    navBarButtonColor: "#00FDB3"
  }
  render() {
    const { container } = styles
    return (
      <View style={container}>
        <Text>Sign up</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00364A"
  }
})

export default SignUp
