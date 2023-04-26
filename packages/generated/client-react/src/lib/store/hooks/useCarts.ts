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
import type { StoreCartsRes } from "@medusajs/client-types"
import type { StoreCompleteCartRes } from "@medusajs/client-types"
import type { StorePostCartReq } from "@medusajs/client-types"
import type { StorePostCartsCartLineItemsItemReq } from "@medusajs/client-types"
import type { StorePostCartsCartLineItemsReq } from "@medusajs/client-types"
import type { StorePostCartsCartPaymentSessionReq } from "@medusajs/client-types"
import type { StorePostCartsCartPaymentSessionUpdateReq } from "@medusajs/client-types"
import type { StorePostCartsCartReq } from "@medusajs/client-types"
import type { StorePostCartsCartShippingMethodReq } from "@medusajs/client-types"

const QUERY_KEY = "carts"
export const cartKeys = queryKeysFactory(QUERY_KEY)

export const useCreateCart = (
  options: UseMutationOptionsWrapper<
    Awaited<StoreCartsRes>,
    Error,
    StorePostCartReq
  > = {}
) => {
  const { client } = useMedusaStore()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<StoreCartsRes>, Error, StorePostCartReq>(
    [QUERY_KEY, "create"],
    (requestBody: StorePostCartReq) => client.carts.create(requestBody),
    options
  )
}

export const useGetCart = (
  id: string,
  options: UseQueryOptionsWrapper<Awaited<StoreCartsRes>, Error> = {}
) => {
  const { client } = useMedusaStore()
  const { data, ...rest } = useQuery<Awaited<StoreCartsRes>, Error>(
    [QUERY_KEY, "retrieve", id],
    () => client.carts.retrieve(id),
    options
  )
  return { ...data, ...rest } as const
}

export const useUpdateCart = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<StoreCartsRes>,
    Error,
    StorePostCartsCartReq
  > = {}
) => {
  const { client } = useMedusaStore()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<StoreCartsRes>, Error, StorePostCartsCartReq>(
    [QUERY_KEY, "update", id],
    (requestBody: StorePostCartsCartReq) =>
      client.carts.update(id, requestBody),
    options
  )
}

export const useCompleteCart = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<StoreCompleteCartRes>,
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
  return useMutation<Awaited<StoreCompleteCartRes>, Error, void>(
    [QUERY_KEY, "complete", id],
    () => client.carts.complete(id),
    options
  )
}

export const useDeleteDiscountCart = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<StoreCartsRes>,
    Error,
    { code: string }
  > = {}
) => {
  const { client } = useMedusaStore()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<StoreCartsRes>, Error, { code: string }>(
    [QUERY_KEY, "deleteDiscount", id],
    ({ code: code }: { code: string }) => client.carts.deleteDiscount(id, code),
    options
  )
}

export const useCreateLineItemCart = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<StoreCartsRes>,
    Error,
    StorePostCartsCartLineItemsReq
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
    Awaited<StoreCartsRes>,
    Error,
    StorePostCartsCartLineItemsReq
  >(
    [QUERY_KEY, "createLineItem", id],
    (requestBody: StorePostCartsCartLineItemsReq) =>
      client.carts.createLineItem(id, requestBody),
    options
  )
}

export const useUpdateLineItemCart = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<StoreCartsRes>,
    Error,
    { line_id: string } & StorePostCartsCartLineItemsItemReq
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
    Awaited<StoreCartsRes>,
    Error,
    { line_id: string } & StorePostCartsCartLineItemsItemReq
  >(
    [QUERY_KEY, "updateLineItem", id],
    ({
      line_id: lineId,
      ...requestBody
    }: { line_id: string } & StorePostCartsCartLineItemsItemReq) =>
      client.carts.updateLineItem(id, lineId, requestBody),
    options
  )
}

export const useDeleteLineItemCart = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<StoreCartsRes>,
    Error,
    { line_id: string }
  > = {}
) => {
  const { client } = useMedusaStore()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<StoreCartsRes>, Error, { line_id: string }>(
    [QUERY_KEY, "deleteLineItem", id],
    ({ line_id: lineId }: { line_id: string }) =>
      client.carts.deleteLineItem(id, lineId),
    options
  )
}

export const useSetPaymentSessionCart = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<StoreCartsRes>,
    Error,
    StorePostCartsCartPaymentSessionReq
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
    Awaited<StoreCartsRes>,
    Error,
    StorePostCartsCartPaymentSessionReq
  >(
    [QUERY_KEY, "setPaymentSession", id],
    (requestBody: StorePostCartsCartPaymentSessionReq) =>
      client.carts.setPaymentSession(id, requestBody),
    options
  )
}

export const useCreatePaymentSessionsCart = (
  id: string,
  options: UseMutationOptionsWrapper<Awaited<StoreCartsRes>, Error, void> = {}
) => {
  const { client } = useMedusaStore()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<StoreCartsRes>, Error, void>(
    [QUERY_KEY, "createPaymentSessions", id],
    () => client.carts.createPaymentSessions(id),
    options
  )
}

export const useUpdatePaymentSessionCart = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<StoreCartsRes>,
    Error,
    { provider_id: string } & StorePostCartsCartPaymentSessionUpdateReq
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
    Awaited<StoreCartsRes>,
    Error,
    { provider_id: string } & StorePostCartsCartPaymentSessionUpdateReq
  >(
    [QUERY_KEY, "updatePaymentSession", id],
    ({
      provider_id: providerId,
      ...requestBody
    }: { provider_id: string } & StorePostCartsCartPaymentSessionUpdateReq) =>
      client.carts.updatePaymentSession(id, providerId, requestBody),
    options
  )
}

export const useDeletePaymentSessionCart = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<StoreCartsRes>,
    Error,
    { provider_id: string }
  > = {}
) => {
  const { client } = useMedusaStore()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<StoreCartsRes>, Error, { provider_id: string }>(
    [QUERY_KEY, "deletePaymentSession", id],
    ({ provider_id: providerId }: { provider_id: string }) =>
      client.carts.deletePaymentSession(id, providerId),
    options
  )
}

export const useRefreshPaymentSessionCart = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<StoreCartsRes>,
    Error,
    { provider_id: string }
  > = {}
) => {
  const { client } = useMedusaStore()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<StoreCartsRes>, Error, { provider_id: string }>(
    [QUERY_KEY, "refreshPaymentSession", id],
    ({ provider_id: providerId }: { provider_id: string }) =>
      client.carts.refreshPaymentSession(id, providerId),
    options
  )
}

export const useAddShippingMethodCart = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<StoreCartsRes>,
    Error,
    StorePostCartsCartShippingMethodReq
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
    Awaited<StoreCartsRes>,
    Error,
    StorePostCartsCartShippingMethodReq
  >(
    [QUERY_KEY, "addShippingMethod", id],
    (requestBody: StorePostCartsCartShippingMethodReq) =>
      client.carts.addShippingMethod(id, requestBody),
    options
  )
}

export const useCalculateTaxesCart = (
  id: string,
  options: UseMutationOptionsWrapper<Awaited<StoreCartsRes>, Error, void> = {}
) => {
  const { client } = useMedusaStore()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<StoreCartsRes>, Error, void>(
    [QUERY_KEY, "calculateTaxes", id],
    () => client.carts.calculateTaxes(id),
    options
  )
}
