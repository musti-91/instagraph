import React, { Component } from "react"
import PropTypes from "prop-types"
import { View, SafeAreaView, ActivityIndicator } from "react-native"
import {
  ProgressBar,
  Colors,
  RadioButton,
  Card,
  Surface,
  Switch,
  Text,
  Title
} from "react-native-paper"

import Loader from "../../hoc/Loader"
import { styles } from "./styles"

class Profile extends Component {
  state = {
    value: "",
    isSwitched: false
  }

  render() {
    const { value, isSwitched } = this.state
    const { navigator } = this.props
    const { container } = styles
    return (
      <SafeAreaView style={container}>
        <Title>Profile</Title>
        <Title onPress={() => this._backToHomeScreen(navigator)}>
          Sign out
        </Title>
      </SafeAreaView>
    )
  }

  _backToHomeScreen = navigator => {
    navigator.resetTo({
      screen: "Home",
      animated: true,
      animationType: "slide-down"
    })
  }
}
export default Profile
