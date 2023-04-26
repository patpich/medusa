import { SetRelation, Store } from "@medusajs/client-types"
import DefaultCurrencySelector from "./default-currency-selector"

type StoreWithRelations = SetRelation<Store, "currencies" | "default_currency">

type Props = {
  store: StoreWithRelations
}

const DefaultStoreCurrency = ({ store }: Props) => {
  return (
    <div className="gap-y-large flex flex-col">
      <div>
        <h3 className="inter-large-semibold mb-2xsmall">
          Default store currency
        </h3>
        <p className="inter-base-regular text-grey-50">
          This is the currency your prices are shown in.
        </p>
      </div>

      <DefaultCurrencySelector store={store} />
    </div>
  )
}

export default DefaultStoreCurrency
