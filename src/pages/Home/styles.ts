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
  informations: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    marginHorizontal: 40,
  },
  informationsTexts: {
    marginRight: 10,
    fontSize: 17,
    color: "#F2F2F2",
    fontWeight: "bold",
  },
  containerInformations: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  createdTitle: {
    color: "#4EA8DE",
  },
  completedTitle: {
    color: "#8284FA",
  },
  counter: {
    color: "#F2F2F2",
    backgroundColor: "#333333",
    textAlign: "center",
    paddingHorizontal: 10,
    borderRadius: 40,
    marginRight: 0,
  },
  hr: {
    backgroundColor: "#333333",
    height: 1,
    marginTop: 20,
    marginHorizontal: 40,
  },
  tasksEmpty: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  text1Empty: {
    color: "#808080",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
  },
  text2Empty: {
    color: "#808080",
    fontSize: 16,
  },
  item: {
    color: "#808080",
  },
  todo: {
    marginBottom: 10,
    borderColor: "#333333",
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#262626",
    alignItems: "center",
    marginHorizontal: 35,
  },
  todoText: {
    marginHorizontal: 10,
    flex: 8,
    fontSize: 18,
    color: "#F2F2F2",
  },
  todoDone: {
    textDecorationLine: "line-through",
    color: "#808080",
  },
  tasks: {},
});
