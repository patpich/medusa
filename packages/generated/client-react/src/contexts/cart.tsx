import React, { useState } from "react"
import {
  useAddShippingMethodCart,
  useCompleteCart,
  useCreateCart,
  useCreatePaymentSessionsCart,
  useSetPaymentSessionCart,
  useUpdateCart,
} from "../lib/store/hooks"
import { Cart } from "../types"

interface CartState {
  cart?: Cart
}

interface CartContext extends CartState {
  setCart: (cart: Cart) => void
  pay: ReturnType<typeof useSetPaymentSessionCart>
  createCart: ReturnType<typeof useCreateCart>
  startCheckout: ReturnType<typeof useCreatePaymentSessionsCart>
  completeCheckout: ReturnType<typeof useCompleteCart>
  updateCart: ReturnType<typeof useUpdateCart>
  addShippingMethod: ReturnType<typeof useAddShippingMethodCart>
  totalItems: number
}

const CartContext = React.createContext<CartContext | null>(null)

export const useCart = () => {
  const context = React.useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

interface CartProps {
  children: React.ReactNode
  initialState?: Cart
}

const defaultInitialState = {
  id: "",
  items: [] as any,
} as Cart

export const CartProvider = ({
  children,
  initialState = defaultInitialState,
}: CartProps) => {
  const [cart, setCart] = useState<Cart>(initialState)

  const createCart = useCreateCart({
    onSuccess: ({ cart }) => setCart(cart),
  })

  const updateCart = useUpdateCart(cart?.id, {
    onSuccess: ({ cart }) => setCart(cart),
  })

  const addShippingMethod = useAddShippingMethodCart(cart?.id, {
    onSuccess: ({ cart }) => setCart(cart),
  })

  const startCheckout = useCreatePaymentSessionsCart(cart?.id, {
    onSuccess: ({ cart }) => setCart(cart),
  })

  const pay = useSetPaymentSessionCart(cart?.id, {
    onSuccess: ({ cart }) => {
      setCart(cart)
    },
  })

  const completeCheckout = useCompleteCart(cart?.id)

  const totalItems = cart
    ?.items!.map((i) => i.quantity)
    .reduce((acc, curr) => acc + curr, 0)

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        createCart,
        pay,
        startCheckout,
        completeCheckout,
        updateCart,
        addShippingMethod,
        totalItems: totalItems || 0,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
