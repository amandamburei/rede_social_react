import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

// src/App.jsx
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="amanda marques"
            content="lorem ipsum dolor sit amet consectetur adipisicing elit autem facilis dolorem voluptate"
          />
          <Post author="Gabriel Carvalho" content="Um novo post" />
        </main>
      </div>
    </div>
  );
}
