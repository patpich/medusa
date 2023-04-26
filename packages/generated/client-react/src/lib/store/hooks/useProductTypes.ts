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
import type { StoreGetProductTypesParams } from "@medusajs/client-types"
import type { StoreProductTypesListRes } from "@medusajs/client-types"

const QUERY_KEY = "productTypes"
export const productTypeKeys = queryKeysFactory(QUERY_KEY)

export const useProductTypes = (
  queryParams: StoreGetProductTypesParams = {},
  options: UseQueryOptionsWrapper<Awaited<StoreProductTypesListRes>, Error> = {}
) => {
  const { client } = useMedusaStore()
  const { data, ...rest } = useQuery<Awaited<StoreProductTypesListRes>, Error>(
    [QUERY_KEY, "list", queryParams],
    () => client.productTypes.list(queryParams),
    options
  )
  return { ...data, ...rest } as const
}
