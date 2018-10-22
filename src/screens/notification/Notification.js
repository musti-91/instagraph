import React, { Component } from "react"
import PropTypes from "prop-types"
import { View, Text, StyleSheet, SafeAreaView } from "react-native"

import Form from "../components/Form"
import { Headline } from "react-native-paper"

import { customColors as colors } from "../../assets/colors"
class Notification extends Component {
  render() {
    const { container } = styles
    return (
      <SafeAreaView style={container}>
        <Headline>Notification</Headline>
      </SafeAreaView>
    )
  }

  onFormSubmit = values => {
    alert(JSON.stringify(values))
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.dark
  }
})
export default Notification
