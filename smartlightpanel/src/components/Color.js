import { useState, useEffect } from "react"
import ColorConverter from "cie-rgb-color-converter"

const Color = (props) => {
  let xy = ColorConverter.rgbToXy(props.r, props.g, props.b)
  const [color, setColor] = useState([])

  useEffect(() => {
    fetch(
      "http://192.168.8.100/api/Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8/lights/6/state",
      {
        method: "PUT",
        body: JSON.stringify({
          xy: [color.x, color.y],
        }),
      }
    )
  }, [color])

  return (
    <div
      className="colorselect"
      onClick={() => {
        setColor(xy)
        console.log(xy)
      }}
      style={{
        // width: "10px",
        // height: "10px",
        // borderRadius: "50px",
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
      }}
    ></div>
  )
}

export default Color