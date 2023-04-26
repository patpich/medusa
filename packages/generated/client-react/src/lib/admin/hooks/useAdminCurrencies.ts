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
import type { AdminCurrenciesListRes } from "@medusajs/client-types"
import type { AdminCurrenciesRes } from "@medusajs/client-types"
import type { AdminGetCurrenciesParams } from "@medusajs/client-types"
import type { AdminPostCurrenciesCurrencyReq } from "@medusajs/client-types"

const QUERY_KEY = "currencies"
export const adminCurrencyKeys = queryKeysFactory(QUERY_KEY)

export const useAdminCurrencies = (
  queryParams: AdminGetCurrenciesParams = {},
  options: UseQueryOptionsWrapper<Awaited<AdminCurrenciesListRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminCurrenciesListRes>, Error>(
    [QUERY_KEY, "list", queryParams],
    () => client.currencies.list(queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminUpdateCurrency = (
  code: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminCurrenciesRes>,
    Error,
    AdminPostCurrenciesCurrencyReq
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
    Awaited<AdminCurrenciesRes>,
    Error,
    AdminPostCurrenciesCurrencyReq
  >(
    [QUERY_KEY, "update", code],
    (requestBody: AdminPostCurrenciesCurrencyReq) =>
      client.currencies.update(code, requestBody),
    options
  )
}
