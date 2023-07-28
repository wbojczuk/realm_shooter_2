import styles from "../mainmenu.module.css"
import GetData from "../../../lib/getData"

interface propTypes{
    versionNumber: string
}

export default async function MainMenuContent(props: propTypes) {
    await GetData();
  return (
    <>
        <div id={styles.mainMenuOptions}>
            <button className={`${styles["main-menu-option"]} ${styles["profile-icon"]} `} ></button>
            <button className={`${styles["main-menu-option"]} ${styles["play-icon"]} `} ></button>
            <button className={`${styles["main-menu-option"]} ${styles["settings-icon"]} `} ></button>
        </div>

        <div id={styles.versionNumber}>{props.versionNumber}</div>
    </>
  )
}
