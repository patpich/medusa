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
import type { AdminDeleteProductCategoriesCategoryProductsBatchParams } from "@medusajs/client-types"
import type { AdminDeleteProductCategoriesCategoryProductsBatchReq } from "@medusajs/client-types"
import type { AdminGetProductCategoriesParams } from "@medusajs/client-types"
import type { AdminGetProductCategoryParams } from "@medusajs/client-types"
import type { AdminPostProductCategoriesCategoryParams } from "@medusajs/client-types"
import type { AdminPostProductCategoriesCategoryProductsBatchParams } from "@medusajs/client-types"
import type { AdminPostProductCategoriesCategoryProductsBatchReq } from "@medusajs/client-types"
import type { AdminPostProductCategoriesCategoryReq } from "@medusajs/client-types"
import type { AdminPostProductCategoriesParams } from "@medusajs/client-types"
import type { AdminPostProductCategoriesReq } from "@medusajs/client-types"
import type { AdminProductCategoriesCategoryDeleteRes } from "@medusajs/client-types"
import type { AdminProductCategoriesCategoryRes } from "@medusajs/client-types"
import type { AdminProductCategoriesListRes } from "@medusajs/client-types"

const QUERY_KEY = "productCategories"
export const adminProductCategoryKeys = queryKeysFactory(QUERY_KEY)

export const useAdminProductCategories = (
  queryParams: AdminGetProductCategoriesParams = {},
  options: UseQueryOptionsWrapper<
    Awaited<AdminProductCategoriesListRes>,
    Error
  > = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<
    Awaited<AdminProductCategoriesListRes>,
    Error
  >(
    [QUERY_KEY, "list", queryParams],
    () => client.productCategories.list(queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminCreateProductCategory = (
  queryParams: AdminPostProductCategoriesParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminProductCategoriesCategoryRes>,
    Error,
    AdminPostProductCategoriesReq
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
    Awaited<AdminProductCategoriesCategoryRes>,
    Error,
    AdminPostProductCategoriesReq
  >(
    [QUERY_KEY, "create", queryParams],
    (requestBody: AdminPostProductCategoriesReq) =>
      client.productCategories.create(requestBody, queryParams),
    options
  )
}

export const useAdminProductCategory = (
  id: string,
  queryParams: AdminGetProductCategoryParams = {},
  options: UseQueryOptionsWrapper<
    Awaited<AdminProductCategoriesCategoryRes>,
    Error
  > = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<
    Awaited<AdminProductCategoriesCategoryRes>,
    Error
  >(
    [QUERY_KEY, "retrieve", id, queryParams],
    () => client.productCategories.retrieve(id, queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminUpdateProductCategory = (
  id: string,
  queryParams: AdminPostProductCategoriesCategoryParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminProductCategoriesCategoryRes>,
    Error,
    AdminPostProductCategoriesCategoryReq
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
    Awaited<AdminProductCategoriesCategoryRes>,
    Error,
    AdminPostProductCategoriesCategoryReq
  >(
    [QUERY_KEY, "update", id, queryParams],
    (requestBody: AdminPostProductCategoriesCategoryReq) =>
      client.productCategories.update(id, requestBody, queryParams),
    options
  )
}

export const useAdminDeleteProductCategory = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminProductCategoriesCategoryDeleteRes>,
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
  return useMutation<
    Awaited<AdminProductCategoriesCategoryDeleteRes>,
    Error,
    void
  >(
    [QUERY_KEY, "delete", id],
    () => client.productCategories.delete(id),
    options
  )
}

export const useAdminAddProductsProductCategory = (
  id: string,
  queryParams: AdminPostProductCategoriesCategoryProductsBatchParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminProductCategoriesCategoryRes>,
    Error,
    AdminPostProductCategoriesCategoryProductsBatchReq
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
    Awaited<AdminProductCategoriesCategoryRes>,
    Error,
    AdminPostProductCategoriesCategoryProductsBatchReq
  >(
    [QUERY_KEY, "addProducts", id, queryParams],
    (requestBody: AdminPostProductCategoriesCategoryProductsBatchReq) =>
      client.productCategories.addProducts(id, requestBody, queryParams),
    options
  )
}

export const useAdminRemoveProductsProductCategory = (
  id: string,
  queryParams: AdminDeleteProductCategoriesCategoryProductsBatchParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminProductCategoriesCategoryRes>,
    Error,
    AdminDeleteProductCategoriesCategoryProductsBatchReq
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
    Awaited<AdminProductCategoriesCategoryRes>,
    Error,
    AdminDeleteProductCategoriesCategoryProductsBatchReq
  >(
    [QUERY_KEY, "removeProducts", id, queryParams],
    (requestBody: AdminDeleteProductCategoriesCategoryProductsBatchReq) =>
      client.productCategories.removeProducts(id, requestBody, queryParams),
    options
  )
}
