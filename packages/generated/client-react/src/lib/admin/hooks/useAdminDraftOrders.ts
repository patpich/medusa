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
import type { AdminDraftOrdersDeleteRes } from "@medusajs/client-types"
import type { AdminDraftOrdersListRes } from "@medusajs/client-types"
import type { AdminDraftOrdersRes } from "@medusajs/client-types"
import type { AdminGetDraftOrdersParams } from "@medusajs/client-types"
import type { AdminPostDraftOrdersDraftOrderLineItemsItemReq } from "@medusajs/client-types"
import type { AdminPostDraftOrdersDraftOrderLineItemsReq } from "@medusajs/client-types"
import type { AdminPostDraftOrdersDraftOrderRegisterPaymentRes } from "@medusajs/client-types"
import type { AdminPostDraftOrdersDraftOrderReq } from "@medusajs/client-types"
import type { AdminPostDraftOrdersReq } from "@medusajs/client-types"

const QUERY_KEY = "draftOrders"
export const adminDraftOrderKeys = queryKeysFactory(QUERY_KEY)

export const useAdminDraftOrders = (
  queryParams: AdminGetDraftOrdersParams = {},
  options: UseQueryOptionsWrapper<Awaited<AdminDraftOrdersListRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminDraftOrdersListRes>, Error>(
    [QUERY_KEY, "list", queryParams],
    () => client.draftOrders.list(queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminCreateDraftOrder = (
  options: UseMutationOptionsWrapper<
    Awaited<AdminDraftOrdersRes>,
    Error,
    AdminPostDraftOrdersReq
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
    Awaited<AdminDraftOrdersRes>,
    Error,
    AdminPostDraftOrdersReq
  >(
    [QUERY_KEY, "create"],
    (requestBody: AdminPostDraftOrdersReq) =>
      client.draftOrders.create(requestBody),
    options
  )
}

export const useAdminDraftOrder = (
  id: string,
  options: UseQueryOptionsWrapper<Awaited<AdminDraftOrdersRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminDraftOrdersRes>, Error>(
    [QUERY_KEY, "retrieve", id],
    () => client.draftOrders.retrieve(id),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminUpdateDraftOrder = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminDraftOrdersRes>,
    Error,
    AdminPostDraftOrdersDraftOrderReq
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
    Awaited<AdminDraftOrdersRes>,
    Error,
    AdminPostDraftOrdersDraftOrderReq
  >(
    [QUERY_KEY, "update", id],
    (requestBody: AdminPostDraftOrdersDraftOrderReq) =>
      client.draftOrders.update(id, requestBody),
    options
  )
}

export const useAdminDeleteDraftOrder = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminDraftOrdersDeleteRes>,
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
  return useMutation<Awaited<AdminDraftOrdersDeleteRes>, Error, void>(
    [QUERY_KEY, "delete", id],
    () => client.draftOrders.delete(id),
    options
  )
}

export const useAdminAddLineItemDraftOrder = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminDraftOrdersRes>,
    Error,
    AdminPostDraftOrdersDraftOrderLineItemsReq
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
    Awaited<AdminDraftOrdersRes>,
    Error,
    AdminPostDraftOrdersDraftOrderLineItemsReq
  >(
    [QUERY_KEY, "addLineItem", id],
    (requestBody: AdminPostDraftOrdersDraftOrderLineItemsReq) =>
      client.draftOrders.addLineItem(id, requestBody),
    options
  )
}

export const useAdminUpdateLineItemDraftOrder = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminDraftOrdersRes>,
    Error,
    { line_id: string } & AdminPostDraftOrdersDraftOrderLineItemsItemReq
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
    Awaited<AdminDraftOrdersRes>,
    Error,
    { line_id: string } & AdminPostDraftOrdersDraftOrderLineItemsItemReq
  >(
    [QUERY_KEY, "updateLineItem", id],
    ({
      line_id: lineId,
      ...requestBody
    }: { line_id: string } & AdminPostDraftOrdersDraftOrderLineItemsItemReq) =>
      client.draftOrders.updateLineItem(id, lineId, requestBody),
    options
  )
}

export const useAdminRemoveLineItemDraftOrder = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminDraftOrdersRes>,
    Error,
    { line_id: string }
  > = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<AdminDraftOrdersRes>, Error, { line_id: string }>(
    [QUERY_KEY, "removeLineItem", id],
    ({ line_id: lineId }: { line_id: string }) =>
      client.draftOrders.removeLineItem(id, lineId),
    options
  )
}

export const useAdminMarkPaidDraftOrder = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminPostDraftOrdersDraftOrderRegisterPaymentRes>,
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
  return useMutation<
    Awaited<AdminPostDraftOrdersDraftOrderRegisterPaymentRes>,
    Error,
    void
  >([QUERY_KEY, "markPaid", id], () => client.draftOrders.markPaid(id), options)
}
