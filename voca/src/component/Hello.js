import World from './World';
import styles from "./Hello.module.css";

function showName() {
    console.log("Maetel");
}

function showText(e){
    console.log(e.target.value);
}

export default function Hello() {
    return (
        <div>
            <h1>Hello</h1>
            <World />
            <World />
            <hr></hr>
            <div className={styles.box}>안녕하시렵니까</div>

            <button onClick={showName}>Show Name</button>
            <button onClick={ () => {
                console.log(30);
            }}>Show Age</button>

            <input type="text" onChange={showText}/>
        </div>
            // ()없이 함수명만 기입합니다
    );
}