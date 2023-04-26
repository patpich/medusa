import { ProductCategory } from "@medusajs/client-types"

import { NestedMultiselectOption } from "../components/multiselect"

export function transformCategoryToNestedFormOptions(
  category: ProductCategory
): NestedMultiselectOption {
  const children =
    category.category_children?.map(transformCategoryToNestedFormOptions) || []

  return { value: category.id, label: category.name, children }
}
