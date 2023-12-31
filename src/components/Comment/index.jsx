import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "../Avatar";
import { useState } from "react";

export function Comment({ author, content, publishedAt, likes, deleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleDeleteComment() {
    deleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1)
  }

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

            <button onClick={handleDeleteComment} title="Deletar comentário">
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
          <button onClick={handleLikeComment} title="Deletar comentário">
              <ThumbsUp size={20}/>
              Aplaudir
              <span></span>
              {likeCount}
          </button>
        </footer>
      </div>
    </div>
  )
}