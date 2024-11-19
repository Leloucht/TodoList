import styles from './headActivity.module.css';

interface Props {
  tasksCounter: number
  checkedTasksCounter: number
}

export function HeadActivity ({tasksCounter, checkedTasksCounter}: Props) {
    return (
        <div className={styles.monitor}>
          <div className={styles.countTask}>
            Tarefas criadas
            <span>{tasksCounter}</span>
          </div>
          <div className={styles.completedTask}>
            Concluídas
            <span>{`${checkedTasksCounter} de ${tasksCounter}`}</span>
          </div>
        </div>
        
    )
}