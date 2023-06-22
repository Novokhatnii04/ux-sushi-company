import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./store/CardContextProvider";

function App() {

  const [cardIsVisible, setNewCardState] = useState(false)

  const cardVisibilityHandler = () => {
    setNewCardState(true)
  }

  const hideCartHandler = () => {
    setNewCardState(false)
  }

  return <CartContextProvider>
    {cardIsVisible && <Cart onHideCart={hideCartHandler} />}
    <Header onCard={cardVisibilityHandler} />
    <Meals />
  </CartContextProvider>
}

export default App;
