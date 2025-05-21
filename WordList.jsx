import WordCard from "./WordCard";

// 단어 목록을 보여주는 컴포넌트
function WordList(props) {
  const words = props.words;

  // 단어가 하나도 없으면 안내 문구 출력
  if (words.length === 0) {
    return <p>단어가 없습니다.</p>;
  }

  return (
    <div>
      {words.map((word) => (
        <WordCard
          key={word.id}
          word={word}
          onToggleMemorized={props.onToggleMemorized}
        />
      ))}
    </div>
  );
}

export default WordList;