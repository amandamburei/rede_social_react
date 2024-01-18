import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbUZWygA0CP5AHs_uMefChAxu9OtZb2WxH0w&usqp=CAU"
      />
      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/86360011?v=4" />
        <strong>Amanda Carvalho</strong>
        <span> web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar perfil
        </a>
      </footer>
    </aside>
  );
}
