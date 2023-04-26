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
import type { StoreGetRegionsParams } from "@medusajs/client-types"
import type { StoreRegionsListRes } from "@medusajs/client-types"
import type { StoreRegionsRes } from "@medusajs/client-types"

const QUERY_KEY = "regions"
export const regionKeys = queryKeysFactory(QUERY_KEY)

export const useRegions = (
  queryParams: StoreGetRegionsParams = {},
  options: UseQueryOptionsWrapper<Awaited<StoreRegionsListRes>, Error> = {}
) => {
  const { client } = useMedusaStore()
  const { data, ...rest } = useQuery<Awaited<StoreRegionsListRes>, Error>(
    [QUERY_KEY, "list", queryParams],
    () => client.regions.list(queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useRegion = (
  id: string,
  options: UseQueryOptionsWrapper<Awaited<StoreRegionsRes>, Error> = {}
) => {
  const { client } = useMedusaStore()
  const { data, ...rest } = useQuery<Awaited<StoreRegionsRes>, Error>(
    [QUERY_KEY, "retrieve", id],
    () => client.regions.retrieve(id),
    options
  )
  return { ...data, ...rest } as const
}
