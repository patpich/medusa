/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import {
  AdminGetVariantParams,
  AdminGetVariantsParams,
  AdminGetVariantsVariantInventoryRes,
  AdminVariantsListRes,
  AdminVariantsRes,
} from "@medusajs/client-types"
import type { CancelablePromise } from "../core/CancelablePromise"
import type { BaseHttpRequest } from "../core/BaseHttpRequest"

export class VariantsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * GetVariants
   * List Product Variants
   * Retrieves a list of Product Variants
   * @returns AdminVariantsListRes OK
   * @throws ApiError
   */
  public list(
    queryParams: AdminGetVariantsParams = {},
    customHeaders: Record<string, any> = {}
  ): CancelablePromise<AdminVariantsListRes> {
    return this.httpRequest.request({
      method: "GET",
      url: "/admin/variants",
      headers: customHeaders,
      query: queryParams,
      errors: {
        400: `Client Error or Multiple Errors`,
        401: `User is not authorized. Must log in first`,
        404: `Not Found Error`,
        409: `Invalid State Error`,
        422: `Invalid Request Error`,
        500: `Server Error`,
      },
    })
  }

  /**
   * GetVariantsVariant
   * Get a Product variant
   * Retrieves a Product variant.
   * @returns AdminVariantsRes OK
   * @throws ApiError
   */
  public retrieve(
    id: string,
    queryParams: AdminGetVariantParams = {},
    customHeaders: Record<string, any> = {}
  ): CancelablePromise<AdminVariantsRes> {
    return this.httpRequest.request({
      method: "GET",
      url: "/admin/variants/{id}",
      path: {
        id: id,
      },
      headers: customHeaders,
      query: queryParams,
      errors: {
        400: `Client Error or Multiple Errors`,
        401: `User is not authorized. Must log in first`,
        404: `Not Found Error`,
        409: `Invalid State Error`,
        422: `Invalid Request Error`,
        500: `Server Error`,
      },
    })
  }

  /**
   * GetVariantsVariantInventory
   * Get inventory of Variant.
   * Returns the available inventory of a Variant.
   * @returns AdminGetVariantsVariantInventoryRes OK
   * @throws ApiError
   */
  public getInventory(
    id: string,
    customHeaders: Record<string, any> = {}
  ): CancelablePromise<AdminGetVariantsVariantInventoryRes> {
    return this.httpRequest.request({
      method: "GET",
      url: "/admin/variants/{id}/inventory",
      path: {
        id: id,
      },
      headers: customHeaders,
      errors: {
        400: `Client Error or Multiple Errors`,
        401: `User is not authorized. Must log in first`,
        404: `Not Found Error`,
        409: `Invalid State Error`,
        422: `Invalid Request Error`,
        500: `Server Error`,
      },
    })
  }
}
