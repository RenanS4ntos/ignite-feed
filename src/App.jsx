import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css";
import "./global.css"
import { Post } from "./components/Post";


const posts = [
  {
    id: 1,
    author: {
      avatar_url: "https://github.com/renanS4ntos.png",
      name: "Renan Santos",
      role: "Web Developer"
    },
    publishedAt: new Date("2023-07-23 20:00:00"),
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"},
    ],
    comments: [
      {
        id: 1,
        author: {
          avatar_url: "https://github.com/maykBrito.png",
          name: "Mayk Brito",
        },
        publishedAt: new Date("2023-07-24 16:00:00"),
        content: [
          {type: "paragraph", content: "Muito bom Renan, parabéns!! 👏👏"},
        ],
        likes: 20,
      }
    ]
  },
  {
    id: 2,
    author: {
      avatar_url: "https://github.com/maykBrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat"
    },
    publishedAt: new Date("2023-07-20 20:00:00"),
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"},
    ],
    comments: [
      // {
      //   id: 1,
      //   author: {
      //     avatar_url: "https://github.com/maykBrito.png",
      //     name: "Mayk Brito",
      //     role: "Educator @Rocketseat"
      //   },
      //   publishedAt: new Date("2023-07-24 16:00:00"),
      //   content: [
      //     {type: "paragraph", content: "Muito bom Renan, parabéns!! 👏👏"},
      //   ],
      //   likes: 20,
      // }
    ]
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map((post) => (
              <Post 
                key={post.id}
                author={post.author}
                publishedAt={post.publishedAt}
                content={post.content}
                comments={post.comments}
              />
            ))
          }
        </main>
      </div>
    </div>
  )
}

