import { useFeatureFlag } from "../../../../providers/feature-flag-provider"
import {
  ClaimItem,
  ClaimOrder,
  Discount,
  Fulfillment,
  LineItem,
  Merge,
  Order,
  ProductVariant,
  Return,
  SetRelation,
  ShippingMethod,
  Swap,
} from "@medusajs/client-types"

const orderRelations = [
  "customer",
  "billing_address",
  "shipping_address",
  "discounts",
  "discounts.rule",
  "shipping_methods",
  "payments",
  "items",
  "fulfillments",
  "fulfillments.items",
  "fulfillments.tracking_links",
  "returns",
  "returns.items",
  "returns.shipping_method",
  "returns.shipping_method.tax_lines",
  "refunds",
  "claims",
  "claims.claim_items",
  "claims.claim_items.item",
  "claims.claim_items.item.variant",
  "claims.fulfillments",
  "claims.return_order",
  "claims.additional_items",
  "claims.additional_items.variant",
  "claims.additional_items.variant.product",
  "swaps",
  "swaps.fulfillments",
  "swaps.return_order",
  "swaps.return_order.items",
  "swaps.additional_items",
  "swaps.additional_items.variant",
  "swaps.additional_items.variant.product",
  "returnable_items",
]

export type OrderWithRelations = Merge<
  SetRelation<
    Order,
    | "customer"
    | "billing_address"
    | "shipping_address"
    | "discounts"
    | "shipping_methods"
    | "payments"
    | "items"
    | "fulfillments"
    | "returns"
    | "refunds"
    | "claims"
    | "swaps"
    | "returnable_items"
  >,
  {
    discounts: Array<SetRelation<Discount, "rule">>
    fulfillments: Array<SetRelation<Fulfillment, "items" | "tracking_links">>
    returns: Array<
      Merge<
        SetRelation<Return, "items" | "shipping_method">,
        {
          shipping_method: SetRelation<ShippingMethod, "tax_lines">
        }
      >
    >
    claims: Array<
      Merge<
        SetRelation<
          ClaimOrder,
          "claim_items" | "fulfillments" | "return_order" | "additional_items"
        >,
        {
          claim_items: Array<
            Merge<
              SetRelation<ClaimItem, "item">,
              {
                item: SetRelation<LineItem, "variant">
              }
            >
          >
          additional_items: Array<
            Merge<
              SetRelation<LineItem, "variant">,
              {
                variant: SetRelation<ProductVariant, "product">
              }
            >
          >
        }
      >
    >
    swaps: Array<
      Merge<
        SetRelation<Swap, "fulfillments" | "return_order" | "additional_items">,
        {
          return_order: SetRelation<Return, "items">
          additional_items: Array<
            Merge<
              SetRelation<LineItem, "variant">,
              {
                variant: SetRelation<ProductVariant, "product">
              }
            >
          >
        }
      >
    >
  }
>

const useOrdersExpandParam = () => {
  const { isFeatureEnabled } = useFeatureFlag()
  const editsEnabled = isFeatureEnabled("order_editing")

  if (editsEnabled) {
    if (orderRelations.indexOf("edits") === -1) {
      orderRelations.push("edits")
    }
  }

  return {
    orderRelations: orderRelations.join(","),
  }
}

export default useOrdersExpandParam
