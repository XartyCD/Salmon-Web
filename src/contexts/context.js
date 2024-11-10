import { createContext, useContext } from "react"

export const AppContext = createContext()

console.log("Auth")

export const AppProvider = ({ children }) => {
  const value = {}

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useAuth() {
  return useContext(AppContext)
}
