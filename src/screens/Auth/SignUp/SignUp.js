import React, { Component } from "react"
import { View, Text, Button } from "react-native"

import { styles } from "./styles"

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
export default SignUp
