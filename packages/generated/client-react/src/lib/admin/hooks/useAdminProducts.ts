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
import type { AdminGetProductsParams } from "@medusajs/client-types"
import type { AdminGetProductsVariantsParams } from "@medusajs/client-types"
import type { AdminPostProductsProductMetadataReq } from "@medusajs/client-types"
import type { AdminPostProductsProductOptionsOption } from "@medusajs/client-types"
import type { AdminPostProductsProductOptionsReq } from "@medusajs/client-types"
import type { AdminPostProductsProductReq } from "@medusajs/client-types"
import type { AdminPostProductsProductVariantsReq } from "@medusajs/client-types"
import type { AdminPostProductsProductVariantsVariantReq } from "@medusajs/client-types"
import type { AdminPostProductsReq } from "@medusajs/client-types"
import type { AdminProductsDeleteOptionRes } from "@medusajs/client-types"
import type { AdminProductsDeleteRes } from "@medusajs/client-types"
import type { AdminProductsDeleteVariantRes } from "@medusajs/client-types"
import type { AdminProductsListRes } from "@medusajs/client-types"
import type { AdminProductsListTagsRes } from "@medusajs/client-types"
import type { AdminProductsListTypesRes } from "@medusajs/client-types"
import type { AdminProductsListVariantsRes } from "@medusajs/client-types"
import type { AdminProductsRes } from "@medusajs/client-types"

const QUERY_KEY = "products"
export const adminProductKeys = queryKeysFactory(QUERY_KEY)

export const useAdminProducts = (
  queryParams: AdminGetProductsParams = {},
  options: UseQueryOptionsWrapper<Awaited<AdminProductsListRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminProductsListRes>, Error>(
    [QUERY_KEY, "list", queryParams],
    () => client.products.list(queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminCreateProduct = (
  options: UseMutationOptionsWrapper<
    Awaited<AdminProductsRes>,
    Error,
    AdminPostProductsReq
  > = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<AdminProductsRes>, Error, AdminPostProductsReq>(
    [QUERY_KEY, "create"],
    (requestBody: AdminPostProductsReq) => client.products.create(requestBody),
    options
  )
}

export const useAdminListTagsProduct = (
  options: UseQueryOptionsWrapper<Awaited<AdminProductsListTagsRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminProductsListTagsRes>, Error>(
    [QUERY_KEY, "listTags"],
    () => client.products.listTags(),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminListTypesProduct = (
  options: UseQueryOptionsWrapper<
    Awaited<AdminProductsListTypesRes>,
    Error
  > = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminProductsListTypesRes>, Error>(
    [QUERY_KEY, "listTypes"],
    () => client.products.listTypes(),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminProduct = (
  id: string,
  options: UseQueryOptionsWrapper<Awaited<AdminProductsRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminProductsRes>, Error>(
    [QUERY_KEY, "retrieve", id],
    () => client.products.retrieve(id),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminUpdateProduct = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminProductsRes>,
    Error,
    AdminPostProductsProductReq
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
    Awaited<AdminProductsRes>,
    Error,
    AdminPostProductsProductReq
  >(
    [QUERY_KEY, "update", id],
    (requestBody: AdminPostProductsProductReq) =>
      client.products.update(id, requestBody),
    options
  )
}

export const useAdminDeleteProduct = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminProductsDeleteRes>,
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
  return useMutation<Awaited<AdminProductsDeleteRes>, Error, void>(
    [QUERY_KEY, "delete", id],
    () => client.products.delete(id),
    options
  )
}

export const useAdminSetMetadataProduct = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminProductsRes>,
    Error,
    AdminPostProductsProductMetadataReq
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
    Awaited<AdminProductsRes>,
    Error,
    AdminPostProductsProductMetadataReq
  >(
    [QUERY_KEY, "setMetadata", id],
    (requestBody: AdminPostProductsProductMetadataReq) =>
      client.products.setMetadata(id, requestBody),
    options
  )
}

export const useAdminAddOptionProduct = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminProductsRes>,
    Error,
    AdminPostProductsProductOptionsReq
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
    Awaited<AdminProductsRes>,
    Error,
    AdminPostProductsProductOptionsReq
  >(
    [QUERY_KEY, "addOption", id],
    (requestBody: AdminPostProductsProductOptionsReq) =>
      client.products.addOption(id, requestBody),
    options
  )
}

export const useAdminUpdateOptionProduct = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminProductsRes>,
    Error,
    { option_id: string } & AdminPostProductsProductOptionsOption
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
    Awaited<AdminProductsRes>,
    Error,
    { option_id: string } & AdminPostProductsProductOptionsOption
  >(
    [QUERY_KEY, "updateOption", id],
    ({
      option_id: optionId,
      ...requestBody
    }: { option_id: string } & AdminPostProductsProductOptionsOption) =>
      client.products.updateOption(id, optionId, requestBody),
    options
  )
}

export const useAdminDeleteOptionProduct = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminProductsDeleteOptionRes>,
    Error,
    { option_id: string }
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
    Awaited<AdminProductsDeleteOptionRes>,
    Error,
    { option_id: string }
  >(
    [QUERY_KEY, "deleteOption", id],
    ({ option_id: optionId }: { option_id: string }) =>
      client.products.deleteOption(id, optionId),
    options
  )
}

export const useAdminListVariantsProduct = (
  id: string,
  queryParams: AdminGetProductsVariantsParams = {},
  options: UseQueryOptionsWrapper<
    Awaited<AdminProductsListVariantsRes>,
    Error
  > = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<
    Awaited<AdminProductsListVariantsRes>,
    Error
  >(
    [QUERY_KEY, "listVariants", id, queryParams],
    () => client.products.listVariants(id, queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminCreateVariantProduct = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminProductsRes>,
    Error,
    AdminPostProductsProductVariantsReq
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
    Awaited<AdminProductsRes>,
    Error,
    AdminPostProductsProductVariantsReq
  >(
    [QUERY_KEY, "createVariant", id],
    (requestBody: AdminPostProductsProductVariantsReq) =>
      client.products.createVariant(id, requestBody),
    options
  )
}

export const useAdminUpdateVariantProduct = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminProductsRes>,
    Error,
    { variant_id: string } & AdminPostProductsProductVariantsVariantReq
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
    Awaited<AdminProductsRes>,
    Error,
    { variant_id: string } & AdminPostProductsProductVariantsVariantReq
  >(
    [QUERY_KEY, "updateVariant", id],
    ({
      variant_id: variantId,
      ...requestBody
    }: { variant_id: string } & AdminPostProductsProductVariantsVariantReq) =>
      client.products.updateVariant(id, variantId, requestBody),
    options
  )
}

export const useAdminDeleteVariantProduct = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminProductsDeleteVariantRes>,
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
    Awaited<AdminProductsDeleteVariantRes>,
    Error,
    { variant_id: string }
  >(
    [QUERY_KEY, "deleteVariant", id],
    ({ variant_id: variantId }: { variant_id: string }) =>
      client.products.deleteVariant(id, variantId),
    options
  )
}
