import Image from 'next/image'
import styles from './page.module.css'
import GetData from '../../lib/getData'
import Loader from './components/loader/Loader'
import { Suspense } from 'react'

export default function Home() {
  return (
    <div id={styles.test}>
   <Suspense fallback={<Loader />}>
      <GetData />
   </Suspense>
   </div>
  )
}
