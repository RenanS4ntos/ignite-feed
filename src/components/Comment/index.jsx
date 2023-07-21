
import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "../Avatar";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/renanS4ntos.png" hasBorder={false}/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Renan Santos</strong>
              <time title="21 de Julho às 13:24h" dateTime="2023-07-21 13:24:00">Cerca de 2h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button title="Deletar comentário">
              <ThumbsUp size={20}/>
              Aplaudir
              <span></span>
              20
          </button>
        </footer>
      </div>
    </div>
  )
}