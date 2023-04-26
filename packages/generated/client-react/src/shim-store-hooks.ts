import {
  useAddShippingMethodCart,
  useCreateLineItemCart,
  useCreatePaymentSessionsCart,
  useCustomer,
  useDeleteLineItemCart,
  useListCartOptionsShippingOption,
  useListOrdersCustomer,
  useSetPaymentSessionCart,
  useUpdateCustomer,
  useUpdateLineItemCart,
} from "./lib/store/hooks"

/**
 * Shimmed exports to be deprecated
 */
export {
  useAddShippingMethodCart as useAddShippingMethodToCart,
  useCreateLineItemCart as useCreateLineItem,
  useCreatePaymentSessionsCart as useCreatePaymentSession,
  useCustomer as useMeCustomer,
  useDeleteLineItemCart as useDeleteLineItem,
  useListCartOptionsShippingOption as useCartShippingOptions,
  useListOrdersCustomer as useCustomerOrders,
  useUpdateCustomer as useUpdateMe,
  useUpdateLineItemCart as useUpdateLineItem,
  useSetPaymentSessionCart as useSetPaymentSession,
}
