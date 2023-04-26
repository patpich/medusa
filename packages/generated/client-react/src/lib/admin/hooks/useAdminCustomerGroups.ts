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
import type { AdminCustomerGroupsDeleteRes } from "@medusajs/client-types"
import type { AdminCustomerGroupsListRes } from "@medusajs/client-types"
import type { AdminCustomerGroupsRes } from "@medusajs/client-types"
import type { AdminCustomersListRes } from "@medusajs/client-types"
import type { AdminDeleteCustomerGroupsGroupCustomerBatchReq } from "@medusajs/client-types"
import type { AdminGetCustomerGroupsGroupParams } from "@medusajs/client-types"
import type { AdminGetCustomerGroupsParams } from "@medusajs/client-types"
import type { AdminGetGroupsGroupCustomersParams } from "@medusajs/client-types"
import type { AdminPostCustomerGroupsGroupCustomersBatchReq } from "@medusajs/client-types"
import type { AdminPostCustomerGroupsGroupReq } from "@medusajs/client-types"
import type { AdminPostCustomerGroupsReq } from "@medusajs/client-types"

const QUERY_KEY = "customerGroups"
export const adminCustomerGroupKeys = queryKeysFactory(QUERY_KEY)

export const useAdminCustomerGroups = (
  queryParams: AdminGetCustomerGroupsParams = {},
  options: UseQueryOptionsWrapper<
    Awaited<AdminCustomerGroupsListRes>,
    Error
  > = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<
    Awaited<AdminCustomerGroupsListRes>,
    Error
  >(
    [QUERY_KEY, "list", queryParams],
    () => client.customerGroups.list(queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminCreateCustomerGroup = (
  options: UseMutationOptionsWrapper<
    Awaited<AdminCustomerGroupsRes>,
    Error,
    AdminPostCustomerGroupsReq
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
    Awaited<AdminCustomerGroupsRes>,
    Error,
    AdminPostCustomerGroupsReq
  >(
    [QUERY_KEY, "create"],
    (requestBody: AdminPostCustomerGroupsReq) =>
      client.customerGroups.create(requestBody),
    options
  )
}

export const useAdminCustomerGroup = (
  id: string,
  queryParams: AdminGetCustomerGroupsGroupParams = {},
  options: UseQueryOptionsWrapper<Awaited<AdminCustomerGroupsRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminCustomerGroupsRes>, Error>(
    [QUERY_KEY, "retrieve", id, queryParams],
    () => client.customerGroups.retrieve(id, queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminUpdateCustomerGroup = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminCustomerGroupsRes>,
    Error,
    AdminPostCustomerGroupsGroupReq
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
    Awaited<AdminCustomerGroupsRes>,
    Error,
    AdminPostCustomerGroupsGroupReq
  >(
    [QUERY_KEY, "update", id],
    (requestBody: AdminPostCustomerGroupsGroupReq) =>
      client.customerGroups.update(id, requestBody),
    options
  )
}

export const useAdminDeleteCustomerGroup = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminCustomerGroupsDeleteRes>,
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
  return useMutation<Awaited<AdminCustomerGroupsDeleteRes>, Error, void>(
    [QUERY_KEY, "delete", id],
    () => client.customerGroups.delete(id),
    options
  )
}

export const useAdminListCustomersCustomerGroup = (
  id: string,
  queryParams: AdminGetGroupsGroupCustomersParams = {},
  options: UseQueryOptionsWrapper<Awaited<AdminCustomersListRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminCustomersListRes>, Error>(
    [QUERY_KEY, "listCustomers", id, queryParams],
    () => client.customerGroups.listCustomers(id, queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminAddCustomersCustomerGroup = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminCustomerGroupsRes>,
    Error,
    AdminPostCustomerGroupsGroupCustomersBatchReq
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
    Awaited<AdminCustomerGroupsRes>,
    Error,
    AdminPostCustomerGroupsGroupCustomersBatchReq
  >(
    [QUERY_KEY, "addCustomers", id],
    (requestBody: AdminPostCustomerGroupsGroupCustomersBatchReq) =>
      client.customerGroups.addCustomers(id, requestBody),
    options
  )
}

export const useAdminRemoveCustomersCustomerGroup = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminCustomerGroupsRes>,
    Error,
    AdminDeleteCustomerGroupsGroupCustomerBatchReq
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
    Awaited<AdminCustomerGroupsRes>,
    Error,
    AdminDeleteCustomerGroupsGroupCustomerBatchReq
  >(
    [QUERY_KEY, "removeCustomers", id],
    (requestBody: AdminDeleteCustomerGroupsGroupCustomerBatchReq) =>
      client.customerGroups.removeCustomers(id, requestBody),
    options
  )
}
