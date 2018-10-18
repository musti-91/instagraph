import React, { Component } from "react"
import PropTypes from "prop-types"
import { View, Text, StyleSheet } from "react-native"

class RightScreen extends Component {
  render() {
    const { container } = styles
    return (
      <View style={container}>
        <Text>RightScreen</Text>
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

RightScreen.propTypes = {
  borderLineColor: PropTypes.string
}
export default RightScreen
