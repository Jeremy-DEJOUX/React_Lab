import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function TaskForm({ onAddTask }) {

    const [newTitle, setNewTitle] = useState()

    const onChangeText = (val) => {
        setNewTitle(val)
    }

    const onAddNewTask = () => {
        if (newTitle === "") return;

        onAddTask(newTitle);
        setNewTitle('');
    }

  return (
      <View style={styles.container}>
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={newTitle}
            placeholder=' Nouvelle Tâches...'
        />
        <Button
            title='Ajouter'
            onPress={onAddNewTask}
            color='blue'
        />
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 10
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 7,
        width: '70%',
        height: 40
    }
}) 
