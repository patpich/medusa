/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
// import React, { createContext, ReactNode, useContext } from "react"
// import {
//   QueryClientProvider,
//   QueryClientProviderProps,
// } from "@tanstack/react-query"
// import { Medusa } from "@medusajs/client-js"
//
// interface MedusaContextState {
//   client: Medusa
// }
// const MedusaContext = createContext<MedusaContextState | null>(null)
//
// export const useMedusa = () => {
//   console.log("useMedusa")
//   const context = useContext(MedusaContext)
//   if (!context) {
//     throw new Error("useMedusa must be used within a MedusaProvider")
//   }
//   return context
// }
//
// interface MedusaProviderProps {
//   baseUrl: string
//   queryClientProviderProps: QueryClientProviderProps
//   children: ReactNode
//   /**
//    * Authentication token
//    */
//   apiKey?: string
//   /**
//    * PublishableApiKey identifier that defines the scope of resources
//    * available within the request
//    */
//   publishableApiKey?: string
// }
//
// export const MedusaProvider = ({
//   queryClientProviderProps,
//   baseUrl,
//   children,
// }: MedusaProviderProps) => {
//   const client = new Medusa({
//     BASE: baseUrl,
//     WITH_CREDENTIALS: true,
//   })
//   return (
//     <QueryClientProvider {...queryClientProviderProps}>
//       <MedusaContext.Provider value={{ client }}>
//         {children}
//       </MedusaContext.Provider>
//     </QueryClientProvider>
//   )
// }
