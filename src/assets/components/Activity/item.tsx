import { FaCheck, FaRegTrashAlt } from 'react-icons/fa';
import styles from './items.module.css';
import { ITask } from '../../../App';

interface Props {
    data: ITask
    removeTask: (id:number) => void
    toggleTaskStatus: ({id, value}: {id: number; value: boolean}) => void
}

export function Item({ data, removeTask, toggleTaskStatus }: Props) {
    function handleTaskToggle() {
      toggleTaskStatus({ id: data.id, value: !data.isChecked })
    }

    function handleRemove(){
        removeTask(data.id)
    }

    const checkboxCheckedClassname = data.isChecked
    ? styles['checkbox-checked']
    : styles['checkebox-unchecked']
    const paragraphCheckedClassname = data.isChecked
    ? styles['paragraph-checked']
    : ''

    return (
        <div className={styles.container}>

            <div className={styles.activity}>
       
                <label htmlFor="checkbox" onClick={handleTaskToggle}>
                <input readOnly type="checkbox" checked={data.isChecked} />
                <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
                    {data.isChecked && <FaCheck size={12} />}
                </span>
                    
                    <p className={`${styles.paragraph} ${paragraphCheckedClassname}`} >
                        {data.text}
                    </p>
                    </label>
            </div>

                    <button className={styles.btnDeleteTask} onClick={handleRemove}>
                        <FaRegTrashAlt size={24} />
                    </button>
              

        </div>
    )
}