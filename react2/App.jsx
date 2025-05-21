import { useState } from "react";
import WordForm from "./component/WordForm";
import WordList from "./component/WordList";

function App() {
  const [words, setWords] = useState([
    { id: 1, word: "apple", meaning: "사과", memorized: false },
  ]);

  const addWord = (word, meaning) => {
    const newWord = {
      id: Date.now(),
      word: word,
      meaning: meaning,
      memorized: false,
    };
    setWords([...words, newWord]);
  };

  // 외운 상태 
  const toggleMemorized = (id) => {
    const updatedWords = words.map((w) =>
      w.id === id ? { ...w, memorized: !w.memorized } : w
    );
    setWords(updatedWords);
  };

  //근데 왜 안세지냐
  const memorizedCount = words.filter((w) => w.memorized).length;

  return (
    <div>
      <h1>📘 나의 단어장</h1>

   
      <WordForm onAdd={addWord} />
      
      <h2> 외우지 않은 단어</h2>
      <WordList
        words={words.filter((w) => !w.memorized)}
        onToggleMemorized={toggleMemorized}
      />

     
      <h2> 외운 단어 ({memorizedCount}개)</h2>
      <WordList
        words={words.filter((w) => w.memorized)}
        onToggleMemorized={toggleMemorized}
      />
    </div>
  );
}

export default App;
