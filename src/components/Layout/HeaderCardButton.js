import styles from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import { useContext, useEffect, useState } from 'react'
import CardContext from '../../store/card-context'


const HeaderCardButton = (props) => {
    const [isButtonAnimated, setIsInputAnimated] = useState(false)

    const cartContext = useContext(CardContext)

    const itemAmount = cartContext.items.reduce((acc, item) => {
        return acc + item.amount
    }, 0)

    const buttonClasses = `${styles.button} ${isButtonAnimated ? styles.bump : ''}`;

    useEffect(() => {
        if (cartContext.items.length === 0) {
            return
        }
        setIsInputAnimated(true)
        const timer = setTimeout(() => { setIsInputAnimated(false) }, 1000)
        return () => {
            clearTimeout(timer)
        }
    }, [cartContext.items])

    return <button onClick={props.onClick} className={buttonClasses}>
        <span className={styles.icon}>
            <CartIcon />
        </span>
        <span>Корзина</span>
        <span className={styles.badge}>{itemAmount}</span>
    </button>
}

export default HeaderCardButton