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
import type { StoreCollectionsListRes } from "@medusajs/client-types"
import type { StoreCollectionsRes } from "@medusajs/client-types"
import type { StoreGetCollectionsParams } from "@medusajs/client-types"

const QUERY_KEY = "collections"
export const collectionKeys = queryKeysFactory(QUERY_KEY)

export const useCollections = (
  queryParams: StoreGetCollectionsParams = {},
  options: UseQueryOptionsWrapper<Awaited<StoreCollectionsListRes>, Error> = {}
) => {
  const { client } = useMedusaStore()
  const { data, ...rest } = useQuery<Awaited<StoreCollectionsListRes>, Error>(
    [QUERY_KEY, "list", queryParams],
    () => client.collections.list(queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useCollection = (
  id: string,
  options: UseQueryOptionsWrapper<Awaited<StoreCollectionsRes>, Error> = {}
) => {
  const { client } = useMedusaStore()
  const { data, ...rest } = useQuery<Awaited<StoreCollectionsRes>, Error>(
    [QUERY_KEY, "retrieve", id],
    () => client.collections.retrieve(id),
    options
  )
  return { ...data, ...rest } as const
}
