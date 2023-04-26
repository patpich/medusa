import {
  ClaimOrder,
  LineItem,
  Order,
  SetRelation,
  Swap,
} from "@medusajs/client-types"

type OrderWithRelations = SetRelation<Order, "swaps" | "claims">

export const isLineItemCanceled = (
  item: LineItem,
  order: OrderWithRelations
) => {
  const { swap_id, claim_order_id } = item
  const travFind = (col: (Swap | ClaimOrder)[], id: string) =>
    col.filter((f) => f.id == id && f.canceled_at).length > 0

  if (swap_id) {
    return travFind(order.swaps, swap_id)
  }
  if (claim_order_id) {
    return travFind(order.claims, claim_order_id)
  }
  return false
}

export const isLineItemReturned = (item: LineItem) => {
  const { shipped_quantity, returned_quantity } = item

  if (!returned_quantity) {
    return false
  }

  if (shipped_quantity && returned_quantity === shipped_quantity) {
    return true
  }
}

export const isLineItemNotReturnable = (
  item: LineItem,
  order: OrderWithRelations
) => {
  return isLineItemCanceled(item, order) || isLineItemReturned(item)
}
