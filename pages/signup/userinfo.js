import Link from "next/link"
import styles from '../../style/userinfo.module.css'


function SignUp(props) {

  return (
    <>
     <div className={styles.body} >
        <div className= {styles.main} >
            <div className={styles.header} >
            </div>
                <form className={styles.formSignIn}>
                    <p className={styles.signUpTxt} >
                       ادامه ثبت نام در <span className={styles.red} >لوتوس</span>
                    </p>
                    <input 
                    className={styles.name} 
                    type="text"
                    placeholder="نام و نام خانوادگی " 
                    >
                    </input>
                    <input 
                    className={styles.birthdate} 
                    type="text"
                    placeholder="تاریخ تولد  " />
                    <input 
                    className={styles.knowUs} 
                    type="text"
                    placeholder=" نحوه آشنایی با ما  " />
                            <button className={styles.login} >
                                <Link className={styles['link'] + " " + styles['white']}   href='#' >
                                        ورود به برنامه 
                                    </Link>
                            </button>
                </form>
                <footer>
                    <p className={styles.footerTxt} >
                             قبلا ثبت نام کرده اید؟ 
                         <button className={styles['red'] +" " + styles['signInBtn'] } >
                         <Link className={styles['link'] + " " + styles['red']}  href= '/signin'>
                             ورود
                         </Link>
                        </button>
                    </p>
                </footer>
        </div>
     </div>
    </>
  )
}

export default SignUp

export async function getStaticProps(props){
    return{
        props : {

        }
    }
}