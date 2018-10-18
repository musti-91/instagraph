import React, { Component } from "react"
import PropTypes from "prop-types"
import {
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  View,
  Animated,
  Easing
} from "react-native"

import { styles } from "./styles"
import Icon from "react-native-vector-icons/FontAwesome5"

import SplashScreen from "react-native-splash-screen"

import { connect } from "react-redux"

import { startApp, fetchPages } from "../../redux/navReducer"

import { Headline, Title, Divider, FAB, Colors } from "react-native-paper"

import { startTabs } from "../../main/Tabs"

console.disableYellowBox = true

class Home extends Component {
  state = {
    circle_A: new Animated.Value(0),
    circle_B: new Animated.Value(0),
    circle_C: new Animated.Value(0)
  }

  componentDidMount() {
    SplashScreen.hide()
    this.props.startApp()
    let { circle_A, circle_B, circle_C } = this.state
    this._renderAnimatedView(circle_A, 3000, Easing.bounce)
    this._renderAnimatedView(circle_B, 7000, Easing.bounce)
    this._renderAnimatedView(circle_C, 5000, Easing.bounce)
  }

  render() {
    const {
      container,
      circle,
      circle_text,
      circle_small,
      circle_small_text
    } = styles
    let { circle_A, circle_B, circle_C } = this.state
    return (
      <SafeAreaView style={container}>
        <Animated.View style={{ opacity: circle_A }}>
          <TouchableOpacity onPress={() => this._startTabs()} style={circle}>
            <Icon name="home" size={50} color="#00364A" />
            <Text style={circle_text}>HOME</Text>
          </TouchableOpacity>
        </Animated.View>
        <View style={{ flexDirection: "row" }}>
          <Divider />
          <Divider />
          <Animated.View style={{ opacity: circle_B }}>
            <TouchableOpacity
              onPress={this.navigate("SignUp")}
              style={[circle, { width: 150, height: 150, top: 500, left: 50 }]}
            >
              <Icon name="users" size={30} color="#00364A" />
              <Text style={[circle_text]}>Sign up</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={{ opacity: circle_C }}>
            <TouchableOpacity
              onPress={this.navigate("SignIn")}
              style={[circle, circle_small]}
            >
              <Icon name="at" size={20} color="#00364A" />
              <Text style={[circle_text, circle_small_text]}>Sign in</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </SafeAreaView>
    )
  }

  _renderAnimatedView = (name, duration, easingType) => {
    Animated.timing(name, {
      toValue: 1,
      duration,
      easing: easingType
    }).start()
  }

  navigate = screen => () => {
    const { navigator, fetchPages } = this.props
    navigator.push({ screen })
    fetchPages(screen)
  }

  _startTabs = () => {
    this.props.fetchPages("tabs")
    startTabs()
  }
}

Home.propTypes = {
  launchApp: PropTypes.bool,
  // function
  startApp: PropTypes.func,
  fetchPages: PropTypes.func
}

export default connect(
  state => ({
    launchApp: state.nav.launchApp,
    pages: state.nav.pages
  }),
  dispatch => ({
    startApp: () => dispatch(startApp()),
    fetchPages: page => dispatch(fetchPages(page))
  })
)(Home)
