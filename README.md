# Smartlight panel

https://github.com/rts-cmk-wu06/smartlight-ui-Dragonashes
https://github.com/Dragonashes-test/smartlight-ui-Dragonashes

## smartlight paere

### setup

https://developers.meethue.com/develop/get-started-2/
https://developers.meethue.com/develop/application-design-guidance/color-conversion-formulas-rgb-to-xy-and-back/

Aske 6

DMLEH72D9MR

Hue Bridge
ID: ECB5FAFFFE25A28F
ip: 192.168.8.100
port: 443

username: Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8

http://192.168.8.100/debug/clip.html

### light test

/api
POST
body:
{"devicetype":"aske_hue_app#android Aske"}

/api/newdeveloper
GET

/GET
http://192.168.8.100/api/Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8/lights
http://192.168.8.100/api/Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8/lights/6
  /api/Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8/lights/6

### light control

#### scene

/api/Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8/scenes
GET

/api/Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8/scenes
POST
{
  "name":"Test scene",
  "lights":["6"],
  "recycle":true
}

{
	"name": "Test scene 3",
	"type": "GroupScene",
	"group": "2",
	"lights": [
		"6"
	],
	"owner": "Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8",
	"recycle": false,
	"locked": false,
	"appdata": {
		"version": 1,
		"data": "u0g1M_r02"
	},
	"picture": "",
	"lastupdated": "2022-08-09T09:21:18",
	"version": 2
}

/api/Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8/scenes/MacK2B8us3B74ba
PUT
{
  "lightstates": {
    "6": {
      "on": true,
      "bri": 254,
      "xy": [
        0.3104,
        0.3282
      ]
    }
  }
}

/api/Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8/scenes
POST
{
  "name":"Test scene 3",
  "lights":["6"],
  "recycle":true
}
		"success": {
			"id": "LHX53hogYUwLH6Y"
		}

/api/Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8/scenes/LHX53hogYUwLH6Y
PUT
{
  "lightstates": {
    "6": {
      "on": true,
      "bri": 254,
      "xy": [
        0.3104,
        0.3282
      ]
    }
  }
}

/api/Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8/scenes/LHX53hogYUwLH6Y
PUT
{
  "type": "GroupScene",
  "group": "2",
  "appdata": {
    "version": 1,
    "data": "u0g1M_r02"
  },
}

/api/Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8/scenes
POST
{
  "name":"Test scene 4",
  "lights":["6"],
  "recycle":true,
  "type": "GroupScene",
  "group": "2",
}

#### lights

light on/off
/api/Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8/lights/6/state
PUT
body:
{"on":false}

PUT single color
body:
/api/Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8/lights/6/state
{
  "on": true,
  "bri": 100,
  "hue": 46039,
  "sat": 254,
  "effect": "none"
}

color rotation
  might be possible to set limited colors but might need scenes for that
  kan jeg bruge multiple xy ??
PUT
body:
/api/Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8/lights/6/state
{
  "bri": 100,
  "hue": 46039,
  "sat": 254,
  "effect": "colorloop",
  "xy": [
    0.1540,
    0.0799
  ]
}

#### groups

groups api
/api/Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8/groups
GET

/api/Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8/groups
POST

{
  "name": "Aske room 1",
  "type": "Room",
  "class": "Aske room 1",
  "lights": [
    "6",
    "22",
    "27"
  ]
}

{
  "lights": [
    "32",
    "36",
    "47"
  ],
  "name": "Aske room 1",
  "type": "LightGroup"
}

/api/Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8/groups/3
GET

/api/Mhy3mdT8lIahLudmPonJwFEKVDDCbPkv8KM6niq8/groups/3/action
PUT
{
  "on": true
}

##### list of groups

soveværelse 21
  6
  49
Bad 8
  47
spa 1
  57
entre 20
  48
Terrasse 4
  27
  56
  22
køkken 11
  52
  53
spisestue 2
  50
  36
lounge 13
  58
  59

#### light param doc

max 10 requests per second
man kan ikke finde selvlavede grupper fra api i philips app.
on
  false
  true
bri min 0 max 254
  bri 0 != off
hue runs from 0 to 65535
effect
  none
  colorloop
    colorloop skal bruge XY
  colortemperature
    "ct": 500,

## run

npm uninstall -g create-react-app
npm uninstall create-react-app
npx create-react-app smartlightpanel

cd
npm install
npm start

npm i react-router-dom
npm i @emotion/react
npm i axios
npm i cie-rgb-color-converter
npm i lodash

## links

live demo
https://xd.adobe.com/view/6c43f4a1-d697-4507-626f-5659beadf177-1a72/
font
https://www.fontsquirrel.com/fonts/montserrat
assets
https://dribbble.com/shots/7849062-Smart-lights-Free-Adobe-XD

## svg react fix

dette værktøj fikser SVG filer fra inkscape til reactjs
npm -g install svgo
svgo balcone.svg -o balcone2.svg