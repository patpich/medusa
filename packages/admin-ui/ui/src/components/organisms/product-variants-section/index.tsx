import { adminInventoryItemKeys, useMedusaAdmin } from "@medusajs/client-react"
import {
  Merge,
  Product,
  ProductVariant,
  SetRelation,
  VariantInventory,
} from "@medusajs/client-types"
import { useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import useEditProductActions from "../../../hooks/use-edit-product-actions"
import useToggleState from "../../../hooks/use-toggle-state"
import { useFeatureFlag } from "../../../providers/feature-flag-provider"
import EditIcon from "../../fundamentals/icons/edit-icon"
import GearIcon from "../../fundamentals/icons/gear-icon"
import PlusIcon from "../../fundamentals/icons/plus-icon"

import { ActionType } from "../../molecules/actionables"
import Section from "../../organisms/section"
import AddVariantModal from "./add-variant-modal"
import EditVariantInventoryModal from "./edit-variant-inventory-modal"
import EditVariantModal from "./edit-variant-modal"
import EditVariantsModal from "./edit-variants-modal"
import OptionsModal from "./options-modal"
import OptionsProvider, { useOptionsContext } from "./options-provider"
import VariantsTable from "./table"

type ProductWithRelations = Merge<
  SetRelation<Product, "variants" | "options">,
  {
    variants: SetRelation<ProductVariant, "options" | "prices">[]
  }
>
type ProductVariantWithRelations = ProductWithRelations["variants"][0]

type Props = {
  product: ProductWithRelations
}

const ProductVariantsSection = ({ product }: Props) => {
  const queryClient = useQueryClient()
  const { client } = useMedusaAdmin()

  const { isFeatureEnabled } = useFeatureFlag()

  const [variantToEdit, setVariantToEdit] = useState<
    | {
        base: ProductVariantWithRelations
        isDuplicate: boolean
      }
    | undefined
  >(undefined)

  const [variantInventoryToEdit, setVariantInventoryToEdit] = useState<
    { base: ProductVariantWithRelations } | undefined
  >(undefined)

  const {
    state: optionState,
    close: closeOptions,
    toggle: toggleOptions,
  } = useToggleState()

  const {
    state: addVariantState,
    close: closeAddVariant,
    toggle: toggleAddVariant,
  } = useToggleState()

  const {
    state: editVariantsState,
    close: closeEditVariants,
    toggle: toggleEditVariants,
  } = useToggleState()

  const actions: ActionType[] = [
    {
      label: "Add Variant",
      onClick: toggleAddVariant,
      icon: <PlusIcon size="20" />,
    },
    {
      label: "Edit Variants",
      onClick: toggleEditVariants,
      icon: <EditIcon size="20" />,
    },
    {
      label: "Edit Options",
      onClick: toggleOptions,
      icon: <GearIcon size="20" />,
    },
  ]

  const { onDeleteVariant } = useEditProductActions(product.id)

  const handleDeleteVariant = async (variantId: string) => {
    let variantInventory: VariantInventory | undefined
    if (isFeatureEnabled("inventoryService")) {
      const { variant } = await client.variants.getInventory(variantId)
      variantInventory = variant
    }
    onDeleteVariant(variantId, async () => {
      if (
        isFeatureEnabled("inventoryService") &&
        variantInventory?.inventory[0]?.id
      ) {
        await client.inventoryItems.delete(variantInventory.inventory[0].id)
        queryClient.invalidateQueries(adminInventoryItemKeys.lists())
      }
    })
  }

  const handleEditVariant = (variant: ProductVariantWithRelations) => {
    setVariantToEdit({ base: variant, isDuplicate: false })
  }

  const handleDuplicateVariant = (variant: ProductVariantWithRelations) => {
    // @ts-ignore
    setVariantToEdit({ base: { ...variant, options: [] }, isDuplicate: true })
  }

  const handleEditVariantInventory = (variant: ProductVariantWithRelations) => {
    setVariantInventoryToEdit({ base: variant })
  }

  return (
    <OptionsProvider product={product}>
      <Section title="Variants" actions={actions}>
        <ProductOptions />
        <div className="mt-xlarge">
          <h2 className="inter-large-semibold mb-base">
            Product variants{" "}
            <span className="inter-large-regular text-grey-50">
              ({product.variants.length})
            </span>
          </h2>
          <VariantsTable
            variants={product.variants}
            actions={{
              deleteVariant: handleDeleteVariant,
              updateVariant: handleEditVariant,
              duplicateVariant: handleDuplicateVariant,
              updateVariantInventory: handleEditVariantInventory,
            }}
          />
        </div>
      </Section>
      <OptionsModal
        open={optionState}
        onClose={closeOptions}
        product={product}
      />
      <AddVariantModal
        open={addVariantState}
        onClose={closeAddVariant}
        product={product}
      />
      <EditVariantsModal
        open={editVariantsState}
        onClose={closeEditVariants}
        product={product}
      />
      {variantToEdit && (
        <EditVariantModal
          variant={variantToEdit.base}
          isDuplicate={variantToEdit.isDuplicate}
          product={product}
          onClose={() => setVariantToEdit(undefined)}
        />
      )}
      {variantInventoryToEdit && (
        <EditVariantInventoryModal
          variant={variantInventoryToEdit.base}
          product={product}
          onClose={() => setVariantInventoryToEdit(undefined)}
        />
      )}
    </OptionsProvider>
  )
}

const ProductOptions = () => {
  const { options, status } = useOptionsContext()

  if (status === "error") {
    return null
  }

  if (status === "loading" || !options) {
    return (
      <div className="mt-base grid grid-cols-3 gap-x-8">
        {Array.from(Array(2)).map((_, i) => {
          return (
            <div key={i}>
              <div className="mb-xsmall bg-grey-30 h-6 w-9 animate-pulse"></div>
              <ul className="flex flex-wrap items-center gap-1">
                {Array.from(Array(3)).map((_, j) => (
                  <li key={j}>
                    <div className="rounded-rounded bg-grey-10 text-grey-50 h-8 w-12 animate-pulse">
                      {j}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="mt-base flex flex-wrap items-center gap-8">
      {options.map((option) => {
        return (
          <div key={option.id}>
            <h3 className="inter-base-semibold mb-xsmall">{option.title}</h3>
            <ul className="flex flex-wrap items-center gap-1">
              {option.values
                ?.map((val) => val.value)
                .filter((v, index, self) => self.indexOf(v) === index)
                .map((v, i) => (
                  <li key={i}>
                    <div className="inter-small-semibold rounded-rounded bg-grey-10 text-grey-50 whitespace-nowrap px-3 py-[6px]">
                      {v}
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default ProductVariantsSection
