import { StyleSheet } from "react-native"
import { customColors as colors } from "../../assets/colors"
import { fonts } from "../../assets/fonts/fonts"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00364A"
  },
  circle: {
    borderRadius: 100,
    position: "absolute",
    top: 200,
    left: 100,
    width: 200,
    height: 200,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: colors.orange,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: colors.dark,
    shadowOpacity: 0.5
  },
  circle_text: {
    marginLeft: 20,
    fontSize: 20,
    color: colors.dark,
    fontFamily: fonts.general
  },
  circle_small: {
    width: 110,
    height: 110,
    borderRadius: 55,
    top: 400,
    left: 230
  },
  circle_small_text: {
    fontSize: 18,
    marginLeft: 10
  }
})
