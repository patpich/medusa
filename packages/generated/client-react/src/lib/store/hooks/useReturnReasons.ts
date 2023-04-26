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
import type { StoreReturnReasonsListRes } from "@medusajs/client-types"
import type { StoreReturnReasonsRes } from "@medusajs/client-types"

const QUERY_KEY = "returnReasons"
export const returnReasonKeys = queryKeysFactory(QUERY_KEY)

export const useReturnReasons = (
  options: UseQueryOptionsWrapper<
    Awaited<StoreReturnReasonsListRes>,
    Error
  > = {}
) => {
  const { client } = useMedusaStore()
  const { data, ...rest } = useQuery<Awaited<StoreReturnReasonsListRes>, Error>(
    [QUERY_KEY, "list"],
    () => client.returnReasons.list(),
    options
  )
  return { ...data, ...rest } as const
}

export const useReturnReason = (
  id: string,
  options: UseQueryOptionsWrapper<Awaited<StoreReturnReasonsRes>, Error> = {}
) => {
  const { client } = useMedusaStore()
  const { data, ...rest } = useQuery<Awaited<StoreReturnReasonsRes>, Error>(
    [QUERY_KEY, "retrieve", id],
    () => client.returnReasons.retrieve(id),
    options
  )
  return { ...data, ...rest } as const
}
