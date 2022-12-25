import Link from "next/link"
import Image from 'next/image'
import styles from '../../style/home.module.css'

function Home() {

  return (
    <>
        <div className={styles.body} >
            <div className= {styles.main} >
                <header className={styles.header} >
                    <h1 className={styles.title} >لوتوس</h1>
                    <Link href='#' className={styles.basket} />
                </header>
            </div>
        </div>
    </>
  )
}

export default Home