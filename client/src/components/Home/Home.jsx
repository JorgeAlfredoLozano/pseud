import ToolBar from '../ToolBar/ToolBar'
import Editor from '../Editor/Editor'
import Terminal from '../Terminal/Terminal'
import Menu from '../Menu/Menu' // Importa el componente Menu
import style from './Home.module.css'

const Home = () => {

    return (
        <div className={style.container}>
            <Menu /> 
            <ToolBar />
            <div className={style.content}>
                <div className={style.editor}>
                    <Editor/>
                </div>
                <div className={style.terminal}>
                    <Terminal/>
                </div>
            </div>

        </div>
    )
}

export default Home;
