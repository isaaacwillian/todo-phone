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
import Clipboard from "../../assets/Clipboard.png";

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
          <View style={styles.containerInformations}>
            <Text style={[styles.informationsTexts, styles.createdTitle]}>
              Criadas
            </Text>
            <Text style={[styles.informationsTexts, styles.counter]}>0</Text>
          </View>
          <View style={styles.containerInformations}>
            <Text style={[styles.informationsTexts, styles.completedTitle]}>
              Concluídas
            </Text>
            <Text style={[styles.informationsTexts, styles.counter]}>0</Text>
          </View>
        </View>
        <View style={styles.hr}></View>
        <View style={styles.tasks}>
          {true ? (
            <View style={styles.tasksEmpty}>
              <Image source={Clipboard} />
              <Text style={styles.text1Empty}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.text2Empty}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          ) : (
            <Image source={Plus} />
          )}
        </View>
      </View>
    </View>
  );
}
