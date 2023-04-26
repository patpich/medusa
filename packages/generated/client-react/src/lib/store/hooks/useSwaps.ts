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
import type { StorePostSwapsReq } from "@medusajs/client-types"
import type { StoreSwapsRes } from "@medusajs/client-types"

const QUERY_KEY = "swaps"
export const swapKeys = queryKeysFactory(QUERY_KEY)

export const useCreateSwap = (
  options: UseMutationOptionsWrapper<
    Awaited<StoreSwapsRes>,
    Error,
    StorePostSwapsReq
  > = {}
) => {
  const { client } = useMedusaStore()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<StoreSwapsRes>, Error, StorePostSwapsReq>(
    [QUERY_KEY, "create"],
    (requestBody: StorePostSwapsReq) => client.swaps.create(requestBody),
    options
  )
}

export const useRetrieveByCartIdSwap = (
  cartId: string,
  options: UseQueryOptionsWrapper<Awaited<StoreSwapsRes>, Error> = {}
) => {
  const { client } = useMedusaStore()
  const { data, ...rest } = useQuery<Awaited<StoreSwapsRes>, Error>(
    [QUERY_KEY, "retrieveByCartId", cartId],
    () => client.swaps.retrieveByCartId(cartId),
    options
  )
  return { ...data, ...rest } as const
}
