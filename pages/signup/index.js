import Link from "next/link"
import styles from '../../style/signup.module.css'


function SignUp(props) {

  return (
    <>
     <div className={styles.body} >
        <div className= {styles.main} >
            <div className={styles.header} >
            </div>
                <form className={styles.formSignIn}>
                    <p className={styles.signUpTxt} >
                        ثبت نام در <span className={styles.red} >لوتوس</span>
                    </p>
                    <input 
                    className={styles.userName} 
                    type="text"
                    placeholder="شماره موبایل" 
                    >
                    </input>
                    <input 
                    className={styles.validateCode} 
                    type="text"
                    placeholder="کد تایید" />
                        <button className={styles.resendCode} >
                            <Link className={styles.link} href='#' >
                                    <span className={styles['red'] }>
                                        ارسال مجدد کد        
                                    </span>
                            </Link>
                            </button>
                            <button className={styles.signUpBtn}>
                                <Link className={styles['link'] + " " + styles['white']}   href='#' >
                                        ثبت نام
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