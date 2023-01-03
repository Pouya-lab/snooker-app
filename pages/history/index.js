import Link from 'next/link'
import {BsChevronRight} from 'react-icons/bs'
import {RiHomeLine} from 'react-icons/ri'
import styles from '../../style/history.module.css'

function History(props) {
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
                <div className={styles.container} >
                    
                    <p className={styles.historyTitle} >
                        سوابق
                    </p>

                    <div className={styles.historyOptions} >
                        <button className={styles.option} >
                            <Link className={styles.link} href='/history/tableHistory' >
                            سوابق رزرو میز
                            </Link>
                        </button>
                        <button className={styles.option} >سوابق شرکت 
                            <Link className={styles.link}  href='#' >
                            در دوره های آموزشی
                            </Link>
                        </button>
                        <button className={styles.option} >  
                            <Link className={styles.link} href='#' >
                            سوابق خرید از کافه  
                            </Link>
                        </button>
                    </div>
                    
                    <footer>
                        <button className={styles.home} >
                            <Link className={styles.link}  href='/home' >
                                <RiHomeLine/>
                                خانه
                            </Link>
                        </button>
                    </footer>
                </div>
            </div>
        </div>
    </>
  )
}

export default History

export async function getStaticProps(props){
    return{
        props:{

        }
    }
}