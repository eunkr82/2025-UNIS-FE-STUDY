import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import styles from './App.module.css';

function App() { // index.js이 사용중
  return (
    <div className="App">
      <Hello />
      <Welcome />
      <Hello />
      <Hello />
      <div className={styles.box}>App.module.css</div>
    </div>
  );
}

export default App;
