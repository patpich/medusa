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
import type { AdminGetStockLocationsLocationParams } from "@medusajs/client-types"
import type { AdminGetStockLocationsParams } from "@medusajs/client-types"
import type { AdminPostStockLocationsLocationReq } from "@medusajs/client-types"
import type { AdminPostStockLocationsReq } from "@medusajs/client-types"
import type { AdminStockLocationsDeleteRes } from "@medusajs/client-types"
import type { AdminStockLocationsListRes } from "@medusajs/client-types"
import type { AdminStockLocationsRes } from "@medusajs/client-types"

const QUERY_KEY = "stockLocations"
export const adminStockLocationKeys = queryKeysFactory(QUERY_KEY)

export const useAdminStockLocations = (
  queryParams: AdminGetStockLocationsParams = {},
  options: UseQueryOptionsWrapper<
    Awaited<AdminStockLocationsListRes>,
    Error
  > = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<
    Awaited<AdminStockLocationsListRes>,
    Error
  >(
    [QUERY_KEY, "list", queryParams],
    () => client.stockLocations.list(queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminCreateStockLocation = (
  queryParams: {
    /**
     * Comma separated list of relations to include in the results.
     */
    expand?: string
    /**
     * Comma separated list of fields to include in the results.
     */
    fields?: string
  } = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminStockLocationsRes>,
    Error,
    AdminPostStockLocationsReq
  > = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<
    Awaited<AdminStockLocationsRes>,
    Error,
    AdminPostStockLocationsReq
  >(
    [QUERY_KEY, "create", queryParams],
    (requestBody: AdminPostStockLocationsReq) =>
      client.stockLocations.create(requestBody, queryParams),
    options
  )
}

export const useAdminStockLocation = (
  id: string,
  queryParams: AdminGetStockLocationsLocationParams = {},
  options: UseQueryOptionsWrapper<Awaited<AdminStockLocationsRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminStockLocationsRes>, Error>(
    [QUERY_KEY, "retrieve", id, queryParams],
    () => client.stockLocations.retrieve(id, queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminUpdateStockLocation = (
  id: string,
  queryParams: {
    /**
     * Comma separated list of relations to include in the results.
     */
    expand?: string
    /**
     * Comma separated list of fields to include in the results.
     */
    fields?: string
  } = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminStockLocationsRes>,
    Error,
    AdminPostStockLocationsLocationReq
  > = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<
    Awaited<AdminStockLocationsRes>,
    Error,
    AdminPostStockLocationsLocationReq
  >(
    [QUERY_KEY, "update", id, queryParams],
    (requestBody: AdminPostStockLocationsLocationReq) =>
      client.stockLocations.update(id, requestBody, queryParams),
    options
  )
}

export const useAdminDeleteStockLocation = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminStockLocationsDeleteRes>,
    Error,
    void
  > = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<AdminStockLocationsDeleteRes>, Error, void>(
    [QUERY_KEY, "delete", id],
    () => client.stockLocations.delete(id),
    options
  )
}
