'use client'

import { useCart } from '@/context/cart-context'

export interface AddToCartBtn {
  productId: number
}

export function AddToCartBtn({ productId }: AddToCartBtn) {
  const { addToCart } = useCart()

  function handlerAddToCart() {
    addToCart(productId)
  }

  return (
    <button
      type="button"
      onClick={handlerAddToCart}
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
    >
      Adicionar ao carrinho
    </button>
  )
}
