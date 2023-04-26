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
import type { AdminCollectionsDeleteRes } from "@medusajs/client-types"
import type { AdminCollectionsListRes } from "@medusajs/client-types"
import type { AdminCollectionsRes } from "@medusajs/client-types"
import type { AdminDeleteProductsFromCollectionReq } from "@medusajs/client-types"
import type { AdminDeleteProductsFromCollectionRes } from "@medusajs/client-types"
import type { AdminGetCollectionsParams } from "@medusajs/client-types"
import type { AdminPostCollectionsCollectionReq } from "@medusajs/client-types"
import type { AdminPostCollectionsReq } from "@medusajs/client-types"
import type { AdminPostProductsToCollectionReq } from "@medusajs/client-types"

const QUERY_KEY = "collections"
export const adminCollectionKeys = queryKeysFactory(QUERY_KEY)

export const useAdminCollections = (
  queryParams: AdminGetCollectionsParams = {},
  options: UseQueryOptionsWrapper<Awaited<AdminCollectionsListRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminCollectionsListRes>, Error>(
    [QUERY_KEY, "list", queryParams],
    () => client.collections.list(queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminCreateCollection = (
  options: UseMutationOptionsWrapper<
    Awaited<AdminCollectionsRes>,
    Error,
    AdminPostCollectionsReq
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
    Awaited<AdminCollectionsRes>,
    Error,
    AdminPostCollectionsReq
  >(
    [QUERY_KEY, "create"],
    (requestBody: AdminPostCollectionsReq) =>
      client.collections.create(requestBody),
    options
  )
}

export const useAdminCollection = (
  id: string,
  options: UseQueryOptionsWrapper<Awaited<AdminCollectionsRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminCollectionsRes>, Error>(
    [QUERY_KEY, "retrieve", id],
    () => client.collections.retrieve(id),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminUpdateCollection = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminCollectionsRes>,
    Error,
    AdminPostCollectionsCollectionReq
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
    Awaited<AdminCollectionsRes>,
    Error,
    AdminPostCollectionsCollectionReq
  >(
    [QUERY_KEY, "update", id],
    (requestBody: AdminPostCollectionsCollectionReq) =>
      client.collections.update(id, requestBody),
    options
  )
}

export const useAdminDeleteCollection = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminCollectionsDeleteRes>,
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
  return useMutation<Awaited<AdminCollectionsDeleteRes>, Error, void>(
    [QUERY_KEY, "delete", id],
    () => client.collections.delete(id),
    options
  )
}

export const useAdminAddProductsCollection = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminCollectionsRes>,
    Error,
    AdminPostProductsToCollectionReq
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
    Awaited<AdminCollectionsRes>,
    Error,
    AdminPostProductsToCollectionReq
  >(
    [QUERY_KEY, "addProducts", id],
    (requestBody: AdminPostProductsToCollectionReq) =>
      client.collections.addProducts(id, requestBody),
    options
  )
}

export const useAdminRemoveProductsCollection = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminDeleteProductsFromCollectionRes>,
    Error,
    AdminDeleteProductsFromCollectionReq
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
    Awaited<AdminDeleteProductsFromCollectionRes>,
    Error,
    AdminDeleteProductsFromCollectionReq
  >(
    [QUERY_KEY, "removeProducts", id],
    (requestBody: AdminDeleteProductsFromCollectionReq) =>
      client.collections.removeProducts(id, requestBody),
    options
  )
}
