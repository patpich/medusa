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
import type { AdminDeleteDiscountsDiscountConditionsConditionBatchReq } from "@medusajs/client-types"
import type { AdminDeleteDiscountsDiscountConditionsConditionParams } from "@medusajs/client-types"
import type { AdminDiscountConditionsDeleteRes } from "@medusajs/client-types"
import type { AdminDiscountConditionsRes } from "@medusajs/client-types"
import type { AdminDiscountsDeleteRes } from "@medusajs/client-types"
import type { AdminDiscountsListRes } from "@medusajs/client-types"
import type { AdminDiscountsRes } from "@medusajs/client-types"
import type { AdminGetDiscountParams } from "@medusajs/client-types"
import type { AdminGetDiscountsDiscountCodeParams } from "@medusajs/client-types"
import type { AdminGetDiscountsDiscountConditionsConditionParams } from "@medusajs/client-types"
import type { AdminGetDiscountsParams } from "@medusajs/client-types"
import type { AdminPostDiscountsDiscountConditions } from "@medusajs/client-types"
import type { AdminPostDiscountsDiscountConditionsCondition } from "@medusajs/client-types"
import type { AdminPostDiscountsDiscountConditionsConditionBatchParams } from "@medusajs/client-types"
import type { AdminPostDiscountsDiscountConditionsConditionBatchReq } from "@medusajs/client-types"
import type { AdminPostDiscountsDiscountConditionsConditionParams } from "@medusajs/client-types"
import type { AdminPostDiscountsDiscountConditionsParams } from "@medusajs/client-types"
import type { AdminPostDiscountsDiscountDynamicCodesReq } from "@medusajs/client-types"
import type { AdminPostDiscountsDiscountParams } from "@medusajs/client-types"
import type { AdminPostDiscountsDiscountReq } from "@medusajs/client-types"
import type { AdminPostDiscountsParams } from "@medusajs/client-types"
import type { AdminPostDiscountsReq } from "@medusajs/client-types"

const QUERY_KEY = "discounts"
export const adminDiscountKeys = queryKeysFactory(QUERY_KEY)

export const useAdminDiscounts = (
  queryParams: AdminGetDiscountsParams = {},
  options: UseQueryOptionsWrapper<Awaited<AdminDiscountsListRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminDiscountsListRes>, Error>(
    [QUERY_KEY, "list", queryParams],
    () => client.discounts.list(queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminCreateDiscount = (
  queryParams: AdminPostDiscountsParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminDiscountsRes>,
    Error,
    AdminPostDiscountsReq
  > = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<AdminDiscountsRes>, Error, AdminPostDiscountsReq>(
    [QUERY_KEY, "create", queryParams],
    (requestBody: AdminPostDiscountsReq) =>
      client.discounts.create(requestBody, queryParams),
    options
  )
}

export const useAdminRetrieveByCodeDiscount = (
  code: string,
  queryParams: AdminGetDiscountsDiscountCodeParams = {},
  options: UseQueryOptionsWrapper<Awaited<AdminDiscountsRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminDiscountsRes>, Error>(
    [QUERY_KEY, "retrieveByCode", code, queryParams],
    () => client.discounts.retrieveByCode(code, queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminCreateConditionDiscount = (
  discountId: string,
  queryParams: AdminPostDiscountsDiscountConditionsParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminDiscountsRes>,
    Error,
    AdminPostDiscountsDiscountConditions
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
    Awaited<AdminDiscountsRes>,
    Error,
    AdminPostDiscountsDiscountConditions
  >(
    [QUERY_KEY, "createCondition", discountId, queryParams],
    (requestBody: AdminPostDiscountsDiscountConditions) =>
      client.discounts.createCondition(discountId, requestBody, queryParams),
    options
  )
}

export const useAdminGetConditionDiscount = (
  discountId: string,
  conditionId: string,
  queryParams: AdminGetDiscountsDiscountConditionsConditionParams = {},
  options: UseQueryOptionsWrapper<
    Awaited<AdminDiscountConditionsRes>,
    Error
  > = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<
    Awaited<AdminDiscountConditionsRes>,
    Error
  >(
    [QUERY_KEY, "getCondition", discountId, conditionId, queryParams],
    () => client.discounts.getCondition(discountId, conditionId, queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminUpdateConditionDiscount = (
  discountId: string,
  queryParams: AdminPostDiscountsDiscountConditionsConditionParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminDiscountsRes>,
    Error,
    { condition_id: string } & AdminPostDiscountsDiscountConditionsCondition
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
    Awaited<AdminDiscountsRes>,
    Error,
    { condition_id: string } & AdminPostDiscountsDiscountConditionsCondition
  >(
    [QUERY_KEY, "updateCondition", discountId, queryParams],
    ({
      condition_id: conditionId,
      ...requestBody
    }: {
      condition_id: string
    } & AdminPostDiscountsDiscountConditionsCondition) =>
      client.discounts.updateCondition(
        discountId,
        conditionId,
        requestBody,
        queryParams
      ),
    options
  )
}

export const useAdminDeleteConditionDiscount = (
  discountId: string,
  queryParams: AdminDeleteDiscountsDiscountConditionsConditionParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminDiscountConditionsDeleteRes>,
    Error,
    { condition_id: string }
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
    Awaited<AdminDiscountConditionsDeleteRes>,
    Error,
    { condition_id: string }
  >(
    [QUERY_KEY, "deleteCondition", discountId, queryParams],
    ({ condition_id: conditionId }: { condition_id: string }) =>
      client.discounts.deleteCondition(discountId, conditionId, queryParams),
    options
  )
}

export const useAdminAddConditionResourceBatchDiscount = (
  discountId: string,
  queryParams: AdminPostDiscountsDiscountConditionsConditionBatchParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminDiscountsRes>,
    Error,
    {
      condition_id: string
    } & AdminPostDiscountsDiscountConditionsConditionBatchReq
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
    Awaited<AdminDiscountsRes>,
    Error,
    {
      condition_id: string
    } & AdminPostDiscountsDiscountConditionsConditionBatchReq
  >(
    [QUERY_KEY, "addConditionResourceBatch", discountId, queryParams],
    ({
      condition_id: conditionId,
      ...requestBody
    }: {
      condition_id: string
    } & AdminPostDiscountsDiscountConditionsConditionBatchReq) =>
      client.discounts.addConditionResourceBatch(
        discountId,
        conditionId,
        requestBody,
        queryParams
      ),
    options
  )
}

export const useAdminDeleteConditionResourceBatchDiscount = (
  discountId: string,
  queryParams: {
    /**
     * (Comma separated) Which relations should be expanded in each discount of the result.
     */
    expand?: string
    /**
     * (Comma separated) Which fields should be included in each discount of the result.
     */
    fields?: string
  } = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminDiscountsRes>,
    Error,
    {
      condition_id: string
    } & AdminDeleteDiscountsDiscountConditionsConditionBatchReq
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
    Awaited<AdminDiscountsRes>,
    Error,
    {
      condition_id: string
    } & AdminDeleteDiscountsDiscountConditionsConditionBatchReq
  >(
    [QUERY_KEY, "deleteConditionResourceBatch", discountId, queryParams],
    ({
      condition_id: conditionId,
      ...requestBody
    }: {
      condition_id: string
    } & AdminDeleteDiscountsDiscountConditionsConditionBatchReq) =>
      client.discounts.deleteConditionResourceBatch(
        discountId,
        conditionId,
        requestBody,
        queryParams
      ),
    options
  )
}

export const useAdminDiscount = (
  id: string,
  queryParams: AdminGetDiscountParams = {},
  options: UseQueryOptionsWrapper<Awaited<AdminDiscountsRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminDiscountsRes>, Error>(
    [QUERY_KEY, "retrieve", id, queryParams],
    () => client.discounts.retrieve(id, queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminUpdateDiscount = (
  id: string,
  queryParams: AdminPostDiscountsDiscountParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminDiscountsRes>,
    Error,
    AdminPostDiscountsDiscountReq
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
    Awaited<AdminDiscountsRes>,
    Error,
    AdminPostDiscountsDiscountReq
  >(
    [QUERY_KEY, "update", id, queryParams],
    (requestBody: AdminPostDiscountsDiscountReq) =>
      client.discounts.update(id, requestBody, queryParams),
    options
  )
}

export const useAdminDeleteDiscount = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminDiscountsDeleteRes>,
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
  return useMutation<Awaited<AdminDiscountsDeleteRes>, Error, void>(
    [QUERY_KEY, "delete", id],
    () => client.discounts.delete(id),
    options
  )
}

export const useAdminCreateDynamicCodeDiscount = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminDiscountsRes>,
    Error,
    AdminPostDiscountsDiscountDynamicCodesReq
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
    Awaited<AdminDiscountsRes>,
    Error,
    AdminPostDiscountsDiscountDynamicCodesReq
  >(
    [QUERY_KEY, "createDynamicCode", id],
    (requestBody: AdminPostDiscountsDiscountDynamicCodesReq) =>
      client.discounts.createDynamicCode(id, requestBody),
    options
  )
}

export const useAdminDeleteDynamicCodeDiscount = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminDiscountsRes>,
    Error,
    { code: string }
  > = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<AdminDiscountsRes>, Error, { code: string }>(
    [QUERY_KEY, "deleteDynamicCode", id],
    ({ code: code }: { code: string }) =>
      client.discounts.deleteDynamicCode(id, code),
    options
  )
}

export const useAdminAddRegionDiscount = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminDiscountsRes>,
    Error,
    { region_id: string }
  > = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<AdminDiscountsRes>, Error, { region_id: string }>(
    [QUERY_KEY, "addRegion", id],
    ({ region_id: regionId }: { region_id: string }) =>
      client.discounts.addRegion(id, regionId),
    options
  )
}

export const useAdminRemoveRegionDiscount = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminDiscountsRes>,
    Error,
    { region_id: string }
  > = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<AdminDiscountsRes>, Error, { region_id: string }>(
    [QUERY_KEY, "removeRegion", id],
    ({ region_id: regionId }: { region_id: string }) =>
      client.discounts.removeRegion(id, regionId),
    options
  )
}
