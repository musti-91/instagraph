import React, { Component } from "react"
import PropTypes from "prop-types"
import { View, Text, StyleSheet } from "react-native"

import Icon from "react-native-vector-icons/FontAwesome5"

import { customColors as colors } from "../../assets/colors"

class LeftScreen extends Component {
  render() {
    const { container } = styles
    return (
      <View style={container}>
        <Icon name="user-circle" size={60} color="#4E6D7A" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.orange,
    flexDirection: "row"
  }
})

LeftScreen.propTypes = {
  borderLineColor: PropTypes.string
}
export default LeftScreen
