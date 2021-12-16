import React, {useState, useEffect} from "react";
import {StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import DateHead from "./components/DateHead";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AddTodo from "./components/AddTodo";
import Empty from "./components/Empty";
import TodoList from "./components/TodoList";
import TodoStorage from "./database/TodoStorage";


export type TodoItemType = {
  id: number;
  text: string;
  done: boolean;
}

export type TodoType = {
  id: number;
  text: string;
  done: boolean;
}[];

export type TodoProps = {
  todos: TodoType
}

export default function App () {
  const styles = StyleSheet.create({
    block:{
      flex: 1,
    },
    avoid:{
      flex: 1,
    }
  });

  const today = new Date();
  
  const [todos , setTodos] = useState([
    {id: 1, text: '작업환경 설정', done: true},
    {id: 2, text: '리액트 네이티브 기초 공부', done: false},
    {id: 3, text: '투두 리스트 만들어보기', done: false},
  ]);

  useEffect(() => {
    TodoStorage.get()
    .then(setTodos)
    .catch(console.error);
  }, []);

  useEffect(() => {
    TodoStorage.set(todos).catch(console.error);
  }, [todos]);

  const onInsert = (text: string) => {
    const nextId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const todo ={
      id: nextId,
      text,
      done: false,
    };

    setTodos(todos.concat(todo));
  }

  const onToggle = (id: number) => {
    const nextTodos = todos.map((todo: TodoItemType) => 
      todo.id === id ? {...todo, done: !todo.done} : todo,
    );
    setTodos(nextTodos);
  }

  const onRemove = (id: number) => {
    const nextTodos = todos.filter(todo => todo.id !== id);
    setTodos(nextTodos);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
          <KeyboardAvoidingView
            behavior={Platform.select({ios: 'padding'})}
            style={styles.avoid}>
          <DateHead date={today}/>
          {todos.length === 0 ? (
            <Empty />
          ) : (
            <TodoList 
              todos={todos}
              onToggle={onToggle} 
              onRemove={onRemove}
            />
          )}
          <AddTodo onInsert={onInsert}/>
        </ KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}