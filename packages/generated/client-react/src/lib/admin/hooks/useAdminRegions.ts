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
import type { AdminGetRegionsParams } from "@medusajs/client-types"
import type { AdminGetRegionsRegionFulfillmentOptionsRes } from "@medusajs/client-types"
import type { AdminPostRegionsRegionCountriesReq } from "@medusajs/client-types"
import type { AdminPostRegionsRegionFulfillmentProvidersReq } from "@medusajs/client-types"
import type { AdminPostRegionsRegionPaymentProvidersReq } from "@medusajs/client-types"
import type { AdminPostRegionsRegionReq } from "@medusajs/client-types"
import type { AdminPostRegionsReq } from "@medusajs/client-types"
import type { AdminRegionsDeleteRes } from "@medusajs/client-types"
import type { AdminRegionsListRes } from "@medusajs/client-types"
import type { AdminRegionsRes } from "@medusajs/client-types"

const QUERY_KEY = "regions"
export const adminRegionKeys = queryKeysFactory(QUERY_KEY)

export const useAdminRegions = (
  queryParams: AdminGetRegionsParams = {},
  options: UseQueryOptionsWrapper<Awaited<AdminRegionsListRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminRegionsListRes>, Error>(
    [QUERY_KEY, "list", queryParams],
    () => client.regions.list(queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminCreateRegion = (
  options: UseMutationOptionsWrapper<
    Awaited<AdminRegionsRes>,
    Error,
    AdminPostRegionsReq
  > = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<AdminRegionsRes>, Error, AdminPostRegionsReq>(
    [QUERY_KEY, "create"],
    (requestBody: AdminPostRegionsReq) => client.regions.create(requestBody),
    options
  )
}

export const useAdminRegion = (
  id: string,
  options: UseQueryOptionsWrapper<Awaited<AdminRegionsRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminRegionsRes>, Error>(
    [QUERY_KEY, "retrieve", id],
    () => client.regions.retrieve(id),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminUpdateRegion = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminRegionsRes>,
    Error,
    AdminPostRegionsRegionReq
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
    Awaited<AdminRegionsRes>,
    Error,
    AdminPostRegionsRegionReq
  >(
    [QUERY_KEY, "update", id],
    (requestBody: AdminPostRegionsRegionReq) =>
      client.regions.update(id, requestBody),
    options
  )
}

export const useAdminDeleteRegion = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminRegionsDeleteRes>,
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
  return useMutation<Awaited<AdminRegionsDeleteRes>, Error, void>(
    [QUERY_KEY, "delete", id],
    () => client.regions.delete(id),
    options
  )
}

export const useAdminAddCountryRegion = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminRegionsRes>,
    Error,
    AdminPostRegionsRegionCountriesReq
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
    Awaited<AdminRegionsRes>,
    Error,
    AdminPostRegionsRegionCountriesReq
  >(
    [QUERY_KEY, "addCountry", id],
    (requestBody: AdminPostRegionsRegionCountriesReq) =>
      client.regions.addCountry(id, requestBody),
    options
  )
}

export const useAdminDeleteCountryRegion = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminRegionsRes>,
    Error,
    { country_code: string }
  > = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<AdminRegionsRes>, Error, { country_code: string }>(
    [QUERY_KEY, "deleteCountry", id],
    ({ country_code: countryCode }: { country_code: string }) =>
      client.regions.deleteCountry(id, countryCode),
    options
  )
}

export const useAdminRetrieveFulfillmentOptionsRegion = (
  id: string,
  options: UseQueryOptionsWrapper<
    Awaited<AdminGetRegionsRegionFulfillmentOptionsRes>,
    Error
  > = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<
    Awaited<AdminGetRegionsRegionFulfillmentOptionsRes>,
    Error
  >(
    [QUERY_KEY, "retrieveFulfillmentOptions", id],
    () => client.regions.retrieveFulfillmentOptions(id),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminAddFulfillmentProviderRegion = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminRegionsRes>,
    Error,
    AdminPostRegionsRegionFulfillmentProvidersReq
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
    Awaited<AdminRegionsRes>,
    Error,
    AdminPostRegionsRegionFulfillmentProvidersReq
  >(
    [QUERY_KEY, "addFulfillmentProvider", id],
    (requestBody: AdminPostRegionsRegionFulfillmentProvidersReq) =>
      client.regions.addFulfillmentProvider(id, requestBody),
    options
  )
}

export const useAdminDeleteFulfillmentProviderRegion = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminRegionsRes>,
    Error,
    { provider_id: string }
  > = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<AdminRegionsRes>, Error, { provider_id: string }>(
    [QUERY_KEY, "deleteFulfillmentProvider", id],
    ({ provider_id: providerId }: { provider_id: string }) =>
      client.regions.deleteFulfillmentProvider(id, providerId),
    options
  )
}

export const useAdminAddPaymentProviderRegion = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminRegionsRes>,
    Error,
    AdminPostRegionsRegionPaymentProvidersReq
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
    Awaited<AdminRegionsRes>,
    Error,
    AdminPostRegionsRegionPaymentProvidersReq
  >(
    [QUERY_KEY, "addPaymentProvider", id],
    (requestBody: AdminPostRegionsRegionPaymentProvidersReq) =>
      client.regions.addPaymentProvider(id, requestBody),
    options
  )
}

export const useAdminDeletePaymentProviderRegion = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminRegionsRes>,
    Error,
    { provider_id: string }
  > = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<AdminRegionsRes>, Error, { provider_id: string }>(
    [QUERY_KEY, "deletePaymentProvider", id],
    ({ provider_id: providerId }: { provider_id: string }) =>
      client.regions.deletePaymentProvider(id, providerId),
    options
  )
}
