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
import type { AdminCustomersListRes } from "@medusajs/client-types"
import type { AdminCustomersRes } from "@medusajs/client-types"
import type { AdminGetCustomersParams } from "@medusajs/client-types"
import type { AdminPostCustomersCustomerReq } from "@medusajs/client-types"
import type { AdminPostCustomersReq } from "@medusajs/client-types"

const QUERY_KEY = "customers"
export const adminCustomerKeys = queryKeysFactory(QUERY_KEY)

export const useAdminCustomers = (
  queryParams: AdminGetCustomersParams = {},
  options: UseQueryOptionsWrapper<Awaited<AdminCustomersListRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminCustomersListRes>, Error>(
    [QUERY_KEY, "list", queryParams],
    () => client.customers.list(queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminCreateCustomer = (
  options: UseMutationOptionsWrapper<
    Awaited<AdminCustomersRes>,
    Error,
    AdminPostCustomersReq
  > = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<AdminCustomersRes>, Error, AdminPostCustomersReq>(
    [QUERY_KEY, "create"],
    (requestBody: AdminPostCustomersReq) =>
      client.customers.create(requestBody),
    options
  )
}

export const useAdminCustomer = (
  id: string,
  queryParams: {
    /**
     * (Comma separated) Which fields should be expanded in the customer.
     */
    expand?: string
    /**
     * (Comma separated) Which fields should be included in the customer.
     */
    fields?: string
  } = {},
  options: UseQueryOptionsWrapper<Awaited<AdminCustomersRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminCustomersRes>, Error>(
    [QUERY_KEY, "retrieve", id, queryParams],
    () => client.customers.retrieve(id, queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminUpdateCustomer = (
  id: string,
  queryParams: {
    /**
     * (Comma separated) Which fields should be expanded in each customer.
     */
    expand?: string
    /**
     * (Comma separated) Which fields should be retrieved in each customer.
     */
    fields?: string
  } = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminCustomersRes>,
    Error,
    AdminPostCustomersCustomerReq
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
    Awaited<AdminCustomersRes>,
    Error,
    AdminPostCustomersCustomerReq
  >(
    [QUERY_KEY, "update", id, queryParams],
    (requestBody: AdminPostCustomersCustomerReq) =>
      client.customers.update(id, requestBody, queryParams),
    options
  )
}
