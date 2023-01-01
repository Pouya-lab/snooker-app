import Link from 'next/link'
import {AiOutlineHistory} from 'react-icons/ai'
import {BsChevronRight , BsChevronLeft} from 'react-icons/bs'
import styles from '../../style/courses.module.css'

function Course(porps) {

  return (
    <>
    <div className={styles.body} >
            <div className= {styles.main} >
              
                <header className={styles.header} >
                    <h1 className={styles.title} >لوتوس</h1>
                    <Link href='/basket' className={styles.basket} />
                </header>
                
                <main className={styles.courseField} >

                   <button className={styles.rightBtn} >
                        <Link href='#' className={styles.link} >
                                <BsChevronRight className={styles.icon} />
                        </Link>
                   </button>

                    <div className={styles.container}>

                        <h2 className={styles.courseTitle} >
                            کلاس های آموزشی
                        </h2>
                        <div className={styles.courseMain} />                        
                            <h3 className={styles.courseInfo} >دوره آموزشی اسنوکر - 3 ماهه</h3>
                           <div className={styles.price} >
                                <div className={styles.ticket} />
                                2,500,000 تومان
                           </div>

                        <p className={styles.courseText}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.
                        </p>

                        <button className={styles.signUpCourse} >
                            <Link className={styles.white}  href='#' >
                                افزودن به سبد خرید
                            </Link>
                        </button>

                    </div>
                    <button className={styles.leftBtn} >
                        <Link href='#' className={styles.link} >
                            <BsChevronLeft className={styles.icon} />
                        </Link>
                    </button>
                </main>

                <footer className={styles.footer} >
                    <button className={styles.history}>
                        <Link href='#' className={styles['link'] + " " + styles['historyLink']} >
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

export default Course

export async function getStaticProps(props){
    return{
        props : {

        }
    }
}