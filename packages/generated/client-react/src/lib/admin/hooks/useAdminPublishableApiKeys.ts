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
import type { AdminDeletePublishableApiKeySalesChannelsBatchReq } from "@medusajs/client-types"
import type { AdminPostPublishableApiKeySalesChannelsBatchReq } from "@medusajs/client-types"
import type { AdminPostPublishableApiKeysPublishableApiKeyReq } from "@medusajs/client-types"
import type { AdminPostPublishableApiKeysReq } from "@medusajs/client-types"
import type { AdminPublishableApiKeyDeleteRes } from "@medusajs/client-types"
import type { AdminPublishableApiKeysListRes } from "@medusajs/client-types"
import type { AdminPublishableApiKeysListSalesChannelsRes } from "@medusajs/client-types"
import type { AdminPublishableApiKeysRes } from "@medusajs/client-types"
import type { GetPublishableApiKeySalesChannelsParams } from "@medusajs/client-types"
import type { GetPublishableApiKeysParams } from "@medusajs/client-types"

const QUERY_KEY = "publishableApiKeys"
export const adminPublishableApiKeyKeys = queryKeysFactory(QUERY_KEY)

export const useAdminUpdatePublishableApiKey = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminPublishableApiKeysRes>,
    Error,
    AdminPostPublishableApiKeysPublishableApiKeyReq
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
    Awaited<AdminPublishableApiKeysRes>,
    Error,
    AdminPostPublishableApiKeysPublishableApiKeyReq
  >(
    [QUERY_KEY, "update", id],
    (requestBody: AdminPostPublishableApiKeysPublishableApiKeyReq) =>
      client.publishableApiKeys.update(id, requestBody),
    options
  )
}

export const useAdminPublishableApiKeys = (
  queryParams: GetPublishableApiKeysParams = {},
  options: UseQueryOptionsWrapper<
    Awaited<AdminPublishableApiKeysListRes>,
    Error
  > = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<
    Awaited<AdminPublishableApiKeysListRes>,
    Error
  >(
    [QUERY_KEY, "list", queryParams],
    () => client.publishableApiKeys.list(queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminCreatePublishableApiKey = (
  options: UseMutationOptionsWrapper<
    Awaited<AdminPublishableApiKeysRes>,
    Error,
    AdminPostPublishableApiKeysReq
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
    Awaited<AdminPublishableApiKeysRes>,
    Error,
    AdminPostPublishableApiKeysReq
  >(
    [QUERY_KEY, "create"],
    (requestBody: AdminPostPublishableApiKeysReq) =>
      client.publishableApiKeys.create(requestBody),
    options
  )
}

export const useAdminPublishableApiKey = (
  id: string,
  options: UseQueryOptionsWrapper<
    Awaited<AdminPublishableApiKeysRes>,
    Error
  > = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<
    Awaited<AdminPublishableApiKeysRes>,
    Error
  >(
    [QUERY_KEY, "retrieve", id],
    () => client.publishableApiKeys.retrieve(id),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminDeletePublishableApiKey = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminPublishableApiKeyDeleteRes>,
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
  return useMutation<Awaited<AdminPublishableApiKeyDeleteRes>, Error, void>(
    [QUERY_KEY, "delete", id],
    () => client.publishableApiKeys.delete(id),
    options
  )
}

export const useAdminRevokePublishableApiKey = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminPublishableApiKeysRes>,
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
  return useMutation<Awaited<AdminPublishableApiKeysRes>, Error, void>(
    [QUERY_KEY, "revoke", id],
    () => client.publishableApiKeys.revoke(id),
    options
  )
}

export const useAdminListSalesChannelsPublishableApiKey = (
  id: string,
  queryParams: GetPublishableApiKeySalesChannelsParams = {},
  options: UseQueryOptionsWrapper<
    Awaited<AdminPublishableApiKeysListSalesChannelsRes>,
    Error
  > = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<
    Awaited<AdminPublishableApiKeysListSalesChannelsRes>,
    Error
  >(
    [QUERY_KEY, "listSalesChannels", id, queryParams],
    () => client.publishableApiKeys.listSalesChannels(id, queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminAddSalesChannelsBatchPublishableApiKey = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminPublishableApiKeysRes>,
    Error,
    AdminPostPublishableApiKeySalesChannelsBatchReq
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
    Awaited<AdminPublishableApiKeysRes>,
    Error,
    AdminPostPublishableApiKeySalesChannelsBatchReq
  >(
    [QUERY_KEY, "addSalesChannelsBatch", id],
    (requestBody: AdminPostPublishableApiKeySalesChannelsBatchReq) =>
      client.publishableApiKeys.addSalesChannelsBatch(id, requestBody),
    options
  )
}

export const useAdminDeleteSalesChannelsBatchPublishableApiKey = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminPublishableApiKeysRes>,
    Error,
    AdminDeletePublishableApiKeySalesChannelsBatchReq
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
    Awaited<AdminPublishableApiKeysRes>,
    Error,
    AdminDeletePublishableApiKeySalesChannelsBatchReq
  >(
    [QUERY_KEY, "deleteSalesChannelsBatch", id],
    (requestBody: AdminDeletePublishableApiKeySalesChannelsBatchReq) =>
      client.publishableApiKeys.deleteSalesChannelsBatch(id, requestBody),
    options
  )
}
