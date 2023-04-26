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
import type { StoreGetProductsParams } from "@medusajs/client-types"
import type { StoreGetProductsProductParams } from "@medusajs/client-types"
import type { StorePostSearchReq } from "@medusajs/client-types"
import type { StorePostSearchRes } from "@medusajs/client-types"
import type { StoreProductsListRes } from "@medusajs/client-types"
import type { StoreProductsRes } from "@medusajs/client-types"

const QUERY_KEY = "products"
export const productKeys = queryKeysFactory(QUERY_KEY)

export const useProducts = (
  queryParams: StoreGetProductsParams = {},
  options: UseQueryOptionsWrapper<Awaited<StoreProductsListRes>, Error> = {}
) => {
  const { client } = useMedusaStore()
  const { data, ...rest } = useQuery<Awaited<StoreProductsListRes>, Error>(
    [QUERY_KEY, "list", queryParams],
    () => client.products.list(queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useSearchProduct = (
  queryParams: StorePostSearchReq,
  options: UseMutationOptionsWrapper<
    Awaited<StorePostSearchRes>,
    Error,
    void
  > = {}
) => {
  const { client } = useMedusaStore()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<StorePostSearchRes>, Error, void>(
    [QUERY_KEY, "search", queryParams],
    () => client.products.search(queryParams),
    options
  )
}

export const useProduct = (
  id: string,
  queryParams: StoreGetProductsProductParams = {},
  options: UseQueryOptionsWrapper<Awaited<StoreProductsRes>, Error> = {}
) => {
  const { client } = useMedusaStore()
  const { data, ...rest } = useQuery<Awaited<StoreProductsRes>, Error>(
    [QUERY_KEY, "retrieve", id, queryParams],
    () => client.products.retrieve(id, queryParams),
    options
  )
  return { ...data, ...rest } as const
}
