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
import type { AdminDeleteSalesChannelsChannelProductsBatchReq } from "@medusajs/client-types"
import type { AdminDeleteSalesChannelsChannelStockLocationsReq } from "@medusajs/client-types"
import type { AdminGetSalesChannelsParams } from "@medusajs/client-types"
import type { AdminPostSalesChannelsChannelProductsBatchReq } from "@medusajs/client-types"
import type { AdminPostSalesChannelsChannelStockLocationsReq } from "@medusajs/client-types"
import type { AdminPostSalesChannelsReq } from "@medusajs/client-types"
import type { AdminPostSalesChannelsSalesChannelReq } from "@medusajs/client-types"
import type { AdminSalesChannelsDeleteLocationRes } from "@medusajs/client-types"
import type { AdminSalesChannelsDeleteRes } from "@medusajs/client-types"
import type { AdminSalesChannelsListRes } from "@medusajs/client-types"
import type { AdminSalesChannelsRes } from "@medusajs/client-types"

const QUERY_KEY = "salesChannels"
export const adminSalesChannelKeys = queryKeysFactory(QUERY_KEY)

export const useAdminSalesChannels = (
  queryParams: AdminGetSalesChannelsParams = {},
  options: UseQueryOptionsWrapper<
    Awaited<AdminSalesChannelsListRes>,
    Error
  > = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminSalesChannelsListRes>, Error>(
    [QUERY_KEY, "list", queryParams],
    () => client.salesChannels.list(queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminCreateSalesChannel = (
  options: UseMutationOptionsWrapper<
    Awaited<AdminSalesChannelsRes>,
    Error,
    AdminPostSalesChannelsReq
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
    Awaited<AdminSalesChannelsRes>,
    Error,
    AdminPostSalesChannelsReq
  >(
    [QUERY_KEY, "create"],
    (requestBody: AdminPostSalesChannelsReq) =>
      client.salesChannels.create(requestBody),
    options
  )
}

export const useAdminSalesChannel = (
  id: string,
  options: UseQueryOptionsWrapper<Awaited<AdminSalesChannelsRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminSalesChannelsRes>, Error>(
    [QUERY_KEY, "retrieve", id],
    () => client.salesChannels.retrieve(id),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminUpdateSalesChannel = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminSalesChannelsRes>,
    Error,
    AdminPostSalesChannelsSalesChannelReq
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
    Awaited<AdminSalesChannelsRes>,
    Error,
    AdminPostSalesChannelsSalesChannelReq
  >(
    [QUERY_KEY, "update", id],
    (requestBody: AdminPostSalesChannelsSalesChannelReq) =>
      client.salesChannels.update(id, requestBody),
    options
  )
}

export const useAdminDeleteSalesChannel = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminSalesChannelsDeleteRes>,
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
  return useMutation<Awaited<AdminSalesChannelsDeleteRes>, Error, void>(
    [QUERY_KEY, "delete", id],
    () => client.salesChannels.delete(id),
    options
  )
}

export const useAdminAddProductsSalesChannel = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminSalesChannelsRes>,
    Error,
    AdminPostSalesChannelsChannelProductsBatchReq
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
    Awaited<AdminSalesChannelsRes>,
    Error,
    AdminPostSalesChannelsChannelProductsBatchReq
  >(
    [QUERY_KEY, "addProducts", id],
    (requestBody: AdminPostSalesChannelsChannelProductsBatchReq) =>
      client.salesChannels.addProducts(id, requestBody),
    options
  )
}

export const useAdminRemoveProductsSalesChannel = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminSalesChannelsRes>,
    Error,
    AdminDeleteSalesChannelsChannelProductsBatchReq
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
    Awaited<AdminSalesChannelsRes>,
    Error,
    AdminDeleteSalesChannelsChannelProductsBatchReq
  >(
    [QUERY_KEY, "removeProducts", id],
    (requestBody: AdminDeleteSalesChannelsChannelProductsBatchReq) =>
      client.salesChannels.removeProducts(id, requestBody),
    options
  )
}

export const useAdminAddLocationSalesChannel = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminSalesChannelsRes>,
    Error,
    AdminPostSalesChannelsChannelStockLocationsReq
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
    Awaited<AdminSalesChannelsRes>,
    Error,
    AdminPostSalesChannelsChannelStockLocationsReq
  >(
    [QUERY_KEY, "addLocation", id],
    (requestBody: AdminPostSalesChannelsChannelStockLocationsReq) =>
      client.salesChannels.addLocation(id, requestBody),
    options
  )
}

export const useAdminRemoveLocationSalesChannel = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminSalesChannelsDeleteLocationRes>,
    Error,
    AdminDeleteSalesChannelsChannelStockLocationsReq
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
    Awaited<AdminSalesChannelsDeleteLocationRes>,
    Error,
    AdminDeleteSalesChannelsChannelStockLocationsReq
  >(
    [QUERY_KEY, "removeLocation", id],
    (requestBody: AdminDeleteSalesChannelsChannelStockLocationsReq) =>
      client.salesChannels.removeLocation(id, requestBody),
    options
  )
}
