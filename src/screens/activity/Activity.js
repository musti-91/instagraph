import React, { Component } from "react"
import PropTypes from "prop-types"
import { View, Text, SafeAreaView, StyleSheet } from "react-native"
import { Divider, Title, FAB } from "react-native-paper"

class Activity extends Component {
  render() {
    const { container } = styles
    return (
      <SafeAreaView style={container}>
        <Divider />
        <Title>Activity</Title>
        <Divider />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd"
  }
})

export default Activity
