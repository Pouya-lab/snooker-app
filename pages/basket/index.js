import Link from 'next/link'
import { useState } from 'react'
import {CgCoffee} from 'react-icons/cg'
import {CiBowlNoodles} from 'react-icons/ci'
import {FiMinus} from 'react-icons/fi'
import {BiPlus , BiDrink } from 'react-icons/bi'
import {AiOutlineHistory} from 'react-icons/ai'
import {BsChevronRight} from 'react-icons/bs'
import styles from '../../style/basket.module.css'

function Basket(props) {

    
    const [display , setDisplay] = useState(false)
    const [totalCount , setTotalCount] = useState(0)
    const [items , setItems] = useState([
      { name : 'اسپرسو' , price : 12500 , quantity : 0 } , 
      { name : 'آمریکانو' , price : 12500 , quantity : 0 } , 
      { name : 'میز 8ball معمولی' , price : 12500 , quantity : 0 } , 
      { name : 'میز فوتبال دستی معمولی' , price : 12500 , quantity : 0 } ,
      { name : 'میز pes5 vip' , price : 12500 , quantity : 0 }
    ])

    const displayQuantity = (index)=>{
      setDisplay(!display)
    }

    
  const quantityIncrease = (index) =>{
    const newItem = [...items]
    newItem[index].quantity++;
    setItems(newItem)
    calculateTotal()
  }

  const quantityDecrease = (index) =>{
    const newItem = [...items]
      newItem[index].quantity--;
    setItems(newItem)
    calculateTotal()
  }

  const calculateTotal = ()=>{
    const totalValue = items.reduce((total , item)=>{
     return total + item.quantity
    } , 0 )
    setTotalCount(totalValue)
   }
 
   console.log(totalCount)

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
                    <Link href='#' className={styles.basket} />
                </header>

                <div className={styles.basketTitle} >
                    سبد پرداخت  
                </div>

                <main className={styles.container} >
                        <div className={styles.coffeeList}>
                          {items.map((item , index)=>(
                            <div className={styles.coffeeListItems}>
                                <div className={styles.coffeeName}>{item.name}</div>
                                <div className={styles.price}>{item.price} تومان </div>
                                <div className={styles.quantity}>
                                  {!display ?
                                  (<div className={styles.quantityCountDefault}>

                                      <button className={styles.increaseBtn}
                                      onClick={()=>displayQuantity(index)} >
                                        <BiPlus/>
                                      </button>

                                  </div>) : 
                                  (<div className={styles.countQuantity}>
                                    <button 
                                    className={styles.increaseBtn}
                                    onClick={()=>quantityIncrease(index)}>
                                        <BiPlus/>
                                      </button>
                                        <p className={styles.itemQuantity} >
                                        {item.quantity}
                                        </p>
                                      <button
                                      className={styles.decreaseBtn}
                                      onClick={()=>quantityDecrease(index)} >
                                        <FiMinus/>
                                      </button>
                                  </div>)}
                                </div>
                            </div>
                        )
                        )}
              </div>
                </main>

                    <button className={styles.pay} >
                        <Link className={styles['link'] + " " + styles['white']}  href='#' >
                        پرداخت      
                        </Link>
                    </button>

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

export default Basket

export async function getStaticProps(props){
    return{
        props:{

        }
    }
}