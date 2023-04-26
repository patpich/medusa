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
import type { AdminDeletePriceListPricesPricesReq } from "@medusajs/client-types"
import type { AdminGetPriceListPaginationParams } from "@medusajs/client-types"
import type { AdminGetPriceListsPriceListProductsParams } from "@medusajs/client-types"
import type { AdminPostPriceListPricesPricesReq } from "@medusajs/client-types"
import type { AdminPostPriceListsPriceListPriceListReq } from "@medusajs/client-types"
import type { AdminPostPriceListsPriceListReq } from "@medusajs/client-types"
import type { AdminPriceListDeleteBatchRes } from "@medusajs/client-types"
import type { AdminPriceListDeleteProductPricesRes } from "@medusajs/client-types"
import type { AdminPriceListDeleteRes } from "@medusajs/client-types"
import type { AdminPriceListDeleteVariantPricesRes } from "@medusajs/client-types"
import type { AdminPriceListRes } from "@medusajs/client-types"
import type { AdminPriceListsListRes } from "@medusajs/client-types"
import type { AdminPriceListsProductsListRes } from "@medusajs/client-types"

const QUERY_KEY = "priceLists"
export const adminPriceListKeys = queryKeysFactory(QUERY_KEY)

export const useAdminPriceLists = (
  queryParams: AdminGetPriceListPaginationParams = {},
  options: UseQueryOptionsWrapper<Awaited<AdminPriceListsListRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminPriceListsListRes>, Error>(
    [QUERY_KEY, "list", queryParams],
    () => client.priceLists.list(queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminCreatePriceList = (
  options: UseMutationOptionsWrapper<
    Awaited<AdminPriceListRes>,
    Error,
    AdminPostPriceListsPriceListReq
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
    Awaited<AdminPriceListRes>,
    Error,
    AdminPostPriceListsPriceListReq
  >(
    [QUERY_KEY, "create"],
    (requestBody: AdminPostPriceListsPriceListReq) =>
      client.priceLists.create(requestBody),
    options
  )
}

export const useAdminPriceList = (
  id: string,
  options: UseQueryOptionsWrapper<Awaited<AdminPriceListRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminPriceListRes>, Error>(
    [QUERY_KEY, "retrieve", id],
    () => client.priceLists.retrieve(id),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminUpdatePriceList = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminPriceListRes>,
    Error,
    AdminPostPriceListsPriceListPriceListReq
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
    Awaited<AdminPriceListRes>,
    Error,
    AdminPostPriceListsPriceListPriceListReq
  >(
    [QUERY_KEY, "update", id],
    (requestBody: AdminPostPriceListsPriceListPriceListReq) =>
      client.priceLists.update(id, requestBody),
    options
  )
}

export const useAdminDeletePriceList = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminPriceListDeleteRes>,
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
  return useMutation<Awaited<AdminPriceListDeleteRes>, Error, void>(
    [QUERY_KEY, "delete", id],
    () => client.priceLists.delete(id),
    options
  )
}

export const useAdminAddPricesPriceList = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminPriceListRes>,
    Error,
    AdminPostPriceListPricesPricesReq
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
    Awaited<AdminPriceListRes>,
    Error,
    AdminPostPriceListPricesPricesReq
  >(
    [QUERY_KEY, "addPrices", id],
    (requestBody: AdminPostPriceListPricesPricesReq) =>
      client.priceLists.addPrices(id, requestBody),
    options
  )
}

export const useAdminDeletePricesPriceList = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminPriceListDeleteBatchRes>,
    Error,
    AdminDeletePriceListPricesPricesReq
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
    Awaited<AdminPriceListDeleteBatchRes>,
    Error,
    AdminDeletePriceListPricesPricesReq
  >(
    [QUERY_KEY, "deletePrices", id],
    (requestBody: AdminDeletePriceListPricesPricesReq) =>
      client.priceLists.deletePrices(id, requestBody),
    options
  )
}

export const useAdminListProductsPriceList = (
  id: string,
  queryParams: AdminGetPriceListsPriceListProductsParams = {},
  options: UseQueryOptionsWrapper<
    Awaited<AdminPriceListsProductsListRes>,
    Error
  > = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<
    Awaited<AdminPriceListsProductsListRes>,
    Error
  >(
    [QUERY_KEY, "listProducts", id, queryParams],
    () => client.priceLists.listProducts(id, queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminDeleteProductPricesPriceList = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminPriceListDeleteProductPricesRes>,
    Error,
    { product_id: string }
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
    Awaited<AdminPriceListDeleteProductPricesRes>,
    Error,
    { product_id: string }
  >(
    [QUERY_KEY, "deleteProductPrices", id],
    ({ product_id: productId }: { product_id: string }) =>
      client.priceLists.deleteProductPrices(id, productId),
    options
  )
}

export const useAdminDeleteVariantPricesPriceList = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminPriceListDeleteVariantPricesRes>,
    Error,
    { variant_id: string }
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
    Awaited<AdminPriceListDeleteVariantPricesRes>,
    Error,
    { variant_id: string }
  >(
    [QUERY_KEY, "deleteVariantPrices", id],
    ({ variant_id: variantId }: { variant_id: string }) =>
      client.priceLists.deleteVariantPrices(id, variantId),
    options
  )
}
