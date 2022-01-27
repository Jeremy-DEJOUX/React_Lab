import React, { useState } from 'react';
import { FlatList } from 'react-native';
import FloatingBtn from '../../components/FloatingBtn';

import Header from "../../components/Header";
import TaskForm from './TaskForm';
import TaskTile from './TaskTile';

export default function TasksScreen() {
  //Liste de Taches
  //State pour garder en mémoire les taches
  const [ tasks, setTasks] = useState([])

  const [ isFormVisible, setisFormVisible] = useState(false)

  // item =  1 élément de l'array
  const renderItem = ({item}) => {
    return <TaskTile task={item} onUpdateTask={onUpdateTask} onDeleteTask={onDeleteTask}/>
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

  const onDeleteTask = (id) => {
    let newTasks = []

    tasks.forEach(t => {
      if (t.id !== id) {
        newTasks.push(t);
        return
      }
    })

    setTasks(newTasks)
  }

  const onUpdateTask = (id) => {
    let newTasks = []

    tasks.forEach(t => {
      if (t.id !== id) {
        newTasks.push(t);
        return
      }
      newTasks.push({
        id,
        title: t.title,
        isCompleted: !t.isCompleted
      })
    })

    setTasks(newTasks)
  }

  const _toggleForm = () => {
    setisFormVisible(!isFormVisible)
  }

  //2x TaskCounter => props nb & title
  //TaskList return => Flatlist => TaskTile

  //Ajouter un bouton flottant => style position absolute
  //callback => rendu cond. TaskForm
  return (
    <>
      <FlatList
        ListHeaderComponent={
          <>
            <Header/>
            {isFormVisible && <TaskForm onAddTask={onAddTask}/>}
          </>
        }
        contentContainerStyle={{ flexGrow:1 }}
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />

      <FloatingBtn toggle={_toggleForm} isOpen={isFormVisible}/>
    </>
  )
};
