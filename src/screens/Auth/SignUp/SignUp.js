import React, { Component } from "react"
import { View, Text, Button, StyleSheet } from "react-native"

class SignUp extends Component {
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
    alignItems: "center"
  }
})

export default SignUp
