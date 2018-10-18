import React, { Component } from "react"
import { ActivityIndicator } from "react-native"

const Loader = propName => Wrapper => {
  return class Loader extends Component {
    isEmpty = prop => {
      return (
        prop === null ||
        prop == undefined ||
        (prop.hasOwnProperty("length") && prop.length === 0) ||
        (prop.constructor === Object && Object.keys(prop).length === 0)
      )
    }
    render() {
      return this.isEmpty(this.props[propName]) ? (
        <ActivityIndicator size="large" color="yellow" />
      ) : (
        <Wrapper {...this.props} />
      )
    }
  }
}

export default Loader
