import { useContext } from "react"
import { ButtonContext } from "../Context/ButtonContext"

const TextFromContext = () => {
  const { demovalue } = useContext(ButtonContext)

  return (
    <div>{demovalue}</div>
  )
}

export default TextFromContext