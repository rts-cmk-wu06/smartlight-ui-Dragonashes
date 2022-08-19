const Converter = () => {

  function rgbtoxyzconvert(R, G, B) {
    var var_R = parseFloat(R / 255)        //R from 0 to 255
    var var_G = parseFloat(G / 255)        //G from 0 to 255
    var var_B = parseFloat(B / 255)        //B from 0 to 255

    if (var_R > 0.04045) var_R = ((var_R + 0.055) / 1.055) ^ 2.4
    else var_R = var_R / 12.92
    if (var_G > 0.04045) var_G = ((var_G + 0.055) / 1.055) ^ 2.4
    else var_G = var_G / 12.92
    if (var_B > 0.04045) var_B = ((var_B + 0.055) / 1.055) ^ 2.4
    else var_B = var_B / 12.92

    var_R = var_R * 100
    var_G = var_G * 100
    var_B = var_B * 100

    //Observer. = 2°, Illuminant = D65
    var X = var_R * 0.4124 + var_G * 0.3576 + var_B * 0.1805
    var Y = var_R * 0.2126 + var_G * 0.7152 + var_B * 0.0722
    var Z = var_R * 0.0193 + var_G * 0.1192 + var_B * 0.9505
    return [X, Y, Z]
  }

  function rgbtoxyconvert(R, G, B) {
    var var_R = parseFloat(R / 255)        //R from 0 to 255
    var var_G = parseFloat(G / 255)        //G from 0 to 255
    var var_B = parseFloat(B / 255)        //B from 0 to 255

    if (var_R > 0.04045) var_R = ((var_R + 0.055) / 1.055) ^ 2.4
    else var_R = var_R / 12.92
    if (var_G > 0.04045) var_G = ((var_G + 0.055) / 1.055) ^ 2.4
    else var_G = var_G / 12.92
    if (var_B > 0.04045) var_B = ((var_B + 0.055) / 1.055) ^ 2.4
    else var_B = var_B / 12.92

    var_R = var_R * 100
    var_G = var_G * 100
    var_B = var_B * 100

    //Observer. = 2°, Illuminant = D65
    var X = var_R * 0.4124 + var_G * 0.3576 + var_B * 0.1805
    var Y = var_R * 0.2126 + var_G * 0.7152 + var_B * 0.0722
    return [X, Y]
  }

  return (
    <div>
      <h1>rgb to xyz</h1>
      <p>{rgbtoxyzconvert(255, 0, 0)}</p>
      <h1>rgb to xy</h1>
      <p>{rgbtoxyconvert(255,0,0)}</p>
    </div>
  )
}

export default Converter