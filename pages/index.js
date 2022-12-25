import Link from 'next/link'
import styles from '../style/main.module.css'

function Home(props) {
  return (
    <>
      <div className={styles.body} >
        <div className= {styles.main} >
          <div className={styles.header} >
          </div>
            <form className={styles.formHome}>
              <div className={styles.invitation} >
                به <span className={styles.red} >لوتوس </span>خوش آمدید
              </div>
                <button  className={styles.signup} >
                <Link className={styles['white'] + " " + styles['link'] } href='/signup' >
                      ثبت نام
                </Link>
                  </button>
                  <button className={styles.signin} >
                    <Link className={styles['red'] + " " + styles['link'] }  href='/signin' >
                          ورود
                    </Link>
                  </button>
              
            </form>
        <footer className={styles.footer} >
          <p>
        با ثبت نام و ورود به شب نما اقرار مینمایم که <span className={styles.red}>حریم
        خصوصی</span> و <span className={styles.red}>قوانین استفاده
        </span> را مطالعه نموده و پذیرفته ام
        
          </p>
        </footer>
        </div>
      </div>
    </>
  )
}

export default Home

export async function getStaticProps(){
  return{
    props : {

    }
  }

}