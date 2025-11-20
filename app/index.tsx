import ToDoForm from "@/components/ToDoForm";
import React from "react";
import { FlatList, Text, View } from "react-native";

export default function Index() {
  const [tasks, setTasks] = React.useState<string[]>([]);

  const addTask = (task: string) => {
    setTasks([...tasks, task]);
  };

  return (
    <View>
      <Text>To-Do List</Text>

      {/* Pass addTask to ToDoForm */}
      <ToDoForm addTask={addTask} />

      {/* Display task list */}
      <FlatList
        data={tasks}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Text>{item}</Text>
        )}
      />
    </View>
  );
}