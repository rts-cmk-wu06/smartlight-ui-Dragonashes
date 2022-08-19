import balcone2 from '../assets/page1/balcone2.svg'
import bath2 from '../assets/page1/bath2.svg'
import bed2 from '../assets/page1/bed2.svg'
import house2 from '../assets/page1/house2.svg'
import lounge2 from '../assets/page1/lounge2.svg'
import kitchen from '../assets/page1/kitchen.png'
import profile from '../assets/page1/profile.jpg'

import { useState, useEffect } from "react"

const Home = () => {

  const rooms = [
    {
      id: 21,
      name: 'Soveværelse'
    },
    {
      id: 8,
      name: 'Bad'
    },
    {
      id: 1,
      name: 'Spa'
    },
    {
      id: 20,
      name: 'Entre'
    },
    {
      id: 4,
      name: 'Terrasse'
    },
    {
      id: 11,
      name: 'Køkken'
    },
    {
      id: 2,
      name: 'Spisestue'
    },
    {
      id: 13,
      name: 'Lounge'
    }
  ]

  // soveværelse
  const [room21, setroom21] = useState([])
  useEffect(() => {
    var id = 21
    var url = "http://192.168.8.100/api/Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8/groups/" + id
    fetch(
      url,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)

        var data2 = JSON.stringify(data)
        console.log(data2)
        setroom21(data.name)
      })
      .catch(err => console.log(err))
  }, [room21])

  // bad
  const [room8, setroom8] = useState([])
  useEffect(() => {
    var id = 8
    var url = "http://192.168.8.100/api/Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8/groups/" + id
    fetch(
      url,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)

        var data2 = JSON.stringify(data)
        console.log(data2)
        console.log(data.name)

        setroom8(data.name)

      })
      .catch(err => console.log(err))
  }, [room8])

  // spa

  const [room1, setroom1] = useState([])
  useEffect(() => {
    var id = 1
    var url = "http://192.168.8.100/api/Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8/groups/" + id
    fetch(
      url,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)

        var data2 = JSON.stringify(data)
        console.log(data2)
        console.log(data.name)

        setroom1(data.name)

      })
      .catch(err => console.log(err))
  }, [room1])

  // Entre
  const [room20, setroom20] = useState([])
  useEffect(() => {
    var id = 20
    var url = "http://192.168.8.100/api/Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8/groups/" + id
    fetch(
      url,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)

        var data2 = JSON.stringify(data)
        console.log(data2)
        console.log(data.name)

        setroom20(data.name)

      })
      .catch(err => console.log(err))
  }, [room20])

  // Terrasse
  const [room4, setroom4] = useState([])
  useEffect(() => {
    var id = 4
    var url = "http://192.168.8.100/api/Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8/groups/" + id
    fetch(
      url,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)

        var data2 = JSON.stringify(data)
        console.log(data2)
        console.log(data.name)

        setroom4(data.name)

      })
      .catch(err => console.log(err))
  }, [room4])

  // Køkken
  const [room11, setroom11] = useState([])
  useEffect(() => {
    var id = 11
    var url = "http://192.168.8.100/api/Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8/groups/" + id
    fetch(
      url,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
        setroom11(data.name)
      })
  }, [room11])

  // spisestue
  const [room2, setroom2] = useState([])
  useEffect(() => {
    var id = 2
    var url = "http://192.168.8.100/api/Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8/groups/" + id
    fetch(
      url,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
        setroom2(data.name)
      })
  }, [room2])

  // lounge
  const [room13, setroom13] = useState([])
  useEffect(() => {
    var id = 13
    var url = "http://192.168.8.100/api/Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8/groups/" + id
    fetch(
      url,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
        setroom13(data.name)
      })
  } , [room13])

  return (
    <div>

      <div className='bubbles'></div>

      <div className="headergrid">

        <h1>
          Control <br />
          Panel
        </h1>
        <div className="profileimage">
          <div className="profileimageplacement"><img src={profile} className="profileimg" /></div>
          <div className="profileimgdot"></div>
        </div>
      </div>

      <h2>All Rooms</h2>
      <div className="Home__bedroom">
        <div className="home__bedroomstyle">
          <a href="/Bedroom" className="bedroomlink">
            <img src={bed2} className="bedroomitemimage" />
            <h3>{room21}</h3>
            <span className="locationlights">4 Lights</span>
          </a>
        </div>
        <div className="home__bedroomstyle">
          <img src={lounge2} className="bedroomitemimage" />
          <h3>{room8}</h3>
          <span className="locationlights">2 Lights</span>
        </div>
        <div className="home__bedroomstyle">
          <img src={kitchen} className="bedroomitemimage" />
          <h3>{room1}</h3>
          <span className="locationlights">5 Lights</span>
        </div>
        <div className="home__bedroomstyle">
          <img src={bath2} className="bedroomitemimage" />
          <h3>{room20}</h3>
          <span className="locationlights">1 Light</span>
        </div>
        <div className="home__bedroomstyle">
          <img src={house2} className="bedroomitemimage" />
          <h3>{room4}</h3>
          <span className="locationlights">5 Lights</span>
        </div>
        <div className="home__bedroomstyle">
          <img src={balcone2} className="bedroomitemimage" />
          <h3>{room11}</h3>
          <span className="locationlights">2 Lights</span>
        </div>
        <div className="home__bedroomstyle">
          <img src={balcone2} className="bedroomitemimage" />
          <h3>{room2}</h3>
          <span className="locationlights">2 Lights</span>
        </div>
        <div className="home__bedroomstyle">
          <img src={balcone2} className="bedroomitemimage" />
          <h3>{room13}</h3>
          <span className="locationlights">2 Lights</span>
        </div>
      </div>
    </div>
  )
}
export default Home