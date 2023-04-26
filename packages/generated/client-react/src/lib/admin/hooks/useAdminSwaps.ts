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
import type { AdminGetSwapsParams } from "@medusajs/client-types"
import type { AdminSwapsListRes } from "@medusajs/client-types"
import type { AdminSwapsRes } from "@medusajs/client-types"

const QUERY_KEY = "swaps"
export const adminSwapKeys = queryKeysFactory(QUERY_KEY)

export const useAdminSwaps = (
  queryParams: AdminGetSwapsParams = {},
  options: UseQueryOptionsWrapper<Awaited<AdminSwapsListRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminSwapsListRes>, Error>(
    [QUERY_KEY, "list", queryParams],
    () => client.swaps.list(queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminSwap = (
  id: string,
  options: UseQueryOptionsWrapper<Awaited<AdminSwapsRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminSwapsRes>, Error>(
    [QUERY_KEY, "retrieve", id],
    () => client.swaps.retrieve(id),
    options
  )
  return { ...data, ...rest } as const
}
