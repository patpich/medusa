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
import type { AdminPostReturnReasonsReasonReq } from "@medusajs/client-types"
import type { AdminPostReturnReasonsReq } from "@medusajs/client-types"
import type { AdminReturnReasonsDeleteRes } from "@medusajs/client-types"
import type { AdminReturnReasonsListRes } from "@medusajs/client-types"
import type { AdminReturnReasonsRes } from "@medusajs/client-types"

const QUERY_KEY = "returnReasons"
export const adminReturnReasonKeys = queryKeysFactory(QUERY_KEY)

export const useAdminReturnReasons = (
  options: UseQueryOptionsWrapper<
    Awaited<AdminReturnReasonsListRes>,
    Error
  > = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminReturnReasonsListRes>, Error>(
    [QUERY_KEY, "list"],
    () => client.returnReasons.list(),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminCreateReturnReason = (
  options: UseMutationOptionsWrapper<
    Awaited<AdminReturnReasonsRes>,
    Error,
    AdminPostReturnReasonsReq
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
    Awaited<AdminReturnReasonsRes>,
    Error,
    AdminPostReturnReasonsReq
  >(
    [QUERY_KEY, "create"],
    (requestBody: AdminPostReturnReasonsReq) =>
      client.returnReasons.create(requestBody),
    options
  )
}

export const useAdminReturnReason = (
  id: string,
  options: UseQueryOptionsWrapper<Awaited<AdminReturnReasonsRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminReturnReasonsRes>, Error>(
    [QUERY_KEY, "retrieve", id],
    () => client.returnReasons.retrieve(id),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminUpdateReturnReason = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminReturnReasonsRes>,
    Error,
    AdminPostReturnReasonsReasonReq
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
    Awaited<AdminReturnReasonsRes>,
    Error,
    AdminPostReturnReasonsReasonReq
  >(
    [QUERY_KEY, "update", id],
    (requestBody: AdminPostReturnReasonsReasonReq) =>
      client.returnReasons.update(id, requestBody),
    options
  )
}

export const useAdminDeleteReturnReason = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminReturnReasonsDeleteRes>,
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
  return useMutation<Awaited<AdminReturnReasonsDeleteRes>, Error, void>(
    [QUERY_KEY, "delete", id],
    () => client.returnReasons.delete(id),
    options
  )
}
