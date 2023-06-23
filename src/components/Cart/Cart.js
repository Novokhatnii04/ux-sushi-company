import styles from './Cart.module.css'
import Modal from '../UI/Modal'
import { useContext } from 'react'
import CardContext from '../../store/card-context'
import CartItem from './CartItem'

const Cart = (props) => {
    const cartContext = useContext(CardContext)
    const totalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}`
    const hasItems = cartContext.items.length > 0

    const removeCardItemHandler = (id) => {
        cartContext.removeItem(id)
    }

    const addCardItemHandler = (item) => {
        cartContext.addItem({ ...item, amount: 1 })
    }

    const cartItems = (<ul className={styles['cart-items']}>
        {cartContext.items.map(item => <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={addCardItemHandler.bind(null, item)}
            onRemove={removeCardItemHandler.bind(null, item.id)}
        />)}
    </ul>)

    return <Modal onHideCart={props.onHideCart}>
        {cartItems}
        <div className={styles.total}>
            <span>Итого</span>
            <span>{totalAmount}</span>
        </div>
        <div className={styles.actions}>
            <button onClick={props.onHideCart} className={styles['button-alt']}>Закрыть</button>
            {hasItems && <button className={styles.button}>Заказать</button>}
        </div>
    </Modal>
}



export default Cart