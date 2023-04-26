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
import type { StoreGetPaymentCollectionsParams } from "@medusajs/client-types"
import type { StorePaymentCollectionSessionsReq } from "@medusajs/client-types"
import type { StorePaymentCollectionsRes } from "@medusajs/client-types"
import type { StorePaymentCollectionsSessionRes } from "@medusajs/client-types"
import type { StorePostPaymentCollectionsBatchSessionsAuthorizeReq } from "@medusajs/client-types"
import type { StorePostPaymentCollectionsBatchSessionsReq } from "@medusajs/client-types"

const QUERY_KEY = "paymentCollections"
export const paymentCollectionKeys = queryKeysFactory(QUERY_KEY)

export const usePaymentCollection = (
  id: string,
  queryParams: StoreGetPaymentCollectionsParams = {},
  options: UseQueryOptionsWrapper<
    Awaited<StorePaymentCollectionsRes>,
    Error
  > = {}
) => {
  const { client } = useMedusaStore()
  const { data, ...rest } = useQuery<
    Awaited<StorePaymentCollectionsRes>,
    Error
  >(
    [QUERY_KEY, "retrieve", id, queryParams],
    () => client.paymentCollections.retrieve(id, queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useManagePaymentSessionPaymentCollection = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<StorePaymentCollectionsRes>,
    Error,
    StorePaymentCollectionSessionsReq
  > = {}
) => {
  const { client } = useMedusaStore()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<
    Awaited<StorePaymentCollectionsRes>,
    Error,
    StorePaymentCollectionSessionsReq
  >(
    [QUERY_KEY, "managePaymentSession", id],
    (requestBody: StorePaymentCollectionSessionsReq) =>
      client.paymentCollections.managePaymentSession(id, requestBody),
    options
  )
}

export const useManagePaymentSessionsBatchPaymentCollection = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<StorePaymentCollectionsRes>,
    Error,
    StorePostPaymentCollectionsBatchSessionsReq
  > = {}
) => {
  const { client } = useMedusaStore()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<
    Awaited<StorePaymentCollectionsRes>,
    Error,
    StorePostPaymentCollectionsBatchSessionsReq
  >(
    [QUERY_KEY, "managePaymentSessionsBatch", id],
    (requestBody: StorePostPaymentCollectionsBatchSessionsReq) =>
      client.paymentCollections.managePaymentSessionsBatch(id, requestBody),
    options
  )
}

export const useAuthorizePaymentSessionsBatchPaymentCollection = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<StorePaymentCollectionsRes>,
    Error,
    StorePostPaymentCollectionsBatchSessionsAuthorizeReq
  > = {}
) => {
  const { client } = useMedusaStore()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<
    Awaited<StorePaymentCollectionsRes>,
    Error,
    StorePostPaymentCollectionsBatchSessionsAuthorizeReq
  >(
    [QUERY_KEY, "authorizePaymentSessionsBatch", id],
    (requestBody: StorePostPaymentCollectionsBatchSessionsAuthorizeReq) =>
      client.paymentCollections.authorizePaymentSessionsBatch(id, requestBody),
    options
  )
}

export const useRefreshPaymentSessionPaymentCollection = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<StorePaymentCollectionsSessionRes>,
    Error,
    { session_id: string }
  > = {}
) => {
  const { client } = useMedusaStore()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<
    Awaited<StorePaymentCollectionsSessionRes>,
    Error,
    { session_id: string }
  >(
    [QUERY_KEY, "refreshPaymentSession", id],
    ({ session_id: sessionId }: { session_id: string }) =>
      client.paymentCollections.refreshPaymentSession(id, sessionId),
    options
  )
}

export const useAuthorizePaymentSessionPaymentCollection = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<StorePaymentCollectionsSessionRes>,
    Error,
    { session_id: string }
  > = {}
) => {
  const { client } = useMedusaStore()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<
    Awaited<StorePaymentCollectionsSessionRes>,
    Error,
    { session_id: string }
  >(
    [QUERY_KEY, "authorizePaymentSession", id],
    ({ session_id: sessionId }: { session_id: string }) =>
      client.paymentCollections.authorizePaymentSession(id, sessionId),
    options
  )
}
