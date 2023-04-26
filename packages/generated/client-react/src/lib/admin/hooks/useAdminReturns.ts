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
import type { AdminGetReturnsParams } from "@medusajs/client-types"
import type { AdminPostReturnsReturnReceiveReq } from "@medusajs/client-types"
import type { AdminReturnsCancelRes } from "@medusajs/client-types"
import type { AdminReturnsListRes } from "@medusajs/client-types"
import type { AdminReturnsRes } from "@medusajs/client-types"

const QUERY_KEY = "returns"
export const adminReturnKeys = queryKeysFactory(QUERY_KEY)

export const useAdminReturns = (
  queryParams: AdminGetReturnsParams = {},
  options: UseQueryOptionsWrapper<Awaited<AdminReturnsListRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminReturnsListRes>, Error>(
    [QUERY_KEY, "list", queryParams],
    () => client.returns.list(queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminCancelReturn = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminReturnsCancelRes>,
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
  return useMutation<Awaited<AdminReturnsCancelRes>, Error, void>(
    [QUERY_KEY, "cancel", id],
    () => client.returns.cancel(id),
    options
  )
}

export const useAdminReceiveReturn = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminReturnsRes>,
    Error,
    AdminPostReturnsReturnReceiveReq
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
    Awaited<AdminReturnsRes>,
    Error,
    AdminPostReturnsReturnReceiveReq
  >(
    [QUERY_KEY, "receive", id],
    (requestBody: AdminPostReturnsReturnReceiveReq) =>
      client.returns.receive(id, requestBody),
    options
  )
}
