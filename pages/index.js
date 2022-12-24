import styles from '../style/home.module.css'

function Home(props) {
  return (
    <div className={styles.body} >
      <div className= {styles.main} >
        <div className={styles.header} >
        </div>
          <form className={styles.formHome}>
            <div className={styles.invitation} >
              به <span className={styles.red} >لوتوس </span>خوش آمدید
            </div>
            <button href='#' className={styles.signup} >
                ثبت نام
              </button>
               <button href='#' className={styles.signin} >
                  ورود
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
  )
}

export default Home

export async function getStaticProps(){
  return{
    props : {

    }
  }

}