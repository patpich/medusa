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
import type { AdminGetNotesParams } from "@medusajs/client-types"
import type { AdminNotesDeleteRes } from "@medusajs/client-types"
import type { AdminNotesListRes } from "@medusajs/client-types"
import type { AdminNotesRes } from "@medusajs/client-types"
import type { AdminPostNotesNoteReq } from "@medusajs/client-types"
import type { AdminPostNotesReq } from "@medusajs/client-types"

const QUERY_KEY = "notes"
export const adminNoteKeys = queryKeysFactory(QUERY_KEY)

export const useAdminNotes = (
  queryParams: AdminGetNotesParams = {},
  options: UseQueryOptionsWrapper<Awaited<AdminNotesListRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminNotesListRes>, Error>(
    [QUERY_KEY, "list", queryParams],
    () => client.notes.list(queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminCreateNote = (
  options: UseMutationOptionsWrapper<
    Awaited<AdminNotesRes>,
    Error,
    AdminPostNotesReq
  > = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<AdminNotesRes>, Error, AdminPostNotesReq>(
    [QUERY_KEY, "create"],
    (requestBody: AdminPostNotesReq) => client.notes.create(requestBody),
    options
  )
}

export const useAdminNote = (
  id: string,
  options: UseQueryOptionsWrapper<Awaited<AdminNotesRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminNotesRes>, Error>(
    [QUERY_KEY, "retrieve", id],
    () => client.notes.retrieve(id),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminUpdateNote = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminNotesRes>,
    Error,
    AdminPostNotesNoteReq
  > = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<AdminNotesRes>, Error, AdminPostNotesNoteReq>(
    [QUERY_KEY, "update", id],
    (requestBody: AdminPostNotesNoteReq) =>
      client.notes.update(id, requestBody),
    options
  )
}

export const useAdminDeleteNote = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminNotesDeleteRes>,
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
  return useMutation<Awaited<AdminNotesDeleteRes>, Error, void>(
    [QUERY_KEY, "delete", id],
    () => client.notes.delete(id),
    options
  )
}
