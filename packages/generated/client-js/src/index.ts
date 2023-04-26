import {
  CancelablePromise as CancelablePromiseStore,
  MedusaStore,
} from "./lib/store"
import {
  CancelablePromise as CancelablePromiseAdmin,
  MedusaAdmin,
  OpenAPIConfig,
} from "./lib/admin"

export type Response<T> =
  | Awaited<CancelablePromiseStore<T>>
  | Awaited<CancelablePromiseAdmin<T>>

export interface LegacyConfig {
  baseUrl: string
  maxRetries: number
  apiKey?: string
  publishableApiKey?: string
}

export interface Config extends Partial<OpenAPIConfig> {}

export class Medusa extends MedusaStore {
  admin: MedusaAdmin

  constructor(config: Config | LegacyConfig) {
    if (Medusa.isLegacyConfig(config)) {
      config = Medusa.convertLegacyConfig(config)
    }
    config.WITH_CREDENTIALS = true
    super(config)
    this.admin = new MedusaAdmin(config)
  }

  static isLegacyConfig(config: Config | LegacyConfig): config is LegacyConfig {
    return (config as LegacyConfig).baseUrl !== undefined
  }

  static convertLegacyConfig(legacyConfig: LegacyConfig): Config {
    const config: Config = {}
    const HEADERS: Record<string, string> = {}
    if (legacyConfig.baseUrl) {
      config.BASE = legacyConfig.baseUrl
    }
    if (legacyConfig.maxRetries) {
      console.warn(`maxRetries is not supported anymore.`)
    }
    if (legacyConfig.apiKey) {
      config.TOKEN = legacyConfig.apiKey
    }
    if (legacyConfig.publishableApiKey) {
      HEADERS["x-publishable-api-key"] = legacyConfig.publishableApiKey
    }
    config.HEADERS = HEADERS
    return config
  }
}

export { MedusaStore } from "./lib/store"
export { MedusaAdmin } from "./lib/admin"
