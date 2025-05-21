import { useState } from "react";
import styles from "../style/WordCard.module.css";
// 단어 카드 컴포넌트
function WordCard({ word, onToggleMemorized }) {
  const { id, word: wordText, meaning, memorized } = word;

  
    // memorized가 true이면 memorized 클래스 추가
    const cardClassName = word.memorized
      ? `${styles.card} ${styles.memorized}`
      : styles.card;
  
    return (
      <div
        className={cardClassName}
        onClick={() => props.onToggleMemorized(word.id)}
      >
        <h3>{word.word}</h3>
        <p>{word.meaning}</p>
      </div>
    );
  }
  
  export default WordCard;
  