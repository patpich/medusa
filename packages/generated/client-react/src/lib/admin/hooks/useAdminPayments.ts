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
import type { AdminPaymentRes } from "@medusajs/client-types"
import type { AdminPostPaymentRefundsReq } from "@medusajs/client-types"
import type { AdminRefundRes } from "@medusajs/client-types"
import type { GetPaymentsParams } from "@medusajs/client-types"

const QUERY_KEY = "payments"
export const adminPaymentKeys = queryKeysFactory(QUERY_KEY)

export const useAdminPayment = (
  id: string,
  options: UseQueryOptionsWrapper<Awaited<AdminPaymentRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminPaymentRes>, Error>(
    [QUERY_KEY, "retrieve", id],
    () => client.payments.retrieve(id),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminCapturePaymentPayment = (
  id: string,
  options: UseMutationOptionsWrapper<Awaited<AdminPaymentRes>, Error, void> = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<AdminPaymentRes>, Error, void>(
    [QUERY_KEY, "capturePayment", id],
    () => client.payments.capturePayment(id),
    options
  )
}

export const useAdminRefundPaymentPayment = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminRefundRes>,
    Error,
    AdminPostPaymentRefundsReq
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
    Awaited<AdminRefundRes>,
    Error,
    AdminPostPaymentRefundsReq
  >(
    [QUERY_KEY, "refundPayment", id],
    (requestBody: AdminPostPaymentRefundsReq) =>
      client.payments.refundPayment(id, requestBody),
    options
  )
}
