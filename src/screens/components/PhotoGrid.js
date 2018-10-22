import React, { Component } from "react"
import PropTypes from "prop-types"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  ActivityIndicator
} from "react-native"

import { ListItem, List, HelperText, Chip } from "react-native-paper"
import Icon from "react-native-vector-icons/FontAwesome5"

import { customColors as colors } from "../../assets/colors"

class PhotoGrid extends Component {
  state = {
    fadeIn: new Animated.Value(0)
  }

  componentDidMount() {
    const { fadeIn } = this.state
    Animated.timing(fadeIn, { toValue: 1, duration: 2000 })
  }

  render() {
    const { grid, grid_item, grid_image, loadingPosition } = styles
    const {
      items,
      error,
      onPress,
      leftIconName,
      isRightIcon,
      isLeftIcon,
      rightIconName,
      loading
    } = this.props

    let { fadeIn } = this.state

    return (
      <SafeAreaView style={loading ? loadingPosition : grid}>
        {error && this._renderError(error)}
        {loading ? (
          <ActivityIndicator
            size="large"
            color="#00364A"
            style={{ marginTop: 200 }}
          />
        ) : (
          items.map((item, index) => (
            <TouchableOpacity
              style={grid_item}
              onPress={onPress}
              key={"asset-" + index}
            >
              <Text style={{ alignSelf: "center", color: colors.dark }}>
                {item.displayName}
              </Text>
              <Image
                source={{ uri: item.thumbnail.url }}
                style={grid_image}
                resizeMode="contain"
              />
              <Chip
                mode="outlined"
                icon={() => <Icon name="hashtag" color={colors.orange} />}
                onPress={() => alert(item.displayName)}
                theme={{ colors: { surface: "#CCC", text: colors.orange } }}
              >
                {item.description}
              </Chip>
            </TouchableOpacity>
          ))
        )}
      </SafeAreaView>
    )
  }

  _renderError = error => () => (
    <HelperText type="error" visible={error ? true : false}>
      {error ? error : null}
    </HelperText>
  )

  _renderList = () => {
    return
  }
}

const styles = StyleSheet.create({
  loadingPosition: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  grid: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    width: "100%",
    alignItems: "flex-start",
    paddingHorizontal: 4,
    marginTop: 30,
    flexWrap: "wrap"
  },
  grid_item: {
    width: "49%",
    height: 180,
    marginBottom: 20,
    textAlign: "center",
    lineHeight: 100,
    borderBottomWidth: 1,
    borderBottomColor: colors.orange
  },
  grid_image: {
    width: 180,
    height: 120,
    borderRadius: 20,
    alignSelf: "center"
  }
})

PhotoGrid.propTypes = {
  items: PropTypes.array.isRequired,
  error: PropTypes.object,
  onPress: PropTypes.func,
  isLeftIcon: PropTypes.bool,
  isRightIcon: PropTypes.bool,
  leftIconName: PropTypes.string,
  rightIconName: PropTypes.string,
  loading: PropTypes.bool.isRequired
}

PhotoGrid.defaultProps = {
  onPress: () => ({}),
  error: {},
  items: [],
  isLeftIcon: true,
  isRightIcon: true,
  leftIconName: "#",
  rightIconName: "#"
}

export default PhotoGrid
