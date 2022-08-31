import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  header: {
    height: 160,
    backgroundColor: "#0D0D0D",
    alignItems: "center",
    justifyContent: "center",
  },
  addTask: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -30,
  },
  textInput: {
    backgroundColor: "#262626",
    color: "#FFFFFF",
    fontSize: 18,
    marginHorizontal: 10,
    height: 60,
    width: "70%",
    borderRadius: 5,
    paddingHorizontal: 20,
  },
  plusButton: {
    backgroundColor: "#1E6F9F",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  content: {},
  informations: {},
  created: {},
  completed: {},
  tasks: {},
});
