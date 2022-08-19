/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react"

import lightbulb2 from '../assets/page1/lightbulb2.svg'
import settings2 from '../assets/page1/settings2.svg'
import settingshouse2 from '../assets/page1/settingshouse2.svg'

const Styles = css``

const Footer = () => {
  return (
    <div css={Styles}>
      <hr className="linestyle" />
      <div className="footergrid">
        <div><img src={lightbulb2} className="footerimg" /></div>
        <div><img src={settingshouse2} className="footerimg" /></div>
        <div><img src={settings2} className="footerimg" /></div>
      </div>
    </div>
  )
}

export default Footer