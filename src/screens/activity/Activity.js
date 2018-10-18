import React, { Component } from "react"
import PropTypes from "prop-types"
import { View, Text, SafeAreaView } from "react-native"
import {
  Divider,
  Drawer,
  DarkTheme,
  Card,
  Title,
  FAB
} from "react-native-paper"

import { styles } from "./styles"

class Activity extends Component {
  state = {
    active: "first"
  }

  render() {
    const { active } = this.state
    const { container } = styles
    return (
      <SafeAreaView style={container}>
        <Text>Activity</Text>
        <Divider />
        <Text>Activity</Text>
        <Drawer.Item
          label="First Item"
          icon="add-a-photo"
          active
          theme={DarkTheme}
        />
        <Drawer.Section title="Some title">
          <Drawer.Item
            label="First Item"
            active={active === "first"}
            onPress={() => {
              this.setState({ active: "first" })
            }}
          />
          <Drawer.Item
            label="Second Item"
            active={active === "second"}
            onPress={() => {
              this.setState({ active: "second" })
            }}
          />
        </Drawer.Section>
        <Divider />
        <FAB
          label="Photo Grid"
          onPress={() => this.props.navigator.push({ screen: "Photo_Grid" })}
          icon="album"
        />
      </SafeAreaView>
    )
  }
}
export default Activity
