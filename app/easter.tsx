"use client";
import { useContext } from "react";
import { EasterContext } from "./context/easter-context";
import styles from "./page.module.css";

export const Easter = () => {
  const { onDateChange, date, data, error, tellMeItsEaster } = useContext(EasterContext);
  return (
    <>
      <ol>
        <li>
          Descubra se é capaz de testar todas as regras dessa <strong>super aplicação</strong>
        </li>
        <li>Afinal: hoje é Páscoa ou não?</li>
      </ol>

      <label>Que dia é aí no seu planeta?</label>
      <input data-testid="date-input" type="date" value={date} onChange={e => onDateChange(e.target.value)} />

      <div className={styles.ctas}>
        <button
          className={styles.primary}
          onClick={tellMeItsEaster}
        >
          É Páscoa?
        </button>
      </div>

      <h4 data-tesid="result-text">{data ?? error}</h4>
    </>
  );
};
