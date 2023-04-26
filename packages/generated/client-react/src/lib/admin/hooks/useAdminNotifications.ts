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
import type { AdminGetNotificationsParams } from "@medusajs/client-types"
import type { AdminNotificationsListRes } from "@medusajs/client-types"
import type { AdminNotificationsRes } from "@medusajs/client-types"
import type { AdminPostNotificationsNotificationResendReq } from "@medusajs/client-types"

const QUERY_KEY = "notifications"
export const adminNotificationKeys = queryKeysFactory(QUERY_KEY)

export const useAdminNotifications = (
  queryParams: AdminGetNotificationsParams = {},
  options: UseQueryOptionsWrapper<
    Awaited<AdminNotificationsListRes>,
    Error
  > = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminNotificationsListRes>, Error>(
    [QUERY_KEY, "list", queryParams],
    () => client.notifications.list(queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminResendNotification = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminNotificationsRes>,
    Error,
    AdminPostNotificationsNotificationResendReq
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
    Awaited<AdminNotificationsRes>,
    Error,
    AdminPostNotificationsNotificationResendReq
  >(
    [QUERY_KEY, "resend", id],
    (requestBody: AdminPostNotificationsNotificationResendReq) =>
      client.notifications.resend(id, requestBody),
    options
  )
}
