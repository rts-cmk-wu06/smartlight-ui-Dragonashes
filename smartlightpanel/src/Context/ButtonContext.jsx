import { useState, createContext } from "react"

export const ButtonContext = createContext()
function ButtonProvider({ children }) {
  // true false state
  const [demovalue, setDemoValue] = useState(false)

  demovalue && console.log(demovalue)
  return (
    <ButtonContext.Provider value={{ demovalue, setDemoValue }}>
      {children}
    </ButtonContext.Provider>
  )
}

export default ButtonProvider