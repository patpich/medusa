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
import type { StoreGetProductTagsParams } from "@medusajs/client-types"
import type { StoreProductTagsListRes } from "@medusajs/client-types"

const QUERY_KEY = "productTags"
export const productTagKeys = queryKeysFactory(QUERY_KEY)

export const useProductTags = (
  queryParams: StoreGetProductTagsParams = {},
  options: UseQueryOptionsWrapper<Awaited<StoreProductTagsListRes>, Error> = {}
) => {
  const { client } = useMedusaStore()
  const { data, ...rest } = useQuery<Awaited<StoreProductTagsListRes>, Error>(
    [QUERY_KEY, "list", queryParams],
    () => client.productTags.list(queryParams),
    options
  )
  return { ...data, ...rest } as const
}
