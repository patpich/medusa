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
import type { AdminInviteDeleteRes } from "@medusajs/client-types"
import type { AdminListInvitesRes } from "@medusajs/client-types"
import type { AdminPostInvitesInviteAcceptReq } from "@medusajs/client-types"
import type { AdminPostInvitesReq } from "@medusajs/client-types"

const QUERY_KEY = "invites"
export const adminInviteKeys = queryKeysFactory(QUERY_KEY)

export const useAdminInvites = (
  options: UseQueryOptionsWrapper<Awaited<AdminListInvitesRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminListInvitesRes>, Error>(
    [QUERY_KEY, "list"],
    () => client.invites.list(),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminCreateInvite = (
  options: UseMutationOptionsWrapper<
    Awaited<any>,
    Error,
    AdminPostInvitesReq
  > = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<any>, Error, AdminPostInvitesReq>(
    [QUERY_KEY, "create"],
    (requestBody: AdminPostInvitesReq) => client.invites.create(requestBody),
    options
  )
}

export const useAdminAcceptInvite = (
  options: UseMutationOptionsWrapper<
    Awaited<any>,
    Error,
    AdminPostInvitesInviteAcceptReq
  > = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<any>, Error, AdminPostInvitesInviteAcceptReq>(
    [QUERY_KEY, "accept"],
    (requestBody: AdminPostInvitesInviteAcceptReq) =>
      client.invites.accept(requestBody),
    options
  )
}

export const useAdminDeleteInvite = (
  inviteId: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminInviteDeleteRes>,
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
  return useMutation<Awaited<AdminInviteDeleteRes>, Error, void>(
    [QUERY_KEY, "delete", inviteId],
    () => client.invites.delete(inviteId),
    options
  )
}

export const useAdminResendInvite = (
  inviteId: string,
  options: UseMutationOptionsWrapper<Awaited<any>, Error, void> = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<any>, Error, void>(
    [QUERY_KEY, "resend", inviteId],
    () => client.invites.resend(inviteId),
    options
  )
}
