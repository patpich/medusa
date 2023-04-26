/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import {
  UseQueryOptionsWrapper,
  UseMutationOptionsWrapper,
  queryKeysFactory,
} from "../core/HookUtils"
import { useMedusaStore } from "../useMedusaStore"
import type { StoreCustomersListOrdersRes } from "@medusajs/client-types"
import type { StoreCustomersListPaymentMethodsRes } from "@medusajs/client-types"
import type { StoreCustomersRes } from "@medusajs/client-types"
import type { StoreCustomersResetPasswordRes } from "@medusajs/client-types"
import type { StoreGetCustomersCustomerOrdersParams } from "@medusajs/client-types"
import type { StorePostCustomersCustomerAddressesAddressReq } from "@medusajs/client-types"
import type { StorePostCustomersCustomerAddressesReq } from "@medusajs/client-types"
import type { StorePostCustomersCustomerPasswordTokenReq } from "@medusajs/client-types"
import type { StorePostCustomersCustomerReq } from "@medusajs/client-types"
import type { StorePostCustomersReq } from "@medusajs/client-types"
import type { StorePostCustomersResetPasswordReq } from "@medusajs/client-types"

const QUERY_KEY = "customers"
export const customerKeys = queryKeysFactory(QUERY_KEY)

export const useCreateCustomer = (
  options: UseMutationOptionsWrapper<
    Awaited<StoreCustomersRes>,
    Error,
    StorePostCustomersReq
  > = {}
) => {
  const { client } = useMedusaStore()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<StoreCustomersRes>, Error, StorePostCustomersReq>(
    [QUERY_KEY, "create"],
    (requestBody: StorePostCustomersReq) =>
      client.customers.create(requestBody),
    options
  )
}

export const useCustomer = (
  options: UseQueryOptionsWrapper<Awaited<StoreCustomersRes>, Error> = {}
) => {
  const { client } = useMedusaStore()
  const { data, ...rest } = useQuery<Awaited<StoreCustomersRes>, Error>(
    [QUERY_KEY, "retrieve"],
    () => client.customers.retrieve(),
    options
  )
  return { ...data, ...rest } as const
}

export const useUpdateCustomer = (
  options: UseMutationOptionsWrapper<
    Awaited<StoreCustomersRes>,
    Error,
    StorePostCustomersCustomerReq
  > = {}
) => {
  const { client } = useMedusaStore()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<
    Awaited<StoreCustomersRes>,
    Error,
    StorePostCustomersCustomerReq
  >(
    [QUERY_KEY, "update"],
    (requestBody: StorePostCustomersCustomerReq) =>
      client.customers.update(requestBody),
    options
  )
}

export const useAddAddressCustomer = (
  options: UseMutationOptionsWrapper<
    Awaited<StoreCustomersRes>,
    Error,
    StorePostCustomersCustomerAddressesReq
  > = {}
) => {
  const { client } = useMedusaStore()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<
    Awaited<StoreCustomersRes>,
    Error,
    StorePostCustomersCustomerAddressesReq
  >(
    [QUERY_KEY, "addAddress"],
    (requestBody: StorePostCustomersCustomerAddressesReq) =>
      client.customers.addAddress(requestBody),
    options
  )
}

export const useUpdateAddressCustomer = (
  addressId: string,
  options: UseMutationOptionsWrapper<
    Awaited<StoreCustomersRes>,
    Error,
    StorePostCustomersCustomerAddressesAddressReq
  > = {}
) => {
  const { client } = useMedusaStore()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<
    Awaited<StoreCustomersRes>,
    Error,
    StorePostCustomersCustomerAddressesAddressReq
  >(
    [QUERY_KEY, "updateAddress", addressId],
    (requestBody: StorePostCustomersCustomerAddressesAddressReq) =>
      client.customers.updateAddress(addressId, requestBody),
    options
  )
}

export const useDeleteAddressCustomer = (
  addressId: string,
  options: UseMutationOptionsWrapper<
    Awaited<StoreCustomersRes>,
    Error,
    void
  > = {}
) => {
  const { client } = useMedusaStore()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<StoreCustomersRes>, Error, void>(
    [QUERY_KEY, "deleteAddress", addressId],
    () => client.customers.deleteAddress(addressId),
    options
  )
}

export const useListOrdersCustomer = (
  queryParams: StoreGetCustomersCustomerOrdersParams = {},
  options: UseQueryOptionsWrapper<
    Awaited<StoreCustomersListOrdersRes>,
    Error
  > = {}
) => {
  const { client } = useMedusaStore()
  const { data, ...rest } = useQuery<
    Awaited<StoreCustomersListOrdersRes>,
    Error
  >(
    [QUERY_KEY, "listOrders", queryParams],
    () => client.customers.listOrders(queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useListPaymentMethodsCustomer = (
  options: UseQueryOptionsWrapper<
    Awaited<StoreCustomersListPaymentMethodsRes>,
    Error
  > = {}
) => {
  const { client } = useMedusaStore()
  const { data, ...rest } = useQuery<
    Awaited<StoreCustomersListPaymentMethodsRes>,
    Error
  >(
    [QUERY_KEY, "listPaymentMethods"],
    () => client.customers.listPaymentMethods(),
    options
  )
  return { ...data, ...rest } as const
}

export const useResetPasswordCustomer = (
  options: UseMutationOptionsWrapper<
    Awaited<StoreCustomersResetPasswordRes>,
    Error,
    StorePostCustomersResetPasswordReq
  > = {}
) => {
  const { client } = useMedusaStore()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<
    Awaited<StoreCustomersResetPasswordRes>,
    Error,
    StorePostCustomersResetPasswordReq
  >(
    [QUERY_KEY, "resetPassword"],
    (requestBody: StorePostCustomersResetPasswordReq) =>
      client.customers.resetPassword(requestBody),
    options
  )
}

export const useGeneratePasswordTokenCustomer = (
  options: UseMutationOptionsWrapper<
    Awaited<void>,
    Error,
    StorePostCustomersCustomerPasswordTokenReq
  > = {}
) => {
  const { client } = useMedusaStore()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<
    Awaited<void>,
    Error,
    StorePostCustomersCustomerPasswordTokenReq
  >(
    [QUERY_KEY, "generatePasswordToken"],
    (requestBody: StorePostCustomersCustomerPasswordTokenReq) =>
      client.customers.generatePasswordToken(requestBody),
    options
  )
}
