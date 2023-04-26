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
import type { StoreAuthRes } from "@medusajs/client-types"
import type { StoreGetAuthEmailRes } from "@medusajs/client-types"
import type { StorePostAuthReq } from "@medusajs/client-types"

const QUERY_KEY = "auth"
export const authKeys = queryKeysFactory(QUERY_KEY)

export const useGetSessionAuth = (
  options: UseQueryOptionsWrapper<Awaited<StoreAuthRes>, Error> = {}
) => {
  const { client } = useMedusaStore()
  const { data, ...rest } = useQuery<Awaited<StoreAuthRes>, Error>(
    [QUERY_KEY, "getSession"],
    () => client.auth.getSession(),
    options
  )
  return { ...data, ...rest } as const
}

export const useAuthenticateAuth = (
  options: UseMutationOptionsWrapper<
    Awaited<StoreAuthRes>,
    Error,
    StorePostAuthReq
  > = {}
) => {
  const { client } = useMedusaStore()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<StoreAuthRes>, Error, StorePostAuthReq>(
    [QUERY_KEY, "authenticate"],
    (requestBody: StorePostAuthReq) => client.auth.authenticate(requestBody),
    options
  )
}

export const useDeleteSessionAuth = (
  options: UseMutationOptionsWrapper<Awaited<any>, Error, void> = {}
) => {
  const { client } = useMedusaStore()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<any>, Error, void>(
    [QUERY_KEY, "deleteSession"],
    () => client.auth.deleteSession(),
    options
  )
}

export const useExistsAuth = (
  email: string,
  options: UseQueryOptionsWrapper<Awaited<StoreGetAuthEmailRes>, Error> = {}
) => {
  const { client } = useMedusaStore()
  const { data, ...rest } = useQuery<Awaited<StoreGetAuthEmailRes>, Error>(
    [QUERY_KEY, "exists", email],
    () => client.auth.exists(email),
    options
  )
  return { ...data, ...rest } as const
}
