import React, { Component } from "react"
import { View, Text, Button, StyleSheet } from "react-native"

import { customColors as colors } from "../../../assets/colors"

class SignUp extends Component {
  static navigatorStyle = {
    navBarBackgroundColor: colors.dark,
    statusBarColor: colors.dark,
    navBarButtonColor: colors.green
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
    backgroundColor: colors.dark
  }
})

export default SignUp
