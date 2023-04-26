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
import type { AdminAppsListRes } from "@medusajs/client-types"
import type { AdminAppsRes } from "@medusajs/client-types"
import type { AdminPostAppsReq } from "@medusajs/client-types"

const QUERY_KEY = "apps"
export const adminAppKeys = queryKeysFactory(QUERY_KEY)

export const useAdminApps = (
  options: UseQueryOptionsWrapper<Awaited<AdminAppsListRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminAppsListRes>, Error>(
    [QUERY_KEY, "list"],
    () => client.apps.list(),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminAuthorizeApp = (
  options: UseMutationOptionsWrapper<
    Awaited<AdminAppsRes>,
    Error,
    AdminPostAppsReq
  > = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<AdminAppsRes>, Error, AdminPostAppsReq>(
    [QUERY_KEY, "authorize"],
    (requestBody: AdminPostAppsReq) => client.apps.authorize(requestBody),
    options
  )
}
