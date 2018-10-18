import React, { Component } from "react"
import PropTypes from "prop-types"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView
} from "react-native"

import { ListItem } from "react-native-paper"

class PhotoGrid extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <Image
            source={require("../../assets/lion.png")}
            style={{ width: 300, height: 300 }}
          />
          <Image
            source={require("../../assets/lion.png")}
            style={{ width: 300, height: 300 }}
          />
          <Image
            source={require("../../assets/lion.png")}
            style={{ width: 300, height: 300 }}
          />
          <Image
            source={require("../../assets/lion.png")}
            style={{ width: 300, height: 300 }}
          />
          <Image
            source={require("../../assets/lion.png")}
            style={{ width: 300, height: 300 }}
          />
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default PhotoGrid
