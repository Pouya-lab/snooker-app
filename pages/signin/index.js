import Link from 'next/link'
import styles from '../../style/signin.module.css'

function SignIn(props) {
  return (
    <>
    <div className={styles.body} >
        <div className= {styles.main} >
            <div className={styles.header} >
            </div>
                <form className={styles.formSignIn}>
                    <p className={styles.signInTxt}>
                        ورود به <span className={styles.red}>لوتوس</span>
                    </p>
                    <input 
                    className={styles.userName} 
                    type="text"
                    placeholder="شماره موبایل" >
                    </input>
                    <input 
                    className={styles.password} 
                    type="password"
                    placeholder='رمزعبور' />
                    
                        <button className={styles.forgottenPass} >
                            <Link className={styles['link']} href='#'>
                                <span className={styles.red }>
                                    فراموشی رمز عبور        
                                </span>
                            </Link>
                            </button>
                   
                            <button className={styles.signInBtn} href="#">
                                <Link className={styles['link'] + " " + styles['white'] } href='#' >
                                    ورود
                                </Link>
                            </button>
                </form>
                <footer>
                    <p className={styles.footerTxt} >
                          آیا عضو جدید هستید؟ 
                         <button className={ styles.signUpBtn } >
                            <Link className={styles['link'] + " " + styles['red'] } href= '/signup'>
                                ثبت نام
                            </Link>
                        </button>
                    </p>
                </footer>
        </div>
    </div>
    </>
  )
}

export default SignIn

export async function getStaticProps(props){
    return{
        props : {

        }
    }
}