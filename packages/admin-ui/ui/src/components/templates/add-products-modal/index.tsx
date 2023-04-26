import {
  Merge,
  Product,
  ProductVariant,
  SetRelation,
} from "@medusajs/client-types"
import { useAdminProducts } from "@medusajs/client-react"
import * as React from "react"
import Button from "../../fundamentals/button"
import Modal from "../../molecules/modal"
import { SelectableTable } from "../selectable-table"
import useQueryFilters from "../../../hooks/use-query-filters"
import { columns, ProductHeader, ProductRow } from "./product-table-config"
import { mapIdsToItems } from "./utils"

type ProductWithRelations = Merge<
  SetRelation<Product, "variants">,
  { variants: SetRelation<ProductVariant, "prices">[] }
>

const defaultQueryProps = {
  limit: 12,
  offset: 0,
}

export type AddProductsModalProps = {
  close: () => void
  initialSelection: ProductWithRelations[]
  onSave: (items: ProductWithRelations[]) => void
}

const AddProductsModal = ({
  close,
  initialSelection,
  onSave,
}: AddProductsModalProps) => {
  /* ************* Data ************  */

  const params = useQueryFilters(defaultQueryProps)
  const {
    products,
    isLoading,
    count = 0,
  } = useAdminProducts(params.queryObject, {
    keepPreviousData: true,
  })

  /* ************* State ************  */

  const [selectedIds, setSelectedIds] = React.useState(
    initialSelection.map((prod) => prod.id)
  )
  /* selectedItems hold the selected products across different pages */
  const [selectedItems, setSelectedItems] = React.useState(initialSelection)

  React.useEffect(() => {
    /**
     * Every time we select an id is selected, we should update the selectedItems
     * ... to include the selected products across different pages/query objects
     */
    setSelectedItems(mapIdsToItems(selectedItems, selectedIds, products))
  }, [selectedIds, products])

  /* ************* Handlers ************  */

  const handleSave = () => {
    onSave(selectedItems)
    close()
  }

  return (
    <Modal open handleClose={close}>
      <Modal.Body>
        <Modal.Header handleClose={close}>
          <h2 className="inter-xlarge-semibold">Add Products</h2>
        </Modal.Header>
        <Modal.Content>
          <div className="flex h-full min-h-[300px] w-full flex-col justify-between ">
            <SelectableTable
              columns={columns}
              data={products || []}
              renderRow={ProductRow}
              renderHeaderGroup={ProductHeader}
              onChange={(ids) => setSelectedIds(ids)}
              selectedIds={selectedIds}
              isLoading={isLoading}
              resourceName="products"
              totalCount={count}
              options={{
                enableSearch: true,
                searchPlaceholder: "Search by name or description...",
              }}
              {...params}
            />
          </div>
        </Modal.Content>
        <Modal.Footer>
          <div className="flex w-full justify-end gap-2">
            <Button
              variant="ghost"
              className="rounded-rounded h-8 w-[128px]"
              onClick={close}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              className="rounded-rounded h-8 w-[128px]"
              onClick={handleSave}
            >
              Save
            </Button>
          </div>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  )
}

export default AddProductsModal
