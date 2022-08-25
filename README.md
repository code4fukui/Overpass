# Overpass.js

- A JavaScript ES module for Overpass API
- https://wiki.openstreetmap.org/wiki/JA:Overpass_API

## Usage

```
import { Overpass } from "https://code4fukui.github.io/Overpass/Overpass.js";

const ne = { lat: 35.95, lng: 136.19 }; // 地図右上
const sw = { lat: 35.93, lng: 136.15 }; // 地図左下
const meganestreet = [ne, sw];
const res = await Overpass.queryNode(meganestreet, { amenity: "vending_machine" });
console.log(JSON.stringify(res, null, 2));
```

## Demo

- [鯖江自販機マップ](https://code4fukui.github.io/Overpass/)

## Dependency

- [XML.js](https://github.com/code4fukui/XML)
