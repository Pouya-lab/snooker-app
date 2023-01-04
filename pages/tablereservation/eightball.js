import Link from 'next/link'
import {BsChevronRight} from 'react-icons/bs'
import {AiOutlineHistory} from 'react-icons/ai'

import styles from '../../style/eightball.module.css'

function EightBall(props) {
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
                    8 Ball 
                    </p>

                    <button >
                      <Link href='#' className={styles.link}>
                      میز معمولی
                      </Link>
                    </button>
                    <button className={styles.tableOption}>
                      <Link href='#' className={styles.link}>
                      میز VIP
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

export default EightBall

export async function getStaticProps(props){
    return{
        props:{

        }
    }
}