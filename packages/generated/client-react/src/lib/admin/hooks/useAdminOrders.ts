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
import type { AdminGetOrdersOrderParams } from "@medusajs/client-types"
import type { AdminGetOrdersParams } from "@medusajs/client-types"
import type { AdminOrdersListRes } from "@medusajs/client-types"
import type { AdminOrdersOrderLineItemReservationReq } from "@medusajs/client-types"
import type { AdminOrdersRes } from "@medusajs/client-types"
import type { AdminPostOrdersClaimCancel } from "@medusajs/client-types"
import type { AdminPostOrdersClaimFulfillmentsCancelParams } from "@medusajs/client-types"
import type { AdminPostOrdersOrderArchiveParams } from "@medusajs/client-types"
import type { AdminPostOrdersOrderCancel } from "@medusajs/client-types"
import type { AdminPostOrdersOrderCaptureParams } from "@medusajs/client-types"
import type { AdminPostOrdersOrderClaimsClaimFulfillmentsParams } from "@medusajs/client-types"
import type { AdminPostOrdersOrderClaimsClaimFulfillmentsReq } from "@medusajs/client-types"
import type { AdminPostOrdersOrderClaimsClaimParams } from "@medusajs/client-types"
import type { AdminPostOrdersOrderClaimsClaimReq } from "@medusajs/client-types"
import type { AdminPostOrdersOrderClaimsClaimShipmentsParams } from "@medusajs/client-types"
import type { AdminPostOrdersOrderClaimsClaimShipmentsReq } from "@medusajs/client-types"
import type { AdminPostOrdersOrderClaimsParams } from "@medusajs/client-types"
import type { AdminPostOrdersOrderClaimsReq } from "@medusajs/client-types"
import type { AdminPostOrdersOrderCompleteParams } from "@medusajs/client-types"
import type { AdminPostOrdersOrderFulfillementsCancelParams } from "@medusajs/client-types"
import type { AdminPostOrdersOrderFulfillmentsParams } from "@medusajs/client-types"
import type { AdminPostOrdersOrderFulfillmentsReq } from "@medusajs/client-types"
import type { AdminPostOrdersOrderParams } from "@medusajs/client-types"
import type { AdminPostOrdersOrderRefundsParams } from "@medusajs/client-types"
import type { AdminPostOrdersOrderRefundsReq } from "@medusajs/client-types"
import type { AdminPostOrdersOrderReq } from "@medusajs/client-types"
import type { AdminPostOrdersOrderReturnsParams } from "@medusajs/client-types"
import type { AdminPostOrdersOrderReturnsReq } from "@medusajs/client-types"
import type { AdminPostOrdersOrderShipmentParams } from "@medusajs/client-types"
import type { AdminPostOrdersOrderShipmentReq } from "@medusajs/client-types"
import type { AdminPostOrdersOrderShippingMethodsParams } from "@medusajs/client-types"
import type { AdminPostOrdersOrderShippingMethodsReq } from "@medusajs/client-types"
import type { AdminPostOrdersOrderSwapsParams } from "@medusajs/client-types"
import type { AdminPostOrdersOrderSwapsReq } from "@medusajs/client-types"
import type { AdminPostOrdersOrderSwapsSwapFulfillmentsParams } from "@medusajs/client-types"
import type { AdminPostOrdersOrderSwapsSwapFulfillmentsReq } from "@medusajs/client-types"
import type { AdminPostOrdersOrderSwapsSwapProcessPaymentParams } from "@medusajs/client-types"
import type { AdminPostOrdersOrderSwapsSwapShipmentsParams } from "@medusajs/client-types"
import type { AdminPostOrdersOrderSwapsSwapShipmentsReq } from "@medusajs/client-types"
import type { AdminPostOrdersSwapCancelParams } from "@medusajs/client-types"
import type { AdminPostOrdersSwapFulfillementsCancelParams } from "@medusajs/client-types"
import type { AdminPostReservationsReq } from "@medusajs/client-types"
import type { AdminReservationsListRes } from "@medusajs/client-types"

const QUERY_KEY = "orders"
export const adminOrderKeys = queryKeysFactory(QUERY_KEY)

export const useAdminOrders = (
  queryParams: AdminGetOrdersParams = {},
  options: UseQueryOptionsWrapper<Awaited<AdminOrdersListRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminOrdersListRes>, Error>(
    [QUERY_KEY, "list", queryParams],
    () => client.orders.list(queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminOrder = (
  id: string,
  queryParams: AdminGetOrdersOrderParams = {},
  options: UseQueryOptionsWrapper<Awaited<AdminOrdersRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminOrdersRes>, Error>(
    [QUERY_KEY, "retrieve", id, queryParams],
    () => client.orders.retrieve(id, queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminUpdateOrder = (
  id: string,
  queryParams: AdminPostOrdersOrderParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminOrdersRes>,
    Error,
    AdminPostOrdersOrderReq
  > = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<AdminOrdersRes>, Error, AdminPostOrdersOrderReq>(
    [QUERY_KEY, "update", id, queryParams],
    (requestBody: AdminPostOrdersOrderReq) =>
      client.orders.update(id, requestBody, queryParams),
    options
  )
}

export const useAdminArchiveOrder = (
  id: string,
  queryParams: AdminPostOrdersOrderArchiveParams = {},
  options: UseMutationOptionsWrapper<Awaited<AdminOrdersRes>, Error, void> = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<AdminOrdersRes>, Error, void>(
    [QUERY_KEY, "archive", id, queryParams],
    () => client.orders.archive(id, queryParams),
    options
  )
}

export const useAdminCancelOrder = (
  id: string,
  queryParams: AdminPostOrdersOrderCancel = {},
  options: UseMutationOptionsWrapper<Awaited<AdminOrdersRes>, Error, void> = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<AdminOrdersRes>, Error, void>(
    [QUERY_KEY, "cancel", id, queryParams],
    () => client.orders.cancel(id, queryParams),
    options
  )
}

export const useAdminCapturePaymentOrder = (
  id: string,
  queryParams: AdminPostOrdersOrderCaptureParams = {},
  options: UseMutationOptionsWrapper<Awaited<AdminOrdersRes>, Error, void> = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<AdminOrdersRes>, Error, void>(
    [QUERY_KEY, "capturePayment", id, queryParams],
    () => client.orders.capturePayment(id, queryParams),
    options
  )
}

export const useAdminCreateClaimOrder = (
  id: string,
  queryParams: AdminPostOrdersOrderClaimsParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminOrdersRes>,
    Error,
    AdminPostOrdersOrderClaimsReq
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
    Awaited<AdminOrdersRes>,
    Error,
    AdminPostOrdersOrderClaimsReq
  >(
    [QUERY_KEY, "createClaim", id, queryParams],
    (requestBody: AdminPostOrdersOrderClaimsReq) =>
      client.orders.createClaim(id, requestBody, queryParams),
    options
  )
}

export const useAdminUpdateClaimOrder = (
  id: string,
  queryParams: AdminPostOrdersOrderClaimsClaimParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminOrdersRes>,
    Error,
    { claim_id: string } & AdminPostOrdersOrderClaimsClaimReq
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
    Awaited<AdminOrdersRes>,
    Error,
    { claim_id: string } & AdminPostOrdersOrderClaimsClaimReq
  >(
    [QUERY_KEY, "updateClaim", id, queryParams],
    ({
      claim_id: claimId,
      ...requestBody
    }: { claim_id: string } & AdminPostOrdersOrderClaimsClaimReq) =>
      client.orders.updateClaim(id, claimId, requestBody, queryParams),
    options
  )
}

export const useAdminCancelClaimOrder = (
  id: string,
  queryParams: AdminPostOrdersClaimCancel = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminOrdersRes>,
    Error,
    { claim_id: string }
  > = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<AdminOrdersRes>, Error, { claim_id: string }>(
    [QUERY_KEY, "cancelClaim", id, queryParams],
    ({ claim_id: claimId }: { claim_id: string }) =>
      client.orders.cancelClaim(id, claimId, queryParams),
    options
  )
}

export const useAdminFulfillClaimOrder = (
  id: string,
  queryParams: AdminPostOrdersOrderClaimsClaimFulfillmentsParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminOrdersRes>,
    Error,
    { claim_id: string } & AdminPostOrdersOrderClaimsClaimFulfillmentsReq
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
    Awaited<AdminOrdersRes>,
    Error,
    { claim_id: string } & AdminPostOrdersOrderClaimsClaimFulfillmentsReq
  >(
    [QUERY_KEY, "fulfillClaim", id, queryParams],
    ({
      claim_id: claimId,
      ...requestBody
    }: { claim_id: string } & AdminPostOrdersOrderClaimsClaimFulfillmentsReq) =>
      client.orders.fulfillClaim(id, claimId, requestBody, queryParams),
    options
  )
}

export const useAdminCancelClaimFulfillmentOrder = (
  id: string,
  queryParams: AdminPostOrdersClaimFulfillmentsCancelParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminOrdersRes>,
    Error,
    { claim_id: string; fulfillment_id: string }
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
    Awaited<AdminOrdersRes>,
    Error,
    { claim_id: string; fulfillment_id: string }
  >(
    [QUERY_KEY, "cancelClaimFulfillment", id, queryParams],
    ({
      claim_id: claimId,
      fulfillment_id: fulfillmentId,
    }: {
      claim_id: string
      fulfillment_id: string
    }) =>
      client.orders.cancelClaimFulfillment(
        id,
        claimId,
        fulfillmentId,
        queryParams
      ),
    options
  )
}

export const useAdminCreateClaimShipmentOrder = (
  id: string,
  queryParams: AdminPostOrdersOrderClaimsClaimShipmentsParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminOrdersRes>,
    Error,
    { claim_id: string } & AdminPostOrdersOrderClaimsClaimShipmentsReq
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
    Awaited<AdminOrdersRes>,
    Error,
    { claim_id: string } & AdminPostOrdersOrderClaimsClaimShipmentsReq
  >(
    [QUERY_KEY, "createClaimShipment", id, queryParams],
    ({
      claim_id: claimId,
      ...requestBody
    }: { claim_id: string } & AdminPostOrdersOrderClaimsClaimShipmentsReq) =>
      client.orders.createClaimShipment(id, claimId, requestBody, queryParams),
    options
  )
}

export const useAdminCompleteOrder = (
  id: string,
  queryParams: AdminPostOrdersOrderCompleteParams = {},
  options: UseMutationOptionsWrapper<Awaited<AdminOrdersRes>, Error, void> = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<AdminOrdersRes>, Error, void>(
    [QUERY_KEY, "complete", id, queryParams],
    () => client.orders.complete(id, queryParams),
    options
  )
}

export const useAdminCreateFulfillmentOrder = (
  id: string,
  queryParams: AdminPostOrdersOrderFulfillmentsParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminOrdersRes>,
    Error,
    AdminPostOrdersOrderFulfillmentsReq
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
    Awaited<AdminOrdersRes>,
    Error,
    AdminPostOrdersOrderFulfillmentsReq
  >(
    [QUERY_KEY, "createFulfillment", id, queryParams],
    (requestBody: AdminPostOrdersOrderFulfillmentsReq) =>
      client.orders.createFulfillment(id, requestBody, queryParams),
    options
  )
}

export const useAdminCancelFulfillmentOrder = (
  id: string,
  queryParams: AdminPostOrdersOrderFulfillementsCancelParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminOrdersRes>,
    Error,
    { fulfillment_id: string }
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
    Awaited<AdminOrdersRes>,
    Error,
    { fulfillment_id: string }
  >(
    [QUERY_KEY, "cancelFulfillment", id, queryParams],
    ({ fulfillment_id: fulfillmentId }: { fulfillment_id: string }) =>
      client.orders.cancelFulfillment(id, fulfillmentId, queryParams),
    options
  )
}

export const useAdminPostOrdersOrderLineItemReservationsOrders = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminPostReservationsReq>,
    Error,
    { line_item_id: string } & AdminOrdersOrderLineItemReservationReq
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
    Awaited<AdminPostReservationsReq>,
    Error,
    { line_item_id: string } & AdminOrdersOrderLineItemReservationReq
  >(
    [QUERY_KEY, "postOrdersOrderLineItemReservations", id],
    ({
      line_item_id: lineItemId,
      ...requestBody
    }: { line_item_id: string } & AdminOrdersOrderLineItemReservationReq) =>
      client.orders.postOrdersOrderLineItemReservations(
        id,
        lineItemId,
        requestBody
      ),
    options
  )
}

export const useAdminRefundPaymentOrder = (
  id: string,
  queryParams: AdminPostOrdersOrderRefundsParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminOrdersRes>,
    Error,
    AdminPostOrdersOrderRefundsReq
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
    Awaited<AdminOrdersRes>,
    Error,
    AdminPostOrdersOrderRefundsReq
  >(
    [QUERY_KEY, "refundPayment", id, queryParams],
    (requestBody: AdminPostOrdersOrderRefundsReq) =>
      client.orders.refundPayment(id, requestBody, queryParams),
    options
  )
}

export const useAdminGetOrdersOrderReservationsOrders = (
  id: string,
  queryParams: {
    /**
     * How many reservations to skip before the results.
     */
    offset?: number
    /**
     * Limit the number of reservations returned.
     */
    limit?: number
  } = {},
  options: UseQueryOptionsWrapper<Awaited<AdminReservationsListRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminReservationsListRes>, Error>(
    [QUERY_KEY, "getOrdersOrderReservations", id, queryParams],
    () => client.orders.getOrdersOrderReservations(id, queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminRequestReturnOrder = (
  id: string,
  queryParams: AdminPostOrdersOrderReturnsParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminOrdersRes>,
    Error,
    AdminPostOrdersOrderReturnsReq
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
    Awaited<AdminOrdersRes>,
    Error,
    AdminPostOrdersOrderReturnsReq
  >(
    [QUERY_KEY, "requestReturn", id, queryParams],
    (requestBody: AdminPostOrdersOrderReturnsReq) =>
      client.orders.requestReturn(id, requestBody, queryParams),
    options
  )
}

export const useAdminCreateShipmentOrder = (
  id: string,
  queryParams: AdminPostOrdersOrderShipmentParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminOrdersRes>,
    Error,
    AdminPostOrdersOrderShipmentReq
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
    Awaited<AdminOrdersRes>,
    Error,
    AdminPostOrdersOrderShipmentReq
  >(
    [QUERY_KEY, "createShipment", id, queryParams],
    (requestBody: AdminPostOrdersOrderShipmentReq) =>
      client.orders.createShipment(id, requestBody, queryParams),
    options
  )
}

export const useAdminAddShippingMethodOrder = (
  id: string,
  queryParams: AdminPostOrdersOrderShippingMethodsParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminOrdersRes>,
    Error,
    AdminPostOrdersOrderShippingMethodsReq
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
    Awaited<AdminOrdersRes>,
    Error,
    AdminPostOrdersOrderShippingMethodsReq
  >(
    [QUERY_KEY, "addShippingMethod", id, queryParams],
    (requestBody: AdminPostOrdersOrderShippingMethodsReq) =>
      client.orders.addShippingMethod(id, requestBody, queryParams),
    options
  )
}

export const useAdminCreateSwapOrder = (
  id: string,
  queryParams: AdminPostOrdersOrderSwapsParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminOrdersRes>,
    Error,
    AdminPostOrdersOrderSwapsReq
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
    Awaited<AdminOrdersRes>,
    Error,
    AdminPostOrdersOrderSwapsReq
  >(
    [QUERY_KEY, "createSwap", id, queryParams],
    (requestBody: AdminPostOrdersOrderSwapsReq) =>
      client.orders.createSwap(id, requestBody, queryParams),
    options
  )
}

export const useAdminCancelSwapOrder = (
  id: string,
  queryParams: AdminPostOrdersSwapCancelParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminOrdersRes>,
    Error,
    { swap_id: string }
  > = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<AdminOrdersRes>, Error, { swap_id: string }>(
    [QUERY_KEY, "cancelSwap", id, queryParams],
    ({ swap_id: swapId }: { swap_id: string }) =>
      client.orders.cancelSwap(id, swapId, queryParams),
    options
  )
}

export const useAdminFulfillSwapOrder = (
  id: string,
  queryParams: AdminPostOrdersOrderSwapsSwapFulfillmentsParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminOrdersRes>,
    Error,
    { swap_id: string } & AdminPostOrdersOrderSwapsSwapFulfillmentsReq
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
    Awaited<AdminOrdersRes>,
    Error,
    { swap_id: string } & AdminPostOrdersOrderSwapsSwapFulfillmentsReq
  >(
    [QUERY_KEY, "fulfillSwap", id, queryParams],
    ({
      swap_id: swapId,
      ...requestBody
    }: { swap_id: string } & AdminPostOrdersOrderSwapsSwapFulfillmentsReq) =>
      client.orders.fulfillSwap(id, swapId, requestBody, queryParams),
    options
  )
}

export const useAdminCancelSwapFulfillmentOrder = (
  id: string,
  queryParams: AdminPostOrdersSwapFulfillementsCancelParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminOrdersRes>,
    Error,
    { swap_id: string; fulfillment_id: string }
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
    Awaited<AdminOrdersRes>,
    Error,
    { swap_id: string; fulfillment_id: string }
  >(
    [QUERY_KEY, "cancelSwapFulfillment", id, queryParams],
    ({
      swap_id: swapId,
      fulfillment_id: fulfillmentId,
    }: {
      swap_id: string
      fulfillment_id: string
    }) =>
      client.orders.cancelSwapFulfillment(
        id,
        swapId,
        fulfillmentId,
        queryParams
      ),
    options
  )
}

export const useAdminProcessSwapPaymentOrder = (
  id: string,
  queryParams: AdminPostOrdersOrderSwapsSwapProcessPaymentParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminOrdersRes>,
    Error,
    { swap_id: string }
  > = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<AdminOrdersRes>, Error, { swap_id: string }>(
    [QUERY_KEY, "processSwapPayment", id, queryParams],
    ({ swap_id: swapId }: { swap_id: string }) =>
      client.orders.processSwapPayment(id, swapId, queryParams),
    options
  )
}

export const useAdminCreateSwapShipmentOrder = (
  id: string,
  queryParams: AdminPostOrdersOrderSwapsSwapShipmentsParams = {},
  options: UseMutationOptionsWrapper<
    Awaited<AdminOrdersRes>,
    Error,
    { swap_id: string } & AdminPostOrdersOrderSwapsSwapShipmentsReq
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
    Awaited<AdminOrdersRes>,
    Error,
    { swap_id: string } & AdminPostOrdersOrderSwapsSwapShipmentsReq
  >(
    [QUERY_KEY, "createSwapShipment", id, queryParams],
    ({
      swap_id: swapId,
      ...requestBody
    }: { swap_id: string } & AdminPostOrdersOrderSwapsSwapShipmentsReq) =>
      client.orders.createSwapShipment(id, swapId, requestBody, queryParams),
    options
  )
}
