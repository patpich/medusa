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
import type { AdminGetInventoryItemsItemLocationLevelsParams } from "@medusajs/client-types"
import type { AdminGetInventoryItemsItemParams } from "@medusajs/client-types"
import type { AdminGetInventoryItemsParams } from "@medusajs/client-types"
import type { AdminInventoryItemsDeleteRes } from "@medusajs/client-types"
import type { AdminInventoryItemsListWithVariantsAndLocationLevelsRes } from "@medusajs/client-types"
import type { AdminInventoryItemsLocationLevelsRes } from "@medusajs/client-types"
import type { AdminInventoryItemsRes } from "@medusajs/client-types"
import type { AdminPostInventoryItemsInventoryItemParams } from "@medusajs/client-types"
import type { AdminPostInventoryItemsInventoryItemReq } from "@medusajs/client-types"
import type { AdminPostInventoryItemsItemLocationLevelsLevelParams } from "@medusajs/client-types"
import type { AdminPostInventoryItemsItemLocationLevelsLevelReq } from "@medusajs/client-types"
import type { AdminPostInventoryItemsItemLocationLevelsParams } from "@medusajs/client-types"
import type { AdminPostInventoryItemsItemLocationLevelsReq } from "@medusajs/client-types"
import type { AdminPostInventoryItemsParams } from "@medusajs/client-types"
import type { AdminPostInventoryItemsReq } from "@medusajs/client-types"

const QUERY_KEY = "inventoryItems"
export const adminInventoryItemKeys = queryKeysFactory(QUERY_KEY)

export const useAdminInventoryItems = (
  queryParams: AdminGetInventoryItemsParams = {},
  options: UseQueryOptionsWrapper<
    Awaited<AdminInventoryItemsListWithVariantsAndLocationLevelsRes>,
    Error
  > = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<
    Awaited<AdminInventoryItemsListWithVariantsAndLocationLevelsRes>,
    Error
  >(
    [QUERY_KEY, "list", queryParams],
    () => client.inventoryItems.list(queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminCreateInventoryItem = (
  queryParams: AdminPostInventoryItemsParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminInventoryItemsRes>,
    Error,
    AdminPostInventoryItemsReq
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
    Awaited<AdminInventoryItemsRes>,
    Error,
    AdminPostInventoryItemsReq
  >(
    [QUERY_KEY, "create", queryParams],
    (requestBody: AdminPostInventoryItemsReq) =>
      client.inventoryItems.create(requestBody, queryParams),
    options
  )
}

export const useAdminInventoryItem = (
  id: string,
  queryParams: AdminGetInventoryItemsItemParams = {},
  options: UseQueryOptionsWrapper<Awaited<AdminInventoryItemsRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminInventoryItemsRes>, Error>(
    [QUERY_KEY, "retrieve", id, queryParams],
    () => client.inventoryItems.retrieve(id, queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminUpdateInventoryItem = (
  id: string,
  queryParams: AdminPostInventoryItemsInventoryItemParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminInventoryItemsRes>,
    Error,
    AdminPostInventoryItemsInventoryItemReq
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
    Awaited<AdminInventoryItemsRes>,
    Error,
    AdminPostInventoryItemsInventoryItemReq
  >(
    [QUERY_KEY, "update", id, queryParams],
    (requestBody: AdminPostInventoryItemsInventoryItemReq) =>
      client.inventoryItems.update(id, requestBody, queryParams),
    options
  )
}

export const useAdminDeleteInventoryItem = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminInventoryItemsDeleteRes>,
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
  return useMutation<Awaited<AdminInventoryItemsDeleteRes>, Error, void>(
    [QUERY_KEY, "delete", id],
    () => client.inventoryItems.delete(id),
    options
  )
}

export const useAdminListLocationLevelsInventoryItem = (
  id: string,
  queryParams: AdminGetInventoryItemsItemLocationLevelsParams = {},
  options: UseQueryOptionsWrapper<
    Awaited<AdminInventoryItemsLocationLevelsRes>,
    Error
  > = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<
    Awaited<AdminInventoryItemsLocationLevelsRes>,
    Error
  >(
    [QUERY_KEY, "listLocationLevels", id, queryParams],
    () => client.inventoryItems.listLocationLevels(id, queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminCreateLocationLevelInventoryItem = (
  id: string,
  queryParams: AdminPostInventoryItemsItemLocationLevelsParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminInventoryItemsRes>,
    Error,
    AdminPostInventoryItemsItemLocationLevelsReq
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
    Awaited<AdminInventoryItemsRes>,
    Error,
    AdminPostInventoryItemsItemLocationLevelsReq
  >(
    [QUERY_KEY, "createLocationLevel", id, queryParams],
    (requestBody: AdminPostInventoryItemsItemLocationLevelsReq) =>
      client.inventoryItems.createLocationLevel(id, requestBody, queryParams),
    options
  )
}

export const useAdminUpdateLocationLevelInventoryItem = (
  id: string,
  queryParams: AdminPostInventoryItemsItemLocationLevelsLevelParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminInventoryItemsRes>,
    Error,
    { location_id: string } & AdminPostInventoryItemsItemLocationLevelsLevelReq
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
    Awaited<AdminInventoryItemsRes>,
    Error,
    { location_id: string } & AdminPostInventoryItemsItemLocationLevelsLevelReq
  >(
    [QUERY_KEY, "updateLocationLevel", id, queryParams],
    ({
      location_id: locationId,
      ...requestBody
    }: {
      location_id: string
    } & AdminPostInventoryItemsItemLocationLevelsLevelReq) =>
      client.inventoryItems.updateLocationLevel(
        id,
        locationId,
        requestBody,
        queryParams
      ),
    options
  )
}

export const useAdminDeleteLocationLevelInventoryItem = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminInventoryItemsRes>,
    Error,
    { location_id: string }
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
    Awaited<AdminInventoryItemsRes>,
    Error,
    { location_id: string }
  >(
    [QUERY_KEY, "deleteLocationLevel", id],
    ({ location_id: locationId }: { location_id: string }) =>
      client.inventoryItems.deleteLocationLevel(id, locationId),
    options
  )
}
