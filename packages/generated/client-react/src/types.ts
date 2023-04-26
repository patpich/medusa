import {
  ProductVariant,
  Region,
  SetRequired,
  StoreCartsRes,
} from "@medusajs/client-types"

// Choose only a subset of the type Region to allow for some flexibility
export type RegionInfo = Pick<Region, "currency_code" | "tax_code" | "tax_rate">

export type ProductVariantWithPrices = SetRequired<ProductVariant, "prices">

export type ProductVariantInfo = Pick<ProductVariantWithPrices, "prices">

export type Cart = StoreCartsRes["cart"]
