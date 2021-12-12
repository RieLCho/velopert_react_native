import React from "react";
import {StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import DateHead from "./components/DateHead";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AddTodo from "./components/AddTodo";
import Empty from "./components/Empty";

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
  console.log(today);

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
          <KeyboardAvoidingView
            behavior={Platform.select({ios: 'padding'})}
            style={styles.avoid}>
          <DateHead date={today}/>
          <Empty />
          <AddTodo />
        </ KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}