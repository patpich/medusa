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
import type { AdminExtendedStoresRes } from "@medusajs/client-types"
import type { AdminPaymentProvidersList } from "@medusajs/client-types"
import type { AdminPostStoreReq } from "@medusajs/client-types"
import type { AdminStoresRes } from "@medusajs/client-types"
import type { AdminTaxProvidersList } from "@medusajs/client-types"

const QUERY_KEY = "store"
export const adminStoreKeys = queryKeysFactory(QUERY_KEY)

export const useAdminStore = (
  options: UseQueryOptionsWrapper<Awaited<AdminExtendedStoresRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminExtendedStoresRes>, Error>(
    [QUERY_KEY, "retrieve"],
    () => client.store.retrieve(),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminUpdateStore = (
  options: UseMutationOptionsWrapper<
    Awaited<AdminStoresRes>,
    Error,
    AdminPostStoreReq
  > = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<AdminStoresRes>, Error, AdminPostStoreReq>(
    [QUERY_KEY, "update"],
    (requestBody: AdminPostStoreReq) => client.store.update(requestBody),
    options
  )
}

export const useAdminAddCurrencyStore = (
  code: string,
  options: UseMutationOptionsWrapper<Awaited<AdminStoresRes>, Error, void> = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<AdminStoresRes>, Error, void>(
    [QUERY_KEY, "addCurrency", code],
    () => client.store.addCurrency(code),
    options
  )
}

export const useAdminDeleteCurrencyStore = (
  code: string,
  options: UseMutationOptionsWrapper<Awaited<AdminStoresRes>, Error, void> = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<AdminStoresRes>, Error, void>(
    [QUERY_KEY, "deleteCurrency", code],
    () => client.store.deleteCurrency(code),
    options
  )
}

export const useAdminListPaymentProvidersStore = (
  options: UseQueryOptionsWrapper<
    Awaited<AdminPaymentProvidersList>,
    Error
  > = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminPaymentProvidersList>, Error>(
    [QUERY_KEY, "listPaymentProviders"],
    () => client.store.listPaymentProviders(),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminListTaxProvidersStore = (
  options: UseQueryOptionsWrapper<Awaited<AdminTaxProvidersList>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminTaxProvidersList>, Error>(
    [QUERY_KEY, "listTaxProviders"],
    () => client.store.listTaxProviders(),
    options
  )
  return { ...data, ...rest } as const
}
