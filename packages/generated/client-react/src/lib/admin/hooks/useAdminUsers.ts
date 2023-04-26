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
import type { AdminCreateUserRequest } from "@medusajs/client-types"
import type { AdminDeleteUserRes } from "@medusajs/client-types"
import type { AdminResetPasswordRequest } from "@medusajs/client-types"
import type { AdminResetPasswordTokenRequest } from "@medusajs/client-types"
import type { AdminUpdateUserRequest } from "@medusajs/client-types"
import type { AdminUserRes } from "@medusajs/client-types"
import type { AdminUsersListRes } from "@medusajs/client-types"

const QUERY_KEY = "users"
export const adminUserKeys = queryKeysFactory(QUERY_KEY)

export const useAdminUsers = (
  options: UseQueryOptionsWrapper<Awaited<AdminUsersListRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminUsersListRes>, Error>(
    [QUERY_KEY, "list"],
    () => client.users.list(),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminCreateUser = (
  options: UseMutationOptionsWrapper<
    Awaited<AdminUserRes>,
    Error,
    AdminCreateUserRequest
  > = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<AdminUserRes>, Error, AdminCreateUserRequest>(
    [QUERY_KEY, "create"],
    (requestBody: AdminCreateUserRequest) => client.users.create(requestBody),
    options
  )
}

export const useAdminSendResetPasswordTokenUser = (
  options: UseMutationOptionsWrapper<
    Awaited<void>,
    Error,
    AdminResetPasswordTokenRequest
  > = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<void>, Error, AdminResetPasswordTokenRequest>(
    [QUERY_KEY, "sendResetPasswordToken"],
    (requestBody: AdminResetPasswordTokenRequest) =>
      client.users.sendResetPasswordToken(requestBody),
    options
  )
}

export const useAdminResetPasswordUser = (
  options: UseMutationOptionsWrapper<
    Awaited<AdminUserRes>,
    Error,
    AdminResetPasswordRequest
  > = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<AdminUserRes>, Error, AdminResetPasswordRequest>(
    [QUERY_KEY, "resetPassword"],
    (requestBody: AdminResetPasswordRequest) =>
      client.users.resetPassword(requestBody),
    options
  )
}

export const useAdminUser = (
  id: string,
  options: UseQueryOptionsWrapper<Awaited<AdminUserRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminUserRes>, Error>(
    [QUERY_KEY, "retrieve", id],
    () => client.users.retrieve(id),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminUpdateUser = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminUserRes>,
    Error,
    AdminUpdateUserRequest
  > = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<AdminUserRes>, Error, AdminUpdateUserRequest>(
    [QUERY_KEY, "update", id],
    (requestBody: AdminUpdateUserRequest) =>
      client.users.update(id, requestBody),
    options
  )
}

export const useAdminDeleteUser = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminDeleteUserRes>,
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
  return useMutation<Awaited<AdminDeleteUserRes>, Error, void>(
    [QUERY_KEY, "delete", id],
    () => client.users.delete(id),
    options
  )
}
