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
import type { AdminBatchJobListRes } from "@medusajs/client-types"
import type { AdminBatchJobRes } from "@medusajs/client-types"
import type { AdminGetBatchParams } from "@medusajs/client-types"
import type { AdminPostBatchesReq } from "@medusajs/client-types"

const QUERY_KEY = "batchJobs"
export const adminBatchJobKeys = queryKeysFactory(QUERY_KEY)

export const useAdminBatchJobs = (
  queryParams: AdminGetBatchParams = {},
  options: UseQueryOptionsWrapper<Awaited<AdminBatchJobListRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminBatchJobListRes>, Error>(
    [QUERY_KEY, "list", queryParams],
    () => client.batchJobs.list(queryParams),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminCreateBatchJob = (
  options: UseMutationOptionsWrapper<
    Awaited<AdminBatchJobRes>,
    Error,
    AdminPostBatchesReq
  > = {}
) => {
  const { client } = useMedusaAdmin()
  if (!options.onSuccess) {
    const queryClient = useQueryClient()
    options.onSuccess = async () => {
      await queryClient.invalidateQueries([QUERY_KEY])
    }
  }
  return useMutation<Awaited<AdminBatchJobRes>, Error, AdminPostBatchesReq>(
    [QUERY_KEY, "create"],
    (requestBody: AdminPostBatchesReq) => client.batchJobs.create(requestBody),
    options
  )
}

export const useAdminBatchJob = (
  id: string,
  options: UseQueryOptionsWrapper<Awaited<AdminBatchJobRes>, Error> = {}
) => {
  const { client } = useMedusaAdmin()
  const { data, ...rest } = useQuery<Awaited<AdminBatchJobRes>, Error>(
    [QUERY_KEY, "retrieve", id],
    () => client.batchJobs.retrieve(id),
    options
  )
  return { ...data, ...rest } as const
}

export const useAdminCancelBatchJob = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminBatchJobRes>,
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
  return useMutation<Awaited<AdminBatchJobRes>, Error, void>(
    [QUERY_KEY, "cancel", id],
    () => client.batchJobs.cancel(id),
    options
  )
}

export const useAdminConfirmBatchJob = (
  id: string,
  options: UseMutationOptionsWrapper<
    Awaited<AdminBatchJobRes>,
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
  return useMutation<Awaited<AdminBatchJobRes>, Error, void>(
    [QUERY_KEY, "confirm", id],
    () => client.batchJobs.confirm(id),
    options
  )
}
