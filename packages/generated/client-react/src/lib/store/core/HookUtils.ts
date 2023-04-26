/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import {
  UseQueryOptions,
  UseMutationOptions,
  QueryKey,
} from "@tanstack/react-query"

export type UseQueryOptionsWrapper<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
> = Omit<
  UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  "queryKey" | "queryFn"
>

export type UseMutationOptionsWrapper<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown
> = Omit<
  UseMutationOptions<TData, TError, TVariables, TContext>,
  "mutationKey" | "mutationFn"
>

export const queryKeysFactory = (globalKey: string) => {
  return {
    all: [globalKey],
    lists: () => [globalKey],
    list: (query?: unknown) => [globalKey],
    details: () => [globalKey],
    detail: (id: unknown) => [globalKey],
  } as const
}
