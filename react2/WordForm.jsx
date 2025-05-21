import { useState } from "react";


function WordForm(props) {
  const [word, setWord] = useState("");       // 단어 입력 상태
  const [meaning, setMeaning] = useState(""); // 뜻 입력 상태

  // 근데 안됨 이상함!!!!
  const handleSubmit = (event) => {
    event.preventDefault(); // 페이지 새로고침 방지

    // 단어 또는 뜻이 비어 있으면 추가하지 않음
    if (word.trim() === "" || meaning.trim() === "") {
      alert("단어와 뜻을 모두 입력해주세요.");
      return;
    }

    // 
    props.addWord(word, meaning);

    // 
    setWord("");
    setMeaning("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="단어"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <input
        type="text"
        placeholder="뜻"
        value={meaning}
        onChange={(e) => setMeaning(e.target.value)}
      />
      <button type="submit">추가</button>
    </form>
  );
}

export default WordForm;
