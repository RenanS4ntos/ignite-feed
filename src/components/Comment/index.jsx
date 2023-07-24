import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "../Avatar";

export function Comment({ author, content, publishedAt, likes }) {
  const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <div className={styles.comment}>
      <Avatar src={author.avatar_url} hasBorder={false}/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author.name}</strong>
              <time 
                title={publishedDateFormatted} 
                dateTime={publishedAt.toISOString()}
              >
                {publishedDateRelativeToNow}
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>
          {
            content.map(line => {
              if (line.type === "paragraph") {
                return <p>{line.content}</p>;
              } else if (line.type === "link") {
                return <p><a href="#">{line.content}</a></p>;
              }
            })
          }
        </div>

        <footer>
          <button title="Deletar comentário">
              <ThumbsUp size={20}/>
              Aplaudir
              <span></span>
              {likes}
          </button>
        </footer>
      </div>
    </div>
  )
}