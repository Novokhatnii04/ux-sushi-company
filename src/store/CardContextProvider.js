import CartContext from "./card-context";
import { useReducer } from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReudcer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const updateItems = state.items.concat(action.item)
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount

        return {
            items: updateItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState
}

const CartContextProvider = (props) => {

    const [cartSttate, dispatchCartAction] = useReducer(cartReudcer, defaultCartState)

    const addItemHandler = item => {
        dispatchCartAction({
            type: 'ADD_ITEM',
            item: item
        })
    }

    const removeItemHandler = id => {
        dispatchCartAction({
            type: 'REMOVE_ITEM',
            id: id
        })
    }

    const cartContext = {
        items: cartSttate.items,
        totalAmount: cartSttate.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    return <CartContext.Provider value={cartContext} >
        {props.children}
    </CartContext.Provider>
}

export default CartContextProvider