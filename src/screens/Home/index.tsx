import { Text, TextInput, View, TouchableOpacity, FlatList, Alert } from 'react-native';
import { useState } from 'react';

import { styles } from './style';
import { Task } from '../../components/Task'

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([])
  const [tasksName, setTasksName] = useState('')

  function handleTaskAdd() {
    if (tasks.includes(tasksName)) {
      return Alert.alert('Tarefa ja adicionada', 'Voce ja adicionou essa tarefa')
    }

    setTasks(prevState => [...prevState, tasksName]) //MANIPULANDO ESTADO
    setTasksName('') //usado para limpar a caixinha depois de add 
  }

  function hadleTaskRemove(name: string) {
    Alert.alert('Remover', `Deseja remover a tarefa ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setTasks(prevState => prevState.filter(tasks => tasks !== name))
      },
      {
        text: 'Cancelar',
        style: 'cancel'
      }
    ])
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.titulo}>
          <Text style={styles.textTitle1}>
            to
          </Text>
          <Text style={styles.textTitle2}>
            do
          </Text>
        </View>

        <View style={styles.form}>
          <TextInput style={styles.input}
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor={'#6b6b6b'}
            onChangeText={setTasksName}
          />
          <View style={styles.divButton}>
            <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
              <Text style={styles.buttonText}>
                +
              </Text>
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.alt}>

        <View style={styles.menu}>
          <Text style={styles.created}>
            Criadas
          </Text>

          <Text style={styles.completed}>
            Concluidas
          </Text>
        </View>

          
          <FlatList
            data={tasks}
            keyExtractor={item => item}
            style={styles.list}
            renderItem={({ item }) => (
              <Task
                key={item}
                name={item}
                onRemove={() => hadleTaskRemove(item)}
              />
            )}
            ListEmptyComponent={() => (
              <Text style={styles.listEmpty}>
                Lista de tarefas
              </Text>
            )}
          />
        </View>


      </View>




    </>
  )
}
