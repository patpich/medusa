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
import type { AdminDeleteTaxRatesTaxRateProductsParams } from "@medusajs/client-types"
import type { AdminDeleteTaxRatesTaxRateProductsReq } from "@medusajs/client-types"
import type { AdminDeleteTaxRatesTaxRateProductTypesParams } from "@medusajs/client-types"
import type { AdminDeleteTaxRatesTaxRateProductTypesReq } from "@medusajs/client-types"
import type { AdminDeleteTaxRatesTaxRateShippingOptionsParams } from "@medusajs/client-types"
import type { AdminDeleteTaxRatesTaxRateShippingOptionsReq } from "@medusajs/client-types"
import type { AdminGetTaxRatesParams } from "@medusajs/client-types"
import type { AdminGetTaxRatesTaxRateParams } from "@medusajs/client-types"
import type { AdminPostTaxRatesParams } from "@medusajs/client-types"
import type { AdminPostTaxRatesReq } from "@medusajs/client-types"
import type { AdminPostTaxRatesTaxRateParams } from "@medusajs/client-types"
import type { AdminPostTaxRatesTaxRateProductsParams } from "@medusajs/client-types"
import type { AdminPostTaxRatesTaxRateProductsReq } from "@medusajs/client-types"
import type { AdminPostTaxRatesTaxRateProductTypesParams } from "@medusajs/client-types"
import type { AdminPostTaxRatesTaxRateProductTypesReq } from "@medusajs/client-types"
import type { AdminPostTaxRatesTaxRateReq } from "@medusajs/client-types"
import type { AdminPostTaxRatesTaxRateShippingOptionsParams } from "@medusajs/client-types"
import type { AdminPostTaxRatesTaxRateShippingOptionsReq } from "@medusajs/client-types"
import type { AdminTaxRatesDeleteRes } from "@medusajs/client-types"
import type { AdminTaxRatesListRes } from "@medusajs/client-types"
import type { AdminTaxRatesRes } from "@medusajs/client-types"

const QUERY_KEY = "taxRates"
export const adminTaxRateKeys = queryKeysFactory(QUERY_KEY)

export const useAdminTaxRates = (
  queryParams: AdminGetTaxRatesParams = {},
  options: UseQueryOptionsWrapper<Awaited<AdminTaxRatesListRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminTaxRatesListRes>, Error>(
    [QUERY_KEY, "list", queryParams],
    () => client.taxRates.list(queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminCreateTaxRate = (
  queryParams: AdminPostTaxRatesParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminTaxRatesRes>,
    Error,
    AdminPostTaxRatesReq
  > = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<AdminTaxRatesRes>, Error, AdminPostTaxRatesReq>(
    [QUERY_KEY, "create", queryParams],
    (requestBody: AdminPostTaxRatesReq) =>
      client.taxRates.create(requestBody, queryParams),
    options
  )
}

export const useAdminTaxRate = (
  id: string,
  queryParams: AdminGetTaxRatesTaxRateParams = {},
  options: UseQueryOptionsWrapper<Awaited<AdminTaxRatesRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminTaxRatesRes>, Error>(
    [QUERY_KEY, "retrieve", id, queryParams],
    () => client.taxRates.retrieve(id, queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminUpdateTaxRate = (
  id: string,
  queryParams: AdminPostTaxRatesTaxRateParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminTaxRatesRes>,
    Error,
    AdminPostTaxRatesTaxRateReq
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
    Awaited<AdminTaxRatesRes>,
    Error,
    AdminPostTaxRatesTaxRateReq
  >(
    [QUERY_KEY, "update", id, queryParams],
    (requestBody: AdminPostTaxRatesTaxRateReq) =>
      client.taxRates.update(id, requestBody, queryParams),
    options
  )
}

export const useAdminDeleteTaxRate = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminTaxRatesDeleteRes>,
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
  return useMutation<Awaited<AdminTaxRatesDeleteRes>, Error, void>(
    [QUERY_KEY, "delete", id],
    () => client.taxRates.delete(id),
    options
  )
}

export const useAdminAddProductTypesTaxRate = (
  id: string,
  queryParams: AdminPostTaxRatesTaxRateProductTypesParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminTaxRatesRes>,
    Error,
    AdminPostTaxRatesTaxRateProductTypesReq
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
    Awaited<AdminTaxRatesRes>,
    Error,
    AdminPostTaxRatesTaxRateProductTypesReq
  >(
    [QUERY_KEY, "addProductTypes", id, queryParams],
    (requestBody: AdminPostTaxRatesTaxRateProductTypesReq) =>
      client.taxRates.addProductTypes(id, requestBody, queryParams),
    options
  )
}

export const useAdminRemoveProductTypesTaxRate = (
  id: string,
  queryParams: AdminDeleteTaxRatesTaxRateProductTypesParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminTaxRatesRes>,
    Error,
    AdminDeleteTaxRatesTaxRateProductTypesReq
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
    Awaited<AdminTaxRatesRes>,
    Error,
    AdminDeleteTaxRatesTaxRateProductTypesReq
  >(
    [QUERY_KEY, "removeProductTypes", id, queryParams],
    (requestBody: AdminDeleteTaxRatesTaxRateProductTypesReq) =>
      client.taxRates.removeProductTypes(id, requestBody, queryParams),
    options
  )
}

export const useAdminAddProductsTaxRate = (
  id: string,
  queryParams: AdminPostTaxRatesTaxRateProductsParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminTaxRatesRes>,
    Error,
    AdminPostTaxRatesTaxRateProductsReq
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
    Awaited<AdminTaxRatesRes>,
    Error,
    AdminPostTaxRatesTaxRateProductsReq
  >(
    [QUERY_KEY, "addProducts", id, queryParams],
    (requestBody: AdminPostTaxRatesTaxRateProductsReq) =>
      client.taxRates.addProducts(id, requestBody, queryParams),
    options
  )
}

export const useAdminRemoveProductsTaxRate = (
  id: string,
  queryParams: AdminDeleteTaxRatesTaxRateProductsParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminTaxRatesRes>,
    Error,
    AdminDeleteTaxRatesTaxRateProductsReq
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
    Awaited<AdminTaxRatesRes>,
    Error,
    AdminDeleteTaxRatesTaxRateProductsReq
  >(
    [QUERY_KEY, "removeProducts", id, queryParams],
    (requestBody: AdminDeleteTaxRatesTaxRateProductsReq) =>
      client.taxRates.removeProducts(id, requestBody, queryParams),
    options
  )
}

export const useAdminAddShippingOptionsTaxRate = (
  id: string,
  queryParams: AdminPostTaxRatesTaxRateShippingOptionsParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminTaxRatesRes>,
    Error,
    AdminPostTaxRatesTaxRateShippingOptionsReq
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
    Awaited<AdminTaxRatesRes>,
    Error,
    AdminPostTaxRatesTaxRateShippingOptionsReq
  >(
    [QUERY_KEY, "addShippingOptions", id, queryParams],
    (requestBody: AdminPostTaxRatesTaxRateShippingOptionsReq) =>
      client.taxRates.addShippingOptions(id, requestBody, queryParams),
    options
  )
}

export const useAdminRemoveShippingOptionsTaxRate = (
  id: string,
  queryParams: AdminDeleteTaxRatesTaxRateShippingOptionsParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminTaxRatesRes>,
    Error,
    AdminDeleteTaxRatesTaxRateShippingOptionsReq
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
    Awaited<AdminTaxRatesRes>,
    Error,
    AdminDeleteTaxRatesTaxRateShippingOptionsReq
  >(
    [QUERY_KEY, "removeShippingOptions", id, queryParams],
    (requestBody: AdminDeleteTaxRatesTaxRateShippingOptionsReq) =>
      client.taxRates.removeShippingOptions(id, requestBody, queryParams),
    options
  )
}
