import Image from 'next/image'
import styles from './main_menu/mainmenu.module.css'
import {Suspense} from "react"
import Loader from "./components/loader/Loader"
import MainMenuContent from './main_menu/MainMenuContent'
import PreloadAssets from '../../lib/PreloadAssets'


export default function MainMenu() {

  const versionNumber = "v0.0.1";

  return (
    <>
    <PreloadAssets />

    <div id={styles.mainMenuContainer}>
      <Image
      id={styles.mainMenuBackground}
      src={"/assets/main_menu/main_bg.jpg"}
      width={1500}
      height={850}
      alt={"Main Background Image"}
      ></Image>

      <div id={styles.mainMenuTitle}>Realm Shooter 2</div>

      <div id={styles.mainMenuContentWrapper}>
        <Suspense fallback={<Loader size={"20%"} />}>
          <MainMenuContent versionNumber={versionNumber} />
        </Suspense>
      </div>
      
   </div>
    </>
    
  )
}
