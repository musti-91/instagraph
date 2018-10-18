import React, { Component } from "react"
import PropTypes from "prop-types"
import { View, Text, StyleSheet, SafeAreaView } from "react-native"

import { styles } from "./styles"
import {
  Dialog,
  Paragraph,
  Button,
  IconButton,
  FAB,
  Snackbar,
  Card,
  Headline,
  Subheading
} from "react-native-paper"
class Notification extends Component {
  state = {
    visible: false
  }
  render() {
    const { container } = styles
    const { visible } = this.state
    return (
      <SafeAreaView style={container}>
        <Headline>Notification</Headline>
      </SafeAreaView>
    )
  }
}
export default Notification
