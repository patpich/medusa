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
import type { StoreGetProductCategoriesCategoryParams } from "@medusajs/client-types"
import type { StoreGetProductCategoriesCategoryRes } from "@medusajs/client-types"
import type { StoreGetProductCategoriesParams } from "@medusajs/client-types"
import type { StoreGetProductCategoriesRes } from "@medusajs/client-types"

const QUERY_KEY = "productCategories"
export const productCategoryKeys = queryKeysFactory(QUERY_KEY)

export const useProductCategories = (
  queryParams: StoreGetProductCategoriesParams = {},
  options: UseQueryOptionsWrapper<
    Awaited<StoreGetProductCategoriesRes>,
    Error
  > = {}
) => {
  const { client } = useMedusaStore()
  const { data, ...rest } = useQuery<
    Awaited<StoreGetProductCategoriesRes>,
    Error
  >(
    [QUERY_KEY, "list", queryParams],
    () => client.productCategories.list(queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useProductCategory = (
  id: string,
  queryParams: StoreGetProductCategoriesCategoryParams = {},
  options: UseQueryOptionsWrapper<
    Awaited<StoreGetProductCategoriesCategoryRes>,
    Error
  > = {}
) => {
  const { client } = useMedusaStore()
  const { data, ...rest } = useQuery<
    Awaited<StoreGetProductCategoriesCategoryRes>,
    Error
  >(
    [QUERY_KEY, "retrieve", id, queryParams],
    () => client.productCategories.retrieve(id, queryParams),
    options
  )
  return { ...data, ...rest } as const
}
