# Overpass.js

A JavaScript ES module for OSM Overpass API.

## Demo

[Saba-e Vending Machine Map](https://code4fukui.github.io/Overpass/)

## Features

- A JavaScript ES module for querying the OpenStreetMap (OSM) Overpass API
- Provides a simple interface to fetch node data matching specified criteria within a bounding box

## Requirements

- [XML.js](https://github.com/code4fukui/XML) dependency

## Usage

```JavaScript
import { Overpass } from "https://code4fukui.github.io/Overpass/Overpass.js";

const ne = { lat: 35.95, lng: 136.19 }; // Top right of map
const sw = { lat: 35.93, lng: 136.15 }; // Bottom left of map
const bbox = [ne, sw];
const res = await Overpass.queryNode(bbox, { amenity: "vending_machine" });
console.log(JSON.stringify(res, null, 2));
```

## License

MIT License