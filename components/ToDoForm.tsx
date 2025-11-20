import React from "react";
import { View, TextInput, Button } from 'react-native';

interface ToDoFormProps {
  addTask: (task: string) => void;
}

export default function ToDoForm({ addTask }: ToDoFormProps) {
  const [task, setTask] = React.useState('');

  return(
    <View>
      <TextInput
        placeholder="Add a new task..."
        value={task}
        onChangeText={(text) => setTask(text)}
      />

      <Button
        title="Add Task"
        onPress={() => {
          addTask(task);
          setTask('');
        }}
      />
    </View>
  )
}