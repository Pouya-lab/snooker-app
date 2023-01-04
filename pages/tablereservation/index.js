import Link from 'next/link'
import {BsChevronRight} from 'react-icons/bs'
import {AiOutlineHistory} from 'react-icons/ai'

import styles from '../../style/tablereservation.module.css'

function Tablereservation(props) {
  return (
    <>
    <div className={styles.body} >
            <div className= {styles.main} >
              
                 <header className={styles.header} >
                    <button className={styles.rightIcon} >
                        <Link className={styles.link}  href='#' >
                            <BsChevronRight className={styles.icon} />
                        </Link>
                    </button>
                    <h1 className={styles.title} >لوتوس</h1>
                    <Link href='/basket' className={styles.basket} />
                 </header>

                  <div className={styles.content}>
                    <p className={styles.reserveTitle}>
                    روزرو میز
                    </p>

                    <button >
                      <Link href='#' className={styles.link}>
                      8 Ball
                      </Link>
                    </button>
                    <button className="tableOption">
                      <Link href='#' className={styles.link}>
                        Snooker
                      </Link>
                    </button>
                    <button className="tableOption">
                      <Link href='#' className={styles.link}>
                          PS5
                      </Link>
                    </button>
                    <button className="tableOption">
                      <Link href='#' className={styles.link}>
                      فوتبال دستی
                      </Link>
                    </button>

                    <footer className={styles.footer} >
                <button className={styles.history}>
                    <Link href='/history' className={styles['link'] + " " + styles['historyLink']} >
                      <i> <AiOutlineHistory /></i>
                    <p className={styles.historyTxt} >تاریخچه</p>
                    </Link>
                  </button>
                </footer>

                  </div>
                
              </div>
      </div>
    </>
  )
}

export default Tablereservation

export async function getStaticProps(props){
    return{
        props:{

        }
    }
}