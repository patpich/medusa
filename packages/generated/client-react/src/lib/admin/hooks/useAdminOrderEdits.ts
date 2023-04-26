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
import type { AdminOrderEditDeleteRes } from "@medusajs/client-types"
import type { AdminOrderEditItemChangeDeleteRes } from "@medusajs/client-types"
import type { AdminOrderEditsListRes } from "@medusajs/client-types"
import type { AdminOrderEditsRes } from "@medusajs/client-types"
import type { AdminPostOrderEditsEditLineItemsLineItemReq } from "@medusajs/client-types"
import type { AdminPostOrderEditsEditLineItemsReq } from "@medusajs/client-types"
import type { AdminPostOrderEditsOrderEditReq } from "@medusajs/client-types"
import type { AdminPostOrderEditsReq } from "@medusajs/client-types"
import type { GetOrderEditsOrderEditParams } from "@medusajs/client-types"
import type { GetOrderEditsParams } from "@medusajs/client-types"

const QUERY_KEY = "orderEdits"
export const adminOrderEditKeys = queryKeysFactory(QUERY_KEY)

export const useAdminOrderEdits = (
  queryParams: GetOrderEditsParams = {},
  options: UseQueryOptionsWrapper<Awaited<AdminOrderEditsListRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminOrderEditsListRes>, Error>(
    [QUERY_KEY, "list", queryParams],
    () => client.orderEdits.list(queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminCreateOrderEdit = (
  options: UseMutationOptionsWrapper<
    Awaited<AdminOrderEditsRes>,
    Error,
    AdminPostOrderEditsReq
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
    Awaited<AdminOrderEditsRes>,
    Error,
    AdminPostOrderEditsReq
  >(
    [QUERY_KEY, "create"],
    (requestBody: AdminPostOrderEditsReq) =>
      client.orderEdits.create(requestBody),
    options
  )
}

export const useAdminOrderEdit = (
  id: string,
  queryParams: GetOrderEditsOrderEditParams = {},
  options: UseQueryOptionsWrapper<Awaited<AdminOrderEditsRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminOrderEditsRes>, Error>(
    [QUERY_KEY, "retrieve", id, queryParams],
    () => client.orderEdits.retrieve(id, queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminUpdateOrderEdit = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminOrderEditsRes>,
    Error,
    AdminPostOrderEditsOrderEditReq
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
    Awaited<AdminOrderEditsRes>,
    Error,
    AdminPostOrderEditsOrderEditReq
  >(
    [QUERY_KEY, "update", id],
    (requestBody: AdminPostOrderEditsOrderEditReq) =>
      client.orderEdits.update(id, requestBody),
    options
  )
}

export const useAdminDeleteOrderEdit = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminOrderEditDeleteRes>,
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
  return useMutation<Awaited<AdminOrderEditDeleteRes>, Error, void>(
    [QUERY_KEY, "delete", id],
    () => client.orderEdits.delete(id),
    options
  )
}

export const useAdminCancelOrderEdit = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminOrderEditsRes>,
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
  return useMutation<Awaited<AdminOrderEditsRes>, Error, void>(
    [QUERY_KEY, "cancel", id],
    () => client.orderEdits.cancel(id),
    options
  )
}

export const useAdminDeleteItemChangeOrderEdit = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminOrderEditItemChangeDeleteRes>,
    Error,
    { change_id: string }
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
    Awaited<AdminOrderEditItemChangeDeleteRes>,
    Error,
    { change_id: string }
  >(
    [QUERY_KEY, "deleteItemChange", id],
    ({ change_id: changeId }: { change_id: string }) =>
      client.orderEdits.deleteItemChange(id, changeId),
    options
  )
}

export const useAdminConfirmOrderEdit = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminOrderEditsRes>,
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
  return useMutation<Awaited<AdminOrderEditsRes>, Error, void>(
    [QUERY_KEY, "confirm", id],
    () => client.orderEdits.confirm(id),
    options
  )
}

export const useAdminAddLineItemOrderEdit = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminOrderEditsRes>,
    Error,
    AdminPostOrderEditsEditLineItemsReq
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
    Awaited<AdminOrderEditsRes>,
    Error,
    AdminPostOrderEditsEditLineItemsReq
  >(
    [QUERY_KEY, "addLineItem", id],
    (requestBody: AdminPostOrderEditsEditLineItemsReq) =>
      client.orderEdits.addLineItem(id, requestBody),
    options
  )
}

export const useAdminUpdateLineItemOrderEdit = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminOrderEditsRes>,
    Error,
    { item_id: string } & AdminPostOrderEditsEditLineItemsLineItemReq
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
    Awaited<AdminOrderEditsRes>,
    Error,
    { item_id: string } & AdminPostOrderEditsEditLineItemsLineItemReq
  >(
    [QUERY_KEY, "updateLineItem", id],
    ({
      item_id: itemId,
      ...requestBody
    }: { item_id: string } & AdminPostOrderEditsEditLineItemsLineItemReq) =>
      client.orderEdits.updateLineItem(id, itemId, requestBody),
    options
  )
}

export const useAdminRemoveLineItemOrderEdit = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminOrderEditsRes>,
    Error,
    { item_id: string }
  > = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<AdminOrderEditsRes>, Error, { item_id: string }>(
    [QUERY_KEY, "removeLineItem", id],
    ({ item_id: itemId }: { item_id: string }) =>
      client.orderEdits.removeLineItem(id, itemId),
    options
  )
}

export const useAdminRequestConfirmationOrderEdit = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminOrderEditsRes>,
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
  return useMutation<Awaited<AdminOrderEditsRes>, Error, void>(
    [QUERY_KEY, "requestConfirmation", id],
    () => client.orderEdits.requestConfirmation(id),
    options
  )
}
