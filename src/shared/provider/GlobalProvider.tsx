import { useState, createContext } from 'react'

export const GlobalContext = createContext<any>('')

export const Provider = (props: { children?: React.ReactChild }) => {

  const [globalValue, setGlobalValue] = useState(GlobalContext)

  return (<GlobalContext.Provider
    value={[globalValue, setGlobalValue]}>
    {props.children}
  </GlobalContext.Provider>)
}