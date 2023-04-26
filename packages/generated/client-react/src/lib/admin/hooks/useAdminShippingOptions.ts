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
import type { AdminGetShippingOptionsParams } from "@medusajs/client-types"
import type { AdminPostShippingOptionsOptionReq } from "@medusajs/client-types"
import type { AdminPostShippingOptionsReq } from "@medusajs/client-types"
import type { AdminShippingOptionsDeleteRes } from "@medusajs/client-types"
import type { AdminShippingOptionsListRes } from "@medusajs/client-types"
import type { AdminShippingOptionsRes } from "@medusajs/client-types"

const QUERY_KEY = "shippingOptions"
export const adminShippingOptionKeys = queryKeysFactory(QUERY_KEY)

export const useAdminShippingOptions = (
  queryParams: AdminGetShippingOptionsParams = {},
  options: UseQueryOptionsWrapper<
    Awaited<AdminShippingOptionsListRes>,
    Error
  > = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<
    Awaited<AdminShippingOptionsListRes>,
    Error
  >(
    [QUERY_KEY, "list", queryParams],
    () => client.shippingOptions.list(queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminCreateShippingOption = (
  options: UseMutationOptionsWrapper<
    Awaited<AdminShippingOptionsRes>,
    Error,
    AdminPostShippingOptionsReq
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
    Awaited<AdminShippingOptionsRes>,
    Error,
    AdminPostShippingOptionsReq
  >(
    [QUERY_KEY, "create"],
    (requestBody: AdminPostShippingOptionsReq) =>
      client.shippingOptions.create(requestBody),
    options
  )
}

export const useAdminShippingOption = (
  id: string,
  options: UseQueryOptionsWrapper<Awaited<AdminShippingOptionsRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminShippingOptionsRes>, Error>(
    [QUERY_KEY, "retrieve", id],
    () => client.shippingOptions.retrieve(id),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminUpdateShippingOption = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminShippingOptionsRes>,
    Error,
    AdminPostShippingOptionsOptionReq
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
    Awaited<AdminShippingOptionsRes>,
    Error,
    AdminPostShippingOptionsOptionReq
  >(
    [QUERY_KEY, "update", id],
    (requestBody: AdminPostShippingOptionsOptionReq) =>
      client.shippingOptions.update(id, requestBody),
    options
  )
}

export const useAdminDeleteShippingOption = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminShippingOptionsDeleteRes>,
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
  return useMutation<Awaited<AdminShippingOptionsDeleteRes>, Error, void>(
    [QUERY_KEY, "delete", id],
    () => client.shippingOptions.delete(id),
    options
  )
}
