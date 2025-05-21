import { useState } from "react";
import styles from "../style/WordCard.module.css";

function WordCard({ word, onToggleMemorized }) {
  const { id, word: wordText, meaning, memorized } = word;

  
    
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
  
