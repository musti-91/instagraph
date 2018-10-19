import React, { Component } from "react"
import PropTypes from "prop-types"

import Icon from "react-native-vector-icons/Ionicons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

import { reduxForm, Field } from "redux-form"
import { connect } from "react-redux"

import { validate } from "../../../utility/validator"

import SplashScreen from "react-native-splash-screen"

import {
  ImageBackground,
  Image,
  ScrollView,
  Platform,
  StyleSheet
} from "react-native"

import Form from "../../components/Form"

class SignIn extends Component {
  static navigatorStyle = {
    navBarBackgroundColor: "#010808",
    statusBarColor: "#010808",
    navBarButtonColor: "#00FDB3"
  }

  constructor(props) {
    super(props)
    this.state = {
      modalVisibility: false
    }
  }

  render() {
    const { container } = styles
    return (
      <ImageBackground
        style={container}
        resizeMode="cover"
        source={require("../../../assets/backgroundImage.png")}
      >
        <ScrollView>
          <Image
            source={require("../../../assets/lion.png")}
            resizeMethod="auto"
            resizeMode="contain"
          />
          <Form onFormSubmit={this.onFormSubmit} />
        </ScrollView>
      </ImageBackground>
    )
  }

  onFormSubmit = values => console.log(values)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
    padding: 10,
    paddingTop: 50
  }
})

// ************ render diffrent styles depends in system *************
export default connect(
  null,
  null
)(SignIn)
