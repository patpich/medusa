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
import type { StoreGiftCardsRes } from "@medusajs/client-types"

const QUERY_KEY = "giftCards"
export const giftCardKeys = queryKeysFactory(QUERY_KEY)

export const useGiftCard = (
  code: string,
  options: UseQueryOptionsWrapper<Awaited<StoreGiftCardsRes>, Error> = {}
) => {
  const { client } = useMedusaStore()
  const { data, ...rest } = useQuery<Awaited<StoreGiftCardsRes>, Error>(
    [QUERY_KEY, "retrieve", code],
    () => client.giftCards.retrieve(code),
    options
  )
  return { ...data, ...rest } as const
}
