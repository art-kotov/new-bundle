import React, { useContext } from "react";

export const StoreContext = React.createContext();

export function useStore() {
  return useContext(StoreContext);
}
