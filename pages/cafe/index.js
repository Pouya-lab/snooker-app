import Link from 'next/link'
import { useState } from 'react'
import {CgCoffee} from 'react-icons/cg'
import {CiBowlNoodles} from 'react-icons/ci'
import {FiMinus} from 'react-icons/fi'
import {BiPlus , BiDrink } from 'react-icons/bi'
import {AiOutlineHistory} from 'react-icons/ai'
import styles from '../../style/cafe.module.css'

function Cafe() {

    const [display , setDisplay] = useState(false)
    const [totalCount , setTotalCount] = useState(0)
    const [coffees , setCoffees] = useState([
      { name : 'اسپرسو' , price : 12500 , quantity : 0 } , 
      { name : 'آمریکانو' , price : 12500 , quantity : 0 } , 
      { name : 'اسپرسو' , price : 12500 , quantity : 0 } , 
      { name : 'اسپرسو' , price : 12500 , quantity : 0 } ,
      { name : 'اسپرسو' , price : 12500 , quantity : 0 } ,
      { name : 'اسپرسو' , price : 12500 , quantity : 0 } ,
      { name : 'آمریکانو' , price : 12500 , quantity : 0 } ,
      { name : 'آمریکانو' , price : 12500 , quantity : 0 } 
    ])

    const displayQuantity = (index)=>{
      setDisplay(!display)
    }

    
  const quantityIncrease = (index) =>{
    const newCoffee = [...coffees]
    newCoffee[index].quantity++;
    setCoffees(newCoffee)
    calculateTotal()
  }

  const quantityDecrease = (index) =>{
    const newCoffee = [...coffees]
      newCoffee[index].quantity--;
    setCoffees(newCoffee)
    calculateTotal()
  }

  const calculateTotal = ()=>{
    const totalValue = coffees.reduce((total , coffee)=>{
     return total + coffee.quantity
    } , 0 )
    setTotalCount(totalValue)
   }
 
   console.log(totalCount)

  return (
    <>
        <div className={styles.body} >
            <div className= {styles.main} >
              
                <header className={styles.header} >
                    <h1 className={styles.title} >لوتوس</h1>
                    <Link href='/basket' className={styles.basket} />
                </header>

                <main className={styles.container} >
                        <h3 className={styles.containerTitle} >کافه</h3>
                        <div className={styles.options} >
                            
                            <button href='#' className={styles.optionCoffee}>
                                    <i className={styles.coffeeIcon}>
                                    <CgCoffee/> 
                                    </i>
                                    قهوه
                            </button>

                            <button href='#' className={styles.optionDrink} >
                                    <i className={styles.drinkIcon}>
                                    <BiDrink/> 
                                    </i>
                                    نوشیدنی
                            </button>
                            <button href='#' className={styles.optionFood} >
                                    <i className={styles.foodIcon}>
                                    <CiBowlNoodles/>
                                    </i>
                                    غذا
                            </button>
                        </div>

                        <div className={styles.coffeeList}>
                          {coffees.map((coffee , index)=>(
                            <div className={styles.coffeeListItems}>
                                <div className={styles.coffeeName}>{coffee.name}</div>
                                <div className={styles.price}>{coffee.price} تومان </div>
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
                                        {coffee.quantity}
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

export default Cafe

export async function getStaticprops(props){
    return{
        props:{

        }
    }
}