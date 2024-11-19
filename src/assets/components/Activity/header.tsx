import Rocket from '../../image/rocket.png';
import ToDo from '../../image/todo.png';
import styles from './header.module.css'

export function Header(){
    return (
        <div>
            <header className={styles.head}>
                <img src={Rocket} title="Foguete da rocketseat" alt="imagem de um foguete"/>
                <img src={ToDo} alt="logo do aplicacao" />
             </header>
        </div>
    )
}