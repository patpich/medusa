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
import type { AdminDeleteUploadsReq } from "@medusajs/client-types"
import type { AdminDeleteUploadsRes } from "@medusajs/client-types"
import type { AdminPostUploadsDownloadUrlReq } from "@medusajs/client-types"
import type { AdminUploadsDownloadUrlRes } from "@medusajs/client-types"
import type { AdminUploadsRes } from "@medusajs/client-types"

const QUERY_KEY = "uploads"
export const adminUploadKeys = queryKeysFactory(QUERY_KEY)

export const useAdminCreateUpload = (
  options: UseMutationOptionsWrapper<Awaited<AdminUploadsRes>, Error, any> = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<AdminUploadsRes>, Error, any>(
    [QUERY_KEY, "create"],
    (formData: any) => client.uploads.create(formData),
    options
  )
}

export const useAdminDeleteUpload = (
  options: UseMutationOptionsWrapper<
    Awaited<AdminDeleteUploadsRes>,
    Error,
    AdminDeleteUploadsReq
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
    Awaited<AdminDeleteUploadsRes>,
    Error,
    AdminDeleteUploadsReq
  >(
    [QUERY_KEY, "delete"],
    (requestBody: AdminDeleteUploadsReq) => client.uploads.delete(requestBody),
    options
  )
}

export const useAdminGetPresignedDownloadUrlUpload = (
  options: UseMutationOptionsWrapper<
    Awaited<AdminUploadsDownloadUrlRes>,
    Error,
    AdminPostUploadsDownloadUrlReq
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
    Awaited<AdminUploadsDownloadUrlRes>,
    Error,
    AdminPostUploadsDownloadUrlReq
  >(
    [QUERY_KEY, "getPresignedDownloadUrl"],
    (requestBody: AdminPostUploadsDownloadUrlReq) =>
      client.uploads.getPresignedDownloadUrl(requestBody),
    options
  )
}

export const useAdminCreateProtectedUpload = (
  options: UseMutationOptionsWrapper<Awaited<AdminUploadsRes>, Error, any> = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<AdminUploadsRes>, Error, any>(
    [QUERY_KEY, "createProtected"],
    (formData: any) => client.uploads.createProtected(formData),
    options
  )
}
