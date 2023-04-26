import { SetRelation, Store } from "@medusajs/client-types"
import { createContext, useContext } from "react"
import LayeredModal, {
  LayeredModalContext,
} from "../../../../../components/molecules/modal/layered-modal"
import CurrentCurrenciesScreen from "./current-currencies-screen"

type StoreWithRelations = SetRelation<Store, "currencies">

type Props = {
  store: StoreWithRelations
  open: boolean
  onClose: () => void
}

type EditCurrenciesModalContextType = {
  onClose: () => void
  store: StoreWithRelations
}

const EditCurrenciesModalContext =
  createContext<EditCurrenciesModalContextType | null>(null)

const EditCurrenciesModal = ({ store, open, onClose }: Props) => {
  const context = useContext(LayeredModalContext)

  return (
    <EditCurrenciesModalContext.Provider value={{ onClose, store }}>
      <LayeredModal context={context} open={open} handleClose={onClose}>
        <CurrentCurrenciesScreen />
      </LayeredModal>
    </EditCurrenciesModalContext.Provider>
  )
}

export const useEditCurrenciesModal = () => {
  const context = useContext(EditCurrenciesModalContext)

  if (!context) {
    throw new Error(
      "useEditCurrenciesModal must be used within EditCurrenciesModal"
    )
  }

  return context
}

export default EditCurrenciesModal
