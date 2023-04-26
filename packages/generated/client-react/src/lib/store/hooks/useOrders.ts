/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import {
  UseQueryOptionsWrapper,
  UseMutationOptionsWrapper,
  queryKeysFactory,
} from "../core/HookUtils"
import { useMedusaStore } from "../useMedusaStore"
import type { StoreGetOrdersParams } from "@medusajs/client-types"
import type { StoreOrdersRes } from "@medusajs/client-types"
import type { StorePostCustomersCustomerAcceptClaimReq } from "@medusajs/client-types"
import type { StorePostCustomersCustomerOrderClaimReq } from "@medusajs/client-types"

const QUERY_KEY = "orders"
export const orderKeys = queryKeysFactory(QUERY_KEY)

export const useLookupOrderOrder = (
  queryParams: StoreGetOrdersParams,
  options: UseQueryOptionsWrapper<Awaited<StoreOrdersRes>, Error> = {}
) => {
  const { client } = useMedusaStore()
  const { data, ...rest } = useQuery<Awaited<StoreOrdersRes>, Error>(
    [QUERY_KEY, "lookupOrder", queryParams],
    () => client.orders.lookupOrder(queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useRequestCustomerOrdersOrder = (
  options: UseMutationOptionsWrapper<
    Awaited<any>,
    Error,
    StorePostCustomersCustomerOrderClaimReq
  > = {}
) => {
  const { client } = useMedusaStore()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<
    Awaited<any>,
    Error,
    StorePostCustomersCustomerOrderClaimReq
  >(
    [QUERY_KEY, "requestCustomerOrders"],
    (requestBody: StorePostCustomersCustomerOrderClaimReq) =>
      client.orders.requestCustomerOrders(requestBody),
    options
  )
}

export const useRetrieveByCartIdOrder = (
  cartId: string,
  options: UseQueryOptionsWrapper<Awaited<StoreOrdersRes>, Error> = {}
) => {
  const { client } = useMedusaStore()
  const { data, ...rest } = useQuery<Awaited<StoreOrdersRes>, Error>(
    [QUERY_KEY, "retrieveByCartId", cartId],
    () => client.orders.retrieveByCartId(cartId),
    options
  )
  return { ...data, ...rest } as const
}

export const useConfirmRequestOrder = (
  options: UseMutationOptionsWrapper<
    Awaited<any>,
    Error,
    StorePostCustomersCustomerAcceptClaimReq
  > = {}
) => {
  const { client } = useMedusaStore()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<
    Awaited<any>,
    Error,
    StorePostCustomersCustomerAcceptClaimReq
  >(
    [QUERY_KEY, "confirmRequest"],
    (requestBody: StorePostCustomersCustomerAcceptClaimReq) =>
      client.orders.confirmRequest(requestBody),
    options
  )
}

export const useOrder = (
  id: string,
  queryParams: {
    /**
     * (Comma separated) Which fields should be included in the result.
     */
    fields?: string
    /**
     * (Comma separated) Which fields should be expanded in the result.
     */
    expand?: string
  } = {},
  options: UseQueryOptionsWrapper<Awaited<StoreOrdersRes>, Error> = {}
) => {
  const { client } = useMedusaStore()
  const { data, ...rest } = useQuery<Awaited<StoreOrdersRes>, Error>(
    [QUERY_KEY, "retrieve", id, queryParams],
    () => client.orders.retrieve(id, queryParams),
    options
  )
  return { ...data, ...rest } as const
}
