import Link from "next/link"
import {AiOutlineHistory} from 'react-icons/ai'
import styles from '../../style/home.module.css'

function Home(props) {

  return (
    <>
        <div className={styles.body} >
            <div className= {styles.main} >
              
                <header className={styles.header} >
                    <h1 className={styles.title} >لوتوس</h1>
                    <Link href='/basket' className={styles.basket} />
                </header>

                <main className={styles.container} >
                  <button className={styles.reservation} >
                   <Link className={styles['link'] + " " + styles['reservation'] } href='/tablereservation' >
                    <p className={styles.reserveTxt} >رزرو میز</p>
                      <div className={styles.table}  />
                      {/* <img className={styles.table} src={'/img/table.png'} alt="table" /> */}
                   </Link>
                  </button>

                  <button className={styles.courseSignUp} >
                    <Link href='/courses' className={styles['link'] + " " + styles['courseSignUp'] } >
                      <p className={styles.courseTxt} >ثبت نام کلاس آموزشی</p>
                      <div className={styles.signUp}  />
                    </Link>
                  </button>

                  <button className={styles.cafe} >
                    <Link  className={styles['link'] + " " + styles['cafeLink'] } href='/cafe' >
                      <p className={styles.cafeTxt} >کافه</p>
                      <div className={styles.cafePic}  />
                    </Link>
                  </button>
                </main>
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
    </>
  )
}

export default Home

export async function getStaticprops(props){
  return{
    props : {

    }
  }
}