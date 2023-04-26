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
import type { AdminDeleteShippingProfileRes } from "@medusajs/client-types"
import type { AdminPostShippingProfilesProfileReq } from "@medusajs/client-types"
import type { AdminPostShippingProfilesReq } from "@medusajs/client-types"
import type { AdminShippingProfilesListRes } from "@medusajs/client-types"
import type { AdminShippingProfilesRes } from "@medusajs/client-types"

const QUERY_KEY = "shippingProfiles"
export const adminShippingProfileKeys = queryKeysFactory(QUERY_KEY)

export const useAdminShippingProfiles = (
  options: UseQueryOptionsWrapper<
    Awaited<AdminShippingProfilesListRes>,
    Error
  > = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<
    Awaited<AdminShippingProfilesListRes>,
    Error
  >([QUERY_KEY, "list"], () => client.shippingProfiles.list(), options)
  return { ...data, ...rest } as const
}

export const useAdminCreateShippingProfile = (
  options: UseMutationOptionsWrapper<
    Awaited<AdminShippingProfilesRes>,
    Error,
    AdminPostShippingProfilesReq
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
    Awaited<AdminShippingProfilesRes>,
    Error,
    AdminPostShippingProfilesReq
  >(
    [QUERY_KEY, "create"],
    (requestBody: AdminPostShippingProfilesReq) =>
      client.shippingProfiles.create(requestBody),
    options
  )
}

export const useAdminShippingProfile = (
  id: string,
  options: UseQueryOptionsWrapper<Awaited<AdminShippingProfilesRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminShippingProfilesRes>, Error>(
    [QUERY_KEY, "retrieve", id],
    () => client.shippingProfiles.retrieve(id),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminUpdateShippingProfile = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminShippingProfilesRes>,
    Error,
    AdminPostShippingProfilesProfileReq
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
    Awaited<AdminShippingProfilesRes>,
    Error,
    AdminPostShippingProfilesProfileReq
  >(
    [QUERY_KEY, "update", id],
    (requestBody: AdminPostShippingProfilesProfileReq) =>
      client.shippingProfiles.update(id, requestBody),
    options
  )
}

export const useAdminDeleteShippingProfile = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminDeleteShippingProfileRes>,
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
  return useMutation<Awaited<AdminDeleteShippingProfileRes>, Error, void>(
    [QUERY_KEY, "delete", id],
    () => client.shippingProfiles.delete(id),
    options
  )
}
