import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR"
import { Comment } from '../Comment';
import { Avatar } from '../Avatar';

import styles from './Post.module.css';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

export interface Author {
  name: string;
  role: string;
  avatar_url: string;
}

export interface Content {
  type: "paragraph" | "link";
  content: string;
}

export interface Comments {
  id: number;
  author: Author;
  publishedAt: Date;
  likes: number;
  content: Content[];
}

interface PostProps {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
  comments: Comments[];
 }

export function Post({ author, content, publishedAt, comments }: PostProps) {
  const [newCommentText, setNewCommentText] = useState('');
  

  const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    console.log(newCommentText);
  }

  function handleChangeNewComment(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Este campo é obrigatório!");
  }

  function deleteComment(commentToDeleteID: number) {
    console.log(`Deletando: ${commentToDeleteID}`);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={`${author.avatar_url}`} alt={author.name}/>
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

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder='Escreva um comentário...'
          name="comment"
          onInvalid={handleNewCommentInvalid}
          onChange={handleChangeNewComment}
          value={newCommentText}
          required
        />
        <footer>
          <button 
            className={styles.button} 
            type='submit'
            disabled={isNewCommentEmpty}
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        { 
          comments.map(comment => {
            return (
              <Comment 
                key={comment.id}
                id={comment.id}
                author={comment.author}
                content={comment.content}
                publishedAt={comment.publishedAt}
                likes={comment.likes}
                deleteComment={deleteComment}
              />
            );
          })
        }
        
      </div>
    </article>
  )
}