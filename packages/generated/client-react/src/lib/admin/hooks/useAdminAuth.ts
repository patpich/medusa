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
import type { AdminAuthRes } from "@medusajs/client-types"

const QUERY_KEY = "auth"
export const adminAuthKeys = queryKeysFactory(QUERY_KEY)

export const useAdminGetSessionAuth = (
  options: UseQueryOptionsWrapper<Awaited<AdminAuthRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminAuthRes>, Error>(
    [QUERY_KEY, "getSession"],
    () => client.auth.getSession(),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminCreateSessionAuth = (
  options: UseMutationOptionsWrapper<Awaited<AdminAuthRes>, Error, any> = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<AdminAuthRes>, Error, any>(
    [QUERY_KEY, "createSession"],
    (requestBody: any) => client.auth.createSession(requestBody),
    options
  )
}

export const useAdminDeleteSessionAuth = (
  options: UseMutationOptionsWrapper<Awaited<any>, Error, void> = {}
) => {
  const { client } = useMedusaAdmin()
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
