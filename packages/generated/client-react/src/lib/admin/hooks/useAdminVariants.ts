/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import {
  UseQueryOptionsWrapper,
  UseMutationOptionsWrapper,
  queryKeysFactory,
} from "../core/HookUtils"
import { useMedusaAdmin } from "../useMedusaAdmin"
import type { AdminGetVariantParams } from "@medusajs/client-types"
import type { AdminGetVariantsParams } from "@medusajs/client-types"
import type { AdminGetVariantsVariantInventoryRes } from "@medusajs/client-types"
import type { AdminVariantsListRes } from "@medusajs/client-types"
import type { AdminVariantsRes } from "@medusajs/client-types"

const QUERY_KEY = "variants"
export const adminVariantKeys = queryKeysFactory(QUERY_KEY)

export const useAdminVariants = (
  queryParams: AdminGetVariantsParams = {},
  options: UseQueryOptionsWrapper<Awaited<AdminVariantsListRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminVariantsListRes>, Error>(
    [QUERY_KEY, "list", queryParams],
    () => client.variants.list(queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminVariant = (
  id: string,
  queryParams: AdminGetVariantParams = {},
  options: UseQueryOptionsWrapper<Awaited<AdminVariantsRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminVariantsRes>, Error>(
    [QUERY_KEY, "retrieve", id, queryParams],
    () => client.variants.retrieve(id, queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminGetInventoryVariant = (
  id: string,
  options: UseQueryOptionsWrapper<
    Awaited<AdminGetVariantsVariantInventoryRes>,
    Error
  > = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<
    Awaited<AdminGetVariantsVariantInventoryRes>,
    Error
  >(
    [QUERY_KEY, "getInventory", id],
    () => client.variants.getInventory(id),
    options
  )
  return { ...data, ...rest } as const
}
