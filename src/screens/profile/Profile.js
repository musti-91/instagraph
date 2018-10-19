import React, { Component } from "react"
import PropTypes from "prop-types"
import { View, SafeAreaView, ActivityIndicator, StyleSheet } from "react-native"
import { Colors, Title, FAB } from "react-native-paper"
import Icon from "react-native-vector-icons/FontAwesome5"

class Profile extends Component {
  render() {
    const { navigator } = this.props
    const { container } = styles
    return (
      <SafeAreaView style={container}>
        <Title>Profile</Title>
        <FAB
          style={{ alignSelf: "center", padding: 20 }}
          icon={() => <Icon name="sign-out-alt" size={20} color="#00364A" />}
          onPress={() => this._backToHomeScreen(navigator)}
          theme={{ colors: { accent: "#C57700" } }}
        >
          Sign out
        </FAB>
      </SafeAreaView>
    )
  }

  _backToHomeScreen = navigator => {
    navigator.resetTo({
      screen: "Home",
      animated: true,
      animationType: "fade"
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00364A"
  }
})

export default Profile
