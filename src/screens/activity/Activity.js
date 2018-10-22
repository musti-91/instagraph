import React, { Component } from "react"
import PropTypes from "prop-types"
import { View, Text, SafeAreaView, StyleSheet } from "react-native"
import { Divider, Title, FAB } from "react-native-paper"

import { customColors as colors } from "../../assets/colors"

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
    backgroundColor: colors.dark
  }
})

export default Activity
