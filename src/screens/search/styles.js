import { StyleSheet } from "react-native"
import { customColors as colors } from "../../assets/colors"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 100,
    backgroundColor: "#ccc",
    paddingTop: 60,
    padding: 5
  },
  input: {
    marginHorizontal: 20
  },
  searchButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.dark,
    fontSize: 30,
    margin: 20
  }
})
