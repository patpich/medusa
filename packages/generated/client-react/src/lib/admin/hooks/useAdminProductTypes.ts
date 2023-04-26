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
import type { AdminGetProductTypesParams } from "@medusajs/client-types"
import type { AdminProductTypesListRes } from "@medusajs/client-types"

const QUERY_KEY = "productTypes"
export const adminProductTypeKeys = queryKeysFactory(QUERY_KEY)

export const useAdminProductTypes = (
  queryParams: AdminGetProductTypesParams = {},
  options: UseQueryOptionsWrapper<Awaited<AdminProductTypesListRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminProductTypesListRes>, Error>(
    [QUERY_KEY, "list", queryParams],
    () => client.productTypes.list(queryParams),
    options
  )
  return { ...data, ...rest } as const
}
