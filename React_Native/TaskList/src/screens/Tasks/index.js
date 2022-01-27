import React, { useState } from 'react';
import { Text, FlatList } from 'react-native';

import Header from "../../components/Header";
import TaskForm from './TaskForm';
import TaskTile from './TaskTile';

export default function TasksScreen() {
  //Liste de Taches
  //State pour garder en mémoire les taches
  const [ tasks, setTasks] = useState([
    {title: "Hello wolrd!", isCompleted: false}
  ])

  // item =  1 élément de l'array
  const renderItem = ({item}) => {
    return <TaskTile task={item} />
  }

  //Ajouter une fonction pour ajouter une tache au states
  //Passer cette fonction à notre formulaire
  const onAddTask = (title) => {
    setTasks([...tasks, {
      id: Date.now(),
      title,
      isCompleted: false
    } ])
  }

  //2x TaskCounter => props nb & title
  //TaskList return => Flatlist => TaskTile
  return (
    <>
      <FlatList
        ListHeaderComponent={
          <>
            <Header/>
            <TaskForm onAddTask={onAddTask}/>
          </>
        }
        contentContainerStyle={{ flexGrow:1 }}
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </>
  )
};
