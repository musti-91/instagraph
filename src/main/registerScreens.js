import React from "react"
import { Navigation } from "react-native-navigation"

import SignIn from "../screens/Auth/SignIn/SignIn"
import SignUp from "../screens/Auth/SignUp/SignUp"
import Home from "../screens/home/Home"
import Profile from "../screens/profile/Profile"
import Notification from "../screens/notification/Notification"
import Activity from "../screens/activity/Activity"
import RightScreen from "../screens/components/RightScreen"
import LeftScreen from "../screens/components/LeftScreen"
import Search from "../screens/search/Search"
import Camera from "../screens/camera/Camera"

// redux
import { Provider } from "react-redux"
import { store } from "../redux/store"
import PhotoGrid from "../screens/components/PhotoGrid"

const registerScreens = () => {
  // HomeScreens
  Navigation.registerComponent("Home", () => Home, store, Provider)

  Navigation.registerComponent("SignIn", () => SignIn, store, Provider)

  Navigation.registerComponent("SignUp", () => SignUp, store, Provider)

  Navigation.registerComponent("Profile", () => Profile, store, Provider)

  Navigation.registerComponent("Activity", () => Activity, store, Provider)

  Navigation.registerComponent(
    "RightScreen",
    () => RightScreen,
    store,
    Provider
  )
  Navigation.registerComponent("LeftScreen", () => LeftScreen, store, Provider)

  Navigation.registerComponent(
    "Notification",
    () => Notification,
    store,
    Provider
  )

  Navigation.registerComponent("Photo_Grid", () => PhotoGrid, store, Provider)

  Navigation.registerComponent("Search", () => Search, store, Provider)

  Navigation.registerComponent("Camera", () => Camera, store, Provider)

  // Components
}

export default registerScreens
