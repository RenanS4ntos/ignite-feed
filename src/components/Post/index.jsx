/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR"
import { Comment } from '../Comment';
import { Avatar } from '../Avatar';

import styles from './Post.module.css';
import { useState } from "react";

export function Post({ author, content, publishedAt, comments }) {
  

  const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment() {
    event.preventDefault();

    console.log("foi!");
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={`${author.avatar_url}`} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>  
            <span>{author.role}</span>
          </div>
        </div>

        <time 
          title={publishedDateFormatted} 
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((item) => {
          if (item.type === "paragraph") {
            return <p key={item.content}>{item.content}</p>
          } else if (item.type === "link") {
            return <p key={item.content}><a href="#">👉{' '}{item.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={() => handleCreateNewComment()} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Escreva um comentário...' />
        <footer>
          <button className={styles.button} type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        { 
          comments.map(comment => {
            return (
              <Comment 
                key={comment.id}
                author={comment.author}
                content={comment.content}
                publishedAt={comment.publishedAt}
                likes={comment.likes}
              />
            );
          })
        }
        
      </div>
    </article>
  )
}