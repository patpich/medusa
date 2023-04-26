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
import type { StoreGetVariantsParams } from "@medusajs/client-types"
import type { StoreGetVariantsVariantParams } from "@medusajs/client-types"
import type { StoreVariantsListRes } from "@medusajs/client-types"
import type { StoreVariantsRes } from "@medusajs/client-types"

const QUERY_KEY = "variants"
export const variantKeys = queryKeysFactory(QUERY_KEY)

export const useVariants = (
  queryParams: StoreGetVariantsParams = {},
  options: UseQueryOptionsWrapper<Awaited<StoreVariantsListRes>, Error> = {}
) => {
  const { client } = useMedusaStore()
  const { data, ...rest } = useQuery<Awaited<StoreVariantsListRes>, Error>(
    [QUERY_KEY, "list", queryParams],
    () => client.variants.list(queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useVariant = (
  variantId: string,
  queryParams: StoreGetVariantsVariantParams = {},
  options: UseQueryOptionsWrapper<Awaited<StoreVariantsRes>, Error> = {}
) => {
  const { client } = useMedusaStore()
  const { data, ...rest } = useQuery<Awaited<StoreVariantsRes>, Error>(
    [QUERY_KEY, "retrieve", variantId, queryParams],
    () => client.variants.retrieve(variantId, queryParams),
    options
  )
  return { ...data, ...rest } as const
}
