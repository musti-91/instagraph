import React, { Component } from "react"
import PropTypes from "prop-types"
import {
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
  TouchableHighlight,
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
      <SafeAreaView style={ container }>
        <TouchableHighlight onPress={ () => this._startTabs() } style={ circle }>
          <Animated.View style={ { opacity: circle_A } }>
            <Icon name="angrycreative" size={ 50 } color="#00364A" />
            <Text style={ circle_text }>HOME</Text>
          </Animated.View>
        </TouchableHighlight>
        <View style={ { flexDirection: "row" } }>
          <TouchableHighlight onPress={ this.navigate("SignUp") } style={ [circle, { width: 150, height: 150, top: 500, left: 50 }] } >
            <Animated.View style={ { opacity: circle_B } }>
              <Icon name="plus" size={ 30 } color="#00364A" />
              <Text style={ [circle_text] }>Sign up</Text>
            </Animated.View>
          </TouchableHighlight>
          <TouchableHighlight onPress={ this.navigate("SignIn") } style={ [circle, circle_small] } >
            <Animated.View style={ { opacity: circle_C } }>
              <Icon name="registered" size={ 20 } color="#00364A" />
              <Text style={ [circle_text, circle_small_text] }>Sign in</Text>
            </Animated.View>
          </TouchableHighlight>
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
