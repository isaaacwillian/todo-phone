import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import Logo from "../../assets/Logo.png";
import Plus from "../../assets/Plus.png";
import Clipboard from "../../assets/Clipboard.png";
import Check from "../../assets/Check.png";
import Checked from "../../assets/Checked.png";
import Trash from "../../assets/Trash.png";
import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [numberOfCompleted, setNumberOfCompleted] = useState(0);
  const [newTodo, setNewTodo] = useState("");

  function addTodo() {
    let id = (todos[todos.length - 1]?.id ?? 0) + 1;

    setTodos((todos) => [...todos, { id, text: newTodo, done: false }]);
  }

  function Todo({ todo }: { todo: Todo }) {
    return (
      <View style={styles.todo}>
        <TouchableOpacity onPress={() => makeTodoDone(todo)}>
          <Image source={todo.done ? Checked : Check} />
        </TouchableOpacity>
        <Text
          style={[styles.todoText, todo.done ? styles.todoDone : undefined]}
        >
          {todo.text}
        </Text>
        <TouchableOpacity onPress={() => deleteTodo(todo)}>
          <Image source={Trash} />
        </TouchableOpacity>
      </View>
    );
  }

  function makeTodoDone(todo: Todo) {
    todo.done = !todo.done;
    if (todo.done) {
      setNumberOfCompleted((n) => n + 1);
    } else {
      setNumberOfCompleted((n) => n - 1);
    }

    const todosUpdated = todos.map((t) => {
      if (t.id === todo.id) return todo;
      return t;
    });

    setTodos(todosUpdated);
  }

  function deleteTodo(todo: Todo) {
    if (todo.done) setNumberOfCompleted((n) => n - 1);
    setTodos((todos) => todos.filter((t) => t.id !== todo.id));
  }

  function renderTodos({ item }: { item: Todo }) {
    return <Todo todo={item} key={item.id} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} />
      </View>
      <View style={styles.addTask}>
        <TextInput
          style={styles.textInput}
          onChangeText={setNewTodo}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
        />
        <TouchableOpacity style={styles.plusButton} onPress={addTodo}>
          <Image source={Plus} />
        </TouchableOpacity>
      </View>
      <View style={styles.informations}>
        <View style={styles.containerInformations}>
          <Text style={[styles.informationsTexts, styles.createdTitle]}>
            Criadas
          </Text>
          <Text style={[styles.informationsTexts, styles.counter]}>
            {todos.length}
          </Text>
        </View>
        <View style={styles.containerInformations}>
          <Text style={[styles.informationsTexts, styles.completedTitle]}>
            Concluídas
          </Text>
          <Text style={[styles.informationsTexts, styles.counter]}>
            {numberOfCompleted}
          </Text>
        </View>
      </View>
      <View style={styles.hr}></View>
      {todos.length === 0 ? (
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
        <FlatList data={todos} renderItem={renderTodos} />
      )}
    </View>
  );
}
