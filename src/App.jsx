import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css";
import "./global.css"
import { Post } from "./components/Post";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Renan Santos" 
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo dolor vitae, vel placeat praesentium dignissimos dolorem deserunt eaque veritatis, sunt, fuga esse id saepe sequi repellendus illum accusamus assumenda laboriosam."
          />
          
          {/* <Post 
            author="Lívia Dalan" 
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo dolor vitae, vel placeat praesentium dignissimos dolorem deserunt eaque veritatis, sunt, fuga esse id saepe sequi repellendus illum accusamus assumenda laboriosam."
          /> */}
        </main>
      </div>
    </div>
  )
}

