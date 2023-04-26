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
import type { AdminGetGiftCardsParams } from "@medusajs/client-types"
import type { AdminGiftCardsDeleteRes } from "@medusajs/client-types"
import type { AdminGiftCardsListRes } from "@medusajs/client-types"
import type { AdminGiftCardsRes } from "@medusajs/client-types"
import type { AdminPostGiftCardsGiftCardReq } from "@medusajs/client-types"
import type { AdminPostGiftCardsReq } from "@medusajs/client-types"

const QUERY_KEY = "giftCards"
export const adminGiftCardKeys = queryKeysFactory(QUERY_KEY)

export const useAdminGiftCards = (
  queryParams: AdminGetGiftCardsParams = {},
  options: UseQueryOptionsWrapper<Awaited<AdminGiftCardsListRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminGiftCardsListRes>, Error>(
    [QUERY_KEY, "list", queryParams],
    () => client.giftCards.list(queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminCreateGiftCard = (
  options: UseMutationOptionsWrapper<
    Awaited<AdminGiftCardsRes>,
    Error,
    AdminPostGiftCardsReq
  > = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<AdminGiftCardsRes>, Error, AdminPostGiftCardsReq>(
    [QUERY_KEY, "create"],
    (requestBody: AdminPostGiftCardsReq) =>
      client.giftCards.create(requestBody),
    options
  )
}

export const useAdminGiftCard = (
  id: string,
  options: UseQueryOptionsWrapper<Awaited<AdminGiftCardsRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminGiftCardsRes>, Error>(
    [QUERY_KEY, "retrieve", id],
    () => client.giftCards.retrieve(id),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminUpdateGiftCard = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminGiftCardsRes>,
    Error,
    AdminPostGiftCardsGiftCardReq
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
    Awaited<AdminGiftCardsRes>,
    Error,
    AdminPostGiftCardsGiftCardReq
  >(
    [QUERY_KEY, "update", id],
    (requestBody: AdminPostGiftCardsGiftCardReq) =>
      client.giftCards.update(id, requestBody),
    options
  )
}

export const useAdminDeleteGiftCard = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminGiftCardsDeleteRes>,
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
  return useMutation<Awaited<AdminGiftCardsDeleteRes>, Error, void>(
    [QUERY_KEY, "delete", id],
    () => client.giftCards.delete(id),
    options
  )
}
