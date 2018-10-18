import React, { Component } from "react"
import PropTypes from "prop-types"
import { View, Text, StyleSheet, SafeAreaView } from "react-native"

import { Headline } from "react-native-paper"
class Notification extends Component {
  render() {
    const { container } = styles
    return (
      <SafeAreaView style={container}>
        <Headline>Notification</Headline>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#4f6d7a"
  }
})
export default Notification
