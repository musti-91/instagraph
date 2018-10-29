import React, { Component } from "react"
import PropTypes from "prop-types"
import { View, Text, SafeAreaView, StyleSheet } from "react-native"
import { Divider, Title, FAB } from "react-native-paper"
import Icon from "react-native-vector-icons/FontAwesome5"

// TODO
import { Navigation } from "react-native-navigation"
//
import { customColors as colors } from "../../assets/colors"
import LeftScreen from "../components/LeftScreen"

class Activity extends Component {
  constructor(props) {
    super(props)
    // this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
  }
  render() {
    const { container } = styles
    return (
      <SafeAreaView style={container}>
        <Divider />
        <Title>Activity</Title>
        <Divider />
        {this.props.navigator.setOnNavigatorEvent(
          this.onNavigatorEvent(this.props.navigator)
        )}
      </SafeAreaView>
    )
  }

  onNavigatorEvent = navigator => event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id == "profile") {
        navigator.toggleDrawer({ side: "left", to: "close", animated: true })
      } else if (event.id == "menu") {
        navigator.toggleDrawer({ side: "right", to: "close", animated: true })
      }
    }
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
