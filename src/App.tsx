import styles from './App.module.css';
import './global.css';
import { LuPlusCircle } from 'react-icons/lu';
import { HeadActivity } from './assets/components/headActivity';
import { useState } from 'react';
import { Header as Activityheader } from './assets/components/Activity/header';
import { Item } from './assets/components/Activity/item';
import { Empty } from './assets/components/Activity/empty';
import { Input } from './assets/components/Input';
import { Button } from './assets/components/Button';

export interface ITask {
  id: number
  text: string
  isChecked: boolean
}


function App() {
  

  const [tasks, setTasks] = useState<ITask[]>([])
  const [inputValue, setInputValue] = useState('')

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if(currentTask.isChecked) {
       return prevValue + 1
    }

    return prevValue
  }, 0)
  

  function handleAddTask(){
    if(!inputValue){
      return
    }

    const newTask: ITask ={
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    }

    setTasks((state) => [...state, newTask])
    setInputValue('')
  }

  function handleRemoveTask(id: number) {
    const filtedTasks = tasks.filter((task) => task.id !== id)

    if(!confirm('Desaja meesmo apagar esta tarefa?')) {
      return
    }

    setTasks(filtedTasks)
  }

  function handleToggleTask({id, value}: {id:number, value: boolean}) {
    const updatedTasks = tasks.map((task) => {
      if(task.id === id) {
        return {...task, isChecked: value}
      }
      return {...task}
    })

    setTasks(updatedTasks)
  }

  return (
    <div className={styles.mainPage}>
      <Activityheader />
    <section className={styles.sectionToDo}>
      <div className={styles.topBar}>
        <Input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <Button 
          className={styles.btnTask}
          onClick={handleAddTask}>
          Criar
          <LuPlusCircle size={20} className={styles.plusCircle}/>
        </Button>
      </div>
      <div className={styles.TalkSections}>
         <HeadActivity
          tasksCounter={tasks.length}
          checkedTasksCounter={checkedTasksCounter}
         />

          {tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                 <Item
                    key={task.id}
                    data={task}
                    removeTask={handleRemoveTask}
                    toggleTaskStatus={handleToggleTask}
                  />
              ))}
            </div>
          ) : (
           <Empty/>
          )}
      </div>
    </section>
    </div>
  )
}

export default App
