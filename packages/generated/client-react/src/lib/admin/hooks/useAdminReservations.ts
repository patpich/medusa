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
import type { AdminGetReservationsParams } from "@medusajs/client-types"
import type { AdminPostReservationsReq } from "@medusajs/client-types"
import type { AdminPostReservationsReservationReq } from "@medusajs/client-types"
import type { AdminReservationsDeleteRes } from "@medusajs/client-types"
import type { AdminReservationsListRes } from "@medusajs/client-types"
import type { AdminReservationsRes } from "@medusajs/client-types"

const QUERY_KEY = "reservations"
export const adminReservationKeys = queryKeysFactory(QUERY_KEY)

export const useAdminReservations = (
  queryParams: AdminGetReservationsParams = {},
  options: UseQueryOptionsWrapper<Awaited<AdminReservationsListRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminReservationsListRes>, Error>(
    [QUERY_KEY, "list", queryParams],
    () => client.reservations.list(queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminCreateReservation = (
  options: UseMutationOptionsWrapper<
    Awaited<AdminReservationsRes>,
    Error,
    AdminPostReservationsReq
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
    Awaited<AdminReservationsRes>,
    Error,
    AdminPostReservationsReq
  >(
    [QUERY_KEY, "create"],
    (requestBody: AdminPostReservationsReq) =>
      client.reservations.create(requestBody),
    options
  )
}

export const useAdminReservation = (
  id: string,
  options: UseQueryOptionsWrapper<Awaited<AdminReservationsRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminReservationsRes>, Error>(
    [QUERY_KEY, "retrieve", id],
    () => client.reservations.retrieve(id),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminUpdateReservation = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminReservationsRes>,
    Error,
    AdminPostReservationsReservationReq
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
    Awaited<AdminReservationsRes>,
    Error,
    AdminPostReservationsReservationReq
  >(
    [QUERY_KEY, "update", id],
    (requestBody: AdminPostReservationsReservationReq) =>
      client.reservations.update(id, requestBody),
    options
  )
}

export const useAdminDeleteReservation = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminReservationsDeleteRes>,
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
  return useMutation<Awaited<AdminReservationsDeleteRes>, Error, void>(
    [QUERY_KEY, "delete", id],
    () => client.reservations.delete(id),
    options
  )
}
