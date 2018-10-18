import React, { Component } from "react"
import PropTypes from "prop-types"
import { SafeAreaView, ActivityIndicator } from "react-native"
import { styles } from "./styles"

import SplashScreen from "react-native-splash-screen"

import { connect } from "react-redux"
import { startApp, fetchPages } from "../../redux/navReducer"

import { Headline, Title, Divider } from "react-native-paper"

import { startTabs } from "../../main/Tabs"

import { FAB } from "react-native-paper"
console.disableYellowBox = true

class Home extends Component {
  componentDidMount() {
    SplashScreen.hide()
    this.props.startApp()
  }

  render() {
    const { container } = styles

    return (
      <SafeAreaView style={container}>
        <FAB
          onPress={this.navigate("SignIn")}
          style={{ color: "red" }}
          label="SIGN IN"
          icon="forward"
        />
        <Divider />
        <FAB
          onPress={this.navigate("SignUp")}
          style={{ color: "blue" }}
          label="SIGN UP"
          icon="forward"
        />
        <Divider />
        <FAB onPress={() => this._startTabs()} label="TABS" icon="done" />
      </SafeAreaView>
    )
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
