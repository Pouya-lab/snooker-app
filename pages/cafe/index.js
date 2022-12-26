import Link from 'next/link'
import { useState } from 'react'
import {CgCoffee} from 'react-icons/cg'
import {BiDrink} from 'react-icons/bi'
import {CiBowlNoodles} from 'react-icons/ci'
import styles from '../../style/cafe.module.css'

function Cafe() {

    const [display , setDisplay] = useState(false)
    const [totalCount , setTotalCount] = useState(0)
    const [coffees , setCoffees] = useState([
      { name : 'اسپرسو' , price : 12500 , quantity : 0 } , 
      { name : 'اسپرسو' , price : 12500 , quantity : 0 } , 
      { name : 'اسپرسو' , price : 12500 , quantity : 0 } , 
      { name : 'اسپرسو' , price : 12500 , quantity : 0 } ,
      { name : 'اسپرسو' , price : 12500 , quantity : 0 } ,
      { name : 'اسپرسو' , price : 12500 , quantity : 0 } ,
      { name : 'اسپرسو' , price : 12500 , quantity : 0 } ,
      { name : 'اسپرسو' , price : 12500 , quantity : 0 } 
    ])

    
  const quantityIncrease = (index) =>{
    const newCoffee = [...coffees]
    newCoffee[index].quantity++;
    setCoffees(newCoffee)
    calculateTotal()
  }

  const quantityDecrease = (index) =>{
    // if(coffees.quantity < 0){
    //   const newCoffee = [...coffees]
    //   newCoffee[index].quantity--;
    // setCoffees(newCoffee)
    // calculateTotal()
    // }
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
                    <Link href='#' className={styles.basket} />
                </header>

                <main className={styles.container} >
                        <h3 className={styles.containerTitle} >کافه</h3>
                        <div className={styles.options} >
                            
                            <button className={styles.optionCoffee}>
                                <Link className={styles.link } href='#'>
                                    <i className={styles.coffeeIcon}>
                                    <CgCoffee/> 
                                    </i>
                                    قهوه
                                </Link>
                            </button>

                            <button className >
                                <Link className={styles.link} href='#'>
                                    <i className>
                                    <BiDrink/> 
                                    </i>
                                    نوشیدنی
                            </Link>
                            </button>
                            <button className >
                                <Link className={styles.link} href='#'>
                                    <i className>
                                    <CiBowlNoodles/>
                                    </i>
                                    غذا
                                </Link>
                            </button>
                        </div>
                </main>
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