import { useState } from "react";

// 새로운 단어를 추가하는 입력 폼
function WordForm(props) {
  const [word, setWord] = useState("");       // 단어 입력 상태
  const [meaning, setMeaning] = useState(""); // 뜻 입력 상태

  // 폼 제출 시 실행되는 함수
  const handleSubmit = (event) => {
    event.preventDefault(); // 페이지 새로고침 방지

    // 단어 또는 뜻이 비어 있으면 추가하지 않음
    if (word.trim() === "" || meaning.trim() === "") {
      alert("단어와 뜻을 모두 입력해주세요.");
      return;
    }

    // 부모 컴포넌트(App)에서 전달받은 onAdd 함수 호출
    props.addWord(word, meaning);

    // 입력창 초기화
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
