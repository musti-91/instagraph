import React, { Component } from "react"
import PropTypes from "prop-types"
import { View, Text, StyleSheet } from "react-native"

class LeftScreen extends Component {
  render() {
    const { container } = styles
    return (
      <View style={container}>
        <Text>LeftScreen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange"
  }
})

LeftScreen.propTypes = {
  borderLineColor: PropTypes.string
}
export default LeftScreen
