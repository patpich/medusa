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
import type { AdminGetPaymentCollectionsParams } from "@medusajs/client-types"
import type { AdminPaymentCollectionDeleteRes } from "@medusajs/client-types"
import type { AdminPaymentCollectionsRes } from "@medusajs/client-types"
import type { AdminUpdatePaymentCollectionsReq } from "@medusajs/client-types"

const QUERY_KEY = "paymentCollections"
export const adminPaymentCollectionKeys = queryKeysFactory(QUERY_KEY)

export const useAdminPaymentCollection = (
  id: string,
  queryParams: AdminGetPaymentCollectionsParams = {},
  options: UseQueryOptionsWrapper<
    Awaited<AdminPaymentCollectionsRes>,
    Error
  > = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<
    Awaited<AdminPaymentCollectionsRes>,
    Error
  >(
    [QUERY_KEY, "retrieve", id, queryParams],
    () => client.paymentCollections.retrieve(id, queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminUpdatePaymentCollection = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminPaymentCollectionsRes>,
    Error,
    AdminUpdatePaymentCollectionsReq
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
    Awaited<AdminPaymentCollectionsRes>,
    Error,
    AdminUpdatePaymentCollectionsReq
  >(
    [QUERY_KEY, "update", id],
    (requestBody: AdminUpdatePaymentCollectionsReq) =>
      client.paymentCollections.update(id, requestBody),
    options
  )
}

export const useAdminDeletePaymentCollection = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminPaymentCollectionDeleteRes>,
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
  return useMutation<Awaited<AdminPaymentCollectionDeleteRes>, Error, void>(
    [QUERY_KEY, "delete", id],
    () => client.paymentCollections.delete(id),
    options
  )
}

export const useAdminMarkAsAuthorizedPaymentCollection = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminPaymentCollectionsRes>,
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
  return useMutation<Awaited<AdminPaymentCollectionsRes>, Error, void>(
    [QUERY_KEY, "markAsAuthorized", id],
    () => client.paymentCollections.markAsAuthorized(id),
    options
  )
}
