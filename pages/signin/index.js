import styles from '../../style/signin.module.css'

function SignIn() {
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
                    <button className={styles.forgottenPass} href="#">
                        <span className={styles.red}>
                             فراموشی رمز عبور        
                        </span>
                        </button>
                        <button className={styles.signInBtn} href="#">
                        ورود
                        </button>
                </form>
                <footer>
                    <p className={styles.footerTxt} >
                          آیا عضو جدید هستید؟ 
                         <button href='#' className={styles['red'] +" " + styles['signUpBtn'] } >
                            ثبت نام
                        </button>
                    </p>
                </footer>
        </div>
    </div>
    </>
  )
}

export default SignIn