import arrow2 from '../assets/page2/arrow2.svg'
import lamp2 from '../assets/page2/lamp2.svg'
import lightbulb3_2 from '../assets/page2/lightbulb3_2.svg'
import lightbulb4_2 from '../assets/page2/lightbulb4_2.svg'
import lightbulb5_2 from '../assets/page2/lightbulb5_2.svg'
import pctable2 from '../assets/page2/pctable2.svg'
import sleeper2 from '../assets/page2/sleeper2.svg'
import switch2 from '../assets/page2/switch2.svg'

import { useContext, useState, useEffect, useMemo } from "react"
import Color from "../components/Color"
import _ from "lodash"

import TextFromContext from '../components/TextFromContext'
import DemoContextButton from '../components/DemoContextButton'
import { ButtonContext } from '../Context/ButtonContext'


const Bedroom = () => {

  const { demovalue, setDemoValue } = useContext(ButtonContext)
  // console.log(demovalue)

  function upddemovalue() {
    setDemoValue(!demovalue)
  }

  // individuelt lys
  const [light, setlight] = useState(false)
  useEffect(() => {
    fetch(
      "http://192.168.8.100/api/Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8/lights/6/state",
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          on: light
        })
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }, [light])

  console.log(light)

  // soveværelse
  const [sovevaerelse, setsovevaerelse] = useState(false)
  useEffect(() => {
    var id = 21
    var url = "http://192.168.8.100/api/Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8/groups/" + id + "/action"
    fetch(
      url,
      {
        method: "PUT",
        headers: {
          'content-Type': 'application/json'
        },
        body: JSON.stringify({
          on: sovevaerelse
        })
      })
  }, [sovevaerelse])

  // bad
  const [bad, setbad] = useState(false)
  useEffect(() => {
    var id = 8
    var url = "http://192.168.8.100/api/Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8/groups/" + id + "/action"
    fetch(
      url,
      {
        method: "PUT",
        headers: {
          'content-Type': 'application/json'
        },
        body: JSON.stringify({
          on: bad
        })
      })
  }, [bad])

  // spa
  const [spa, setspa] = useState(false)
  useEffect(() => {
    var id = 1
    var url = "http://192.168.8.100/api/Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8/groups/" + id + "/action"
    fetch(
      url,
      {
        method: "PUT",
        headers: {
          'content-Type': 'application/json'
        },
        body: JSON.stringify({
          on: spa
        })
      })
  }, [spa])

  // entre
  const [entre, setentre] = useState(false)
  useEffect(() => {
    var id = 20
    var url = "http://192.168.8.100/api/Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8/groups/" + id + "/action"
    fetch(
      url,
      {
        method: "PUT",
        headers: {
          'content-Type': 'application/json'
        },
        body: JSON.stringify({
          on: entre
        })
      })
  }, [entre])

  // Terrasse
  const [terrasse, setterrasse] = useState(false)
  useEffect(() => {
    var id = 4
    var url = "http://192.168.8.100/api/Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8/groups/" + id + "/action"
    fetch(
      url,
      {
        method: "PUT",
        headers: {
          'content-Type': 'application/json'
        },
        body: JSON.stringify({
          on: terrasse
        })
      })
  }, [terrasse])

  // køkken
  const [køkken, setkøkken] = useState(false)
  useEffect(() => {
    var id = 11
    var url = "http://192.168.8.100/api/Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8/groups/" + id + "/action"
    fetch(
      url,
      {
        method: "PUT",
        headers: {
          'content-Type': 'application/json'
        },
        body: JSON.stringify({
          on: køkken
        })
      })
  }, [køkken])

  // spisestue
  const [spisestue, setspisestue] = useState(false)
  useEffect(() => {
    var id = 2
    var url = "http://192.168.8.100/api/Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8/groups/" + id + "/action"
    fetch(
      url,
      {
        method: "PUT",
        headers: {
          'content-Type': 'application/json'
        },
        body: JSON.stringify({
          on: spisestue
        })
      })
  }, [spisestue])

  // lounge
  const [lounge, setlounge] = useState(false)
  useEffect(() => {
    var id = 13
    var url = "http://192.168.8.100/api/Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8/groups/" + id + "/action"
    fetch(
      url,
      {
        method: "PUT",
        headers: {
          'content-Type': 'application/json'
        },
        body: JSON.stringify({
          on: lounge
        })
      })
  }, [lounge])

  const [brightness, setBrightness] = useState(50)
  useEffect(() => {
    fetch(
      "http://192.168.8.100/api/Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8/lights/6/state",
      {
        method: "PUT",
        body: JSON.stringify({
          bri: brightness
        })
      }
    )
  }, [brightness])

  const changeBri = (event) => {
    setBrightness(parseInt(event.target.value))
  }

  const throttle = useMemo(() => _.throttle(changeBri, 100), [])

  const [lightgroup1, setlightgroup1] = useState("")
  useEffect(() => {
    fetch(
      "http://192.168.8.100/api/Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8/groups/21",
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
        // var item = JSON.stringify(data)
        // console.log(data.name)
        // console.log(data.lights.length)
        setlightgroup1(data.lights.length)
      })
      .catch(err => console.log(err))
  }, [lightgroup1])

  console.log(lightgroup1)

  {/* colorloop */ }
  const [changelight6, setchangelight6] = useState()
  useEffect(() => {
    fetch(
      "http://192.168.8.100/api/Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8/lights/6/state",
      {
        method: "PUT",
        body: JSON.stringify({
          // [0.3227, 0.329]
          xy: changelight6,
        }),
      }
    )
  }, [])

  return (
    <div>

      {/* colorloop */}
      {/* <button onClick={() => setlight(!changelight6)}>changelight6</button> */}

      <div className="headergrid">
        <div className="headergrid__item1">
          <a href="/" className="bedroomlink">
            <h2 className='bedroomheader'>
              {/* <img src={arrow2} className="testshot" /> */}
              &#129044;
              Bed <br />
              Room <br /><br />
            </h2>
          </a>
        </div>
        <div className="headergrid__item2">
          {lightgroup1} Lights
        </div>
        <div className="headergrid__item3"><img src={lamp2} className="App-logo" /></div>
        <div className="headergrid__item4 lightselectionflex">
          <div className="lightselectionflex__select">
            <img src={lightbulb5_2} />
            Main Light
          </div>
          <div className="lightselectionflex__select lightselectionactive">
            <img src={pctable2} />
            Desk Lights
          </div>
          <div className="lightselectionflex__select">
            <img src={sleeper2} />
            Bed Light
          </div>
        </div>
      </div>

      <div className='bgtransition'>
        <div className='grid-item1'>
          <img src={switch2} className="switchicon" />
        </div>
        <div className='grid-item2'></div>
        <div className='grid-item3'></div>
      </div>

      <div className='testbar'>
        <button onClick={() => setlight(!light)}>light 6</button>

        <button onClick={() => setsovevaerelse(!sovevaerelse)}>soveværelse</button>
        <button onClick={() => setbad(!bad)}>bad</button>
        <button onClick={() => setspa(!spa)}>spa</button>
        <button onClick={() => setentre(!entre)}>entre</button>
        <button onClick={() => setterrasse(!terrasse)}>terrasse</button>
        <button onClick={() => setkøkken(!køkken)}>køkken</button>
        <button onClick={() => setspisestue(!spisestue)}>spisestue</button>
        <button onClick={() => setlounge(!lounge)}>lounge</button>
      </div>





      <TextFromContext />
      <DemoContextButton />
      <button onClick={upddemovalue}>Click me</button>

      <div className='categorytitles'>Intensity</div>
      <div className="intensitygrid">
        <div><img src={lightbulb4_2} className="intensitygridicon" /></div>
        <div>
          <input
            type="range"
            defaultValue={brightness}
            onChange={throttle}
          />

          <br />
          <div className='tickergrid'>
            <div><hr className="verticalline" /></div>
            <div><hr className="verticalline" /></div>
            <div><hr className="verticalline" /></div>
            <div><hr className="verticalline" /></div>
            <div><hr className="verticalline" /></div>
            <div><hr className="verticalline" /></div>
          </div>

        </div>
        <div><img src={lightbulb3_2} className="intensitygridicon" /></div>
      </div>
      <div className='categorytitles'>Colors</div>
      <div className="colorgrid">

        <Color r="255" g="155" b="155" />
        <Color r="148" g="235" b="158" />
        <Color r="148" g="202" b="235" />
        <Color r="165" g="148" b="235" />
        <Color r="222" g="148" b="235" />
        <Color r="235" g="208" b="148" />

        <div className="plusicon">
          <div className="plusiconitem">+</div>
          {/* <img src={plus2} className="App-logo" /> */}
        </div>
      </div>
      <div className='categorytitles'>Scenes</div>
      <div className="colorgridbygenre">
        <div className="colorgridbygenre_item1">
          <div><img src={lightbulb5_2} className="colorgridbygenre__image invertcolor" /></div>
          <div>Birthday</div>
        </div>
        <div className="colorgridbygenre_item2">
          <div><img src={lightbulb5_2} className="colorgridbygenre__image invertcolor" /></div>
          <div>Party</div>
        </div>
        <div className="colorgridbygenre_item3">
          <div><img src={lightbulb5_2} className="colorgridbygenre__image invertcolor" /></div>
          <div>Relax</div>
        </div>
        <div className="colorgridbygenre_item4">
          <div><img src={lightbulb5_2} className="colorgridbygenre__image invertcolor" /></div>
          <div>Fun</div>
        </div>
      </div>
    </div>
  )
}

export default Bedroom