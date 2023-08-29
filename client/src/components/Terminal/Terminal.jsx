import style from './Terminal.module.css'
const Terminal = () => {

    return (
        <div className={style.terminalContainer}>
            <textarea 
                className={style.terminalText} 
                name="" 
                id="" 
                cols="30" 
                rows="10"
            />
        </div>
    )
}

export default Terminal;