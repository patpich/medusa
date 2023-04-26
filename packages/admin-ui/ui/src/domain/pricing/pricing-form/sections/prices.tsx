import {
  Merge,
  Product,
  ProductVariant,
  SetRelation,
} from "@medusajs/client-types"
import { useAdminPriceListProducts } from "@medusajs/client-react"
import * as React from "react"
import Accordion from "../../../../components/organisms/accordion"
import { merge } from "../../details/sections/prices-details/utils"
import ProductPrices from "./product-prices"

type ProductWithRelations = Merge<
  SetRelation<Product, "variants">,
  { variants: SetRelation<ProductVariant, "prices">[] }
>

type PricesSectionProps = {
  isEdit?: boolean
  id?: string
}

const defaultQueryFilters = {
  limit: 50,
  offset: 0,
}

const PricesSection = ({ isEdit = false, id }: PricesSectionProps) => {
  const {
    products = [],
    isInitialLoading,
    isLoading,
  } = useAdminPriceListProducts(id!, defaultQueryFilters, {
    enabled: isEdit,
  })

  const [selectedProducts, setSelectedProducts] = React.useState<
    ProductWithRelations[]
  >([])
  const mergedProducts = merge(
    products,
    selectedProducts
  ) as ProductWithRelations[]

  return (
    <Accordion.Item
      forceMountContent
      required
      value="prices"
      title="Prices"
      description="You will be able to override the prices for the products you add here"
      tooltip="Define the price overrides for the price list"
    >
      <ProductPrices
        products={mergedProducts}
        isLoading={isEdit ? isLoading : isInitialLoading}
        setProducts={setSelectedProducts}
        onFileChosen={console.log}
      />
    </Accordion.Item>
  )
}

export default PricesSection
