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
import type { StoreOrderEditsRes } from "@medusajs/client-types"
import type { StorePostOrderEditsOrderEditDecline } from "@medusajs/client-types"

const QUERY_KEY = "orderEdits"
export const orderEditKeys = queryKeysFactory(QUERY_KEY)

export const useOrderEdit = (
  id: string,
  options: UseQueryOptionsWrapper<Awaited<StoreOrderEditsRes>, Error> = {}
) => {
  const { client } = useMedusaStore()
  const { data, ...rest } = useQuery<Awaited<StoreOrderEditsRes>, Error>(
    [QUERY_KEY, "retrieve", id],
    () => client.orderEdits.retrieve(id),
    options
  )
  return { ...data, ...rest } as const
}

export const useCompleteOrderEdit = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<StoreOrderEditsRes>,
    Error,
    void
  > = {}
) => {
  const { client } = useMedusaStore()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<StoreOrderEditsRes>, Error, void>(
    [QUERY_KEY, "complete", id],
    () => client.orderEdits.complete(id),
    options
  )
}

export const useDeclineOrderEdit = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<StoreOrderEditsRes>,
    Error,
    StorePostOrderEditsOrderEditDecline
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
    Awaited<StoreOrderEditsRes>,
    Error,
    StorePostOrderEditsOrderEditDecline
  >(
    [QUERY_KEY, "decline", id],
    (requestBody: StorePostOrderEditsOrderEditDecline) =>
      client.orderEdits.decline(id, requestBody),
    options
  )
}
