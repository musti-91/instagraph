import React, { Component } from "react"
import PropTypes from "prop-types"
import { View, Text, StyleSheet } from "react-native"

import { customColors as colors } from "../../assets/colors"
import Icon from "react-native-vector-icons/FontAwesome5"

import { List } from "react-native-paper"
class RightScreen extends Component {
  render() {
    const { container, list, listItem } = styles
    return (
      <View style={container}>
        <Icon
          name="react"
          size={60}
          color={colors.dark}
          style={{ alignSelf: "center", marginBottom: 40 }}
        />
        <List.Section style={list}>
          <List.Item
            title="Home"
            left={() => <Icon name="home" size={25} color={colors.dark} />}
            onPress={() => this._navigate("")}
            style={listItem}
          />
          <List.Item
            title="something"
            left={() => <Icon name="user" size={25} color={colors.dark} />}
            style={listItem}
            onPress={() => this._navigate("Profile")}
          />
          <List.Item
            title="something"
            left={() => <Icon name="cogs" size={25} color={colors.dark} />}
            style={listItem}
          />
          <List.Item
            title="something"
            left={() => <Icon name="folder" size={25} color={colors.dark} />}
            style={listItem}
          />
          <List.Item
            title="something"
            left={() => (
              <Icon name="info-circle" size={25} color={colors.dark} />
            )}
            style={listItem}
          />
        </List.Section>
      </View>
    )
  }
  // TODO: not working well
  _navigate = screen => this.props.navigator.push({ screen })
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    backgroundColor: colors.orange
  },
  list: {
    width: "95%",
    alignSelf: "center"
  },
  listItem: {
    borderRadius: 10
  }
})

RightScreen.propTypes = {
  borderLineColor: PropTypes.string
}
export default RightScreen
