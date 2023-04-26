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
import type { StoreCartShippingOptionsListRes } from "@medusajs/client-types"
import type { StoreGetShippingOptionsParams } from "@medusajs/client-types"
import type { StoreShippingOptionsListRes } from "@medusajs/client-types"

const QUERY_KEY = "shippingOptions"
export const shippingOptionKeys = queryKeysFactory(QUERY_KEY)

export const useShippingOptions = (
  queryParams: StoreGetShippingOptionsParams = {},
  options: UseQueryOptionsWrapper<
    Awaited<StoreShippingOptionsListRes>,
    Error
  > = {}
) => {
  const { client } = useMedusaStore()
  const { data, ...rest } = useQuery<
    Awaited<StoreShippingOptionsListRes>,
    Error
  >(
    [QUERY_KEY, "list", queryParams],
    () => client.shippingOptions.list(queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useListCartOptionsShippingOption = (
  cartId: string,
  options: UseQueryOptionsWrapper<
    Awaited<StoreCartShippingOptionsListRes>,
    Error
  > = {}
) => {
  const { client } = useMedusaStore()
  const { data, ...rest } = useQuery<
    Awaited<StoreCartShippingOptionsListRes>,
    Error
  >(
    [QUERY_KEY, "listCartOptions", cartId],
    () => client.shippingOptions.listCartOptions(cartId),
    options
  )
  return { ...data, ...rest } as const
}
