import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import Logo from "../../assets/Logo.png";
import Plus from "../../assets/Plus.png";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo}></Image>
      </View>
      <View style={styles.addTask}>
        <TextInput
          style={styles.textInput}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
        />
        <TouchableOpacity style={styles.plusButton}>
          <Image source={Plus} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.informations}>
          <View style={styles.created}></View>
          <View style={styles.completed}></View>
        </View>
        <View style={styles.tasks}></View>
      </View>
    </View>
  );
}
