import { PiClipboardTextDuotone } from 'react-icons/pi'
import styles from './empty.module.css'

export function Empty() {
    return (
        <div className={styles.container}>
            <PiClipboardTextDuotone className={styles.paper} size={56}/>

            <p>
                <strong>Voce ainda nao tem tarefas cadastradas</strong><br></br>
                Crie tarefas e organize seus itens a fazer
            </p>
            
        </div>
    )
}