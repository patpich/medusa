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
import type { AdminGetProductTagsParams } from "@medusajs/client-types"
import type { AdminProductTagsListRes } from "@medusajs/client-types"

const QUERY_KEY = "productTags"
export const adminProductTagKeys = queryKeysFactory(QUERY_KEY)

export const useAdminProductTags = (
  queryParams: AdminGetProductTagsParams = {},
  options: UseQueryOptionsWrapper<Awaited<AdminProductTagsListRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminProductTagsListRes>, Error>(
    [QUERY_KEY, "list", queryParams],
    () => client.productTags.list(queryParams),
    options
  )
  return { ...data, ...rest } as const
}
