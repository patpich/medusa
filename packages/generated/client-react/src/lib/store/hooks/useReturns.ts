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
import type { StorePostReturnsReq } from "@medusajs/client-types"
import type { StoreReturnsRes } from "@medusajs/client-types"

const QUERY_KEY = "returns"
export const returnKeys = queryKeysFactory(QUERY_KEY)

export const useCreateReturn = (
  options: UseMutationOptionsWrapper<
    Awaited<StoreReturnsRes>,
    Error,
    StorePostReturnsReq
  > = {}
) => {
  const { client } = useMedusaStore()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<StoreReturnsRes>, Error, StorePostReturnsReq>(
    [QUERY_KEY, "create"],
    (requestBody: StorePostReturnsReq) => client.returns.create(requestBody),
    options
  )
}
