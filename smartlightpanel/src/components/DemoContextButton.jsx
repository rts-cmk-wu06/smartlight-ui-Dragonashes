import { useContext } from "react"
import { ButtonContext } from "../Context/ButtonContext"

const DemoContextButton = () => {
  const { setDemoValue } = useContext(ButtonContext)

  return <button onClick={() => { setDemoValue('Hej fra knappen') }}>UPD Context</button>
}

export default DemoContextButton