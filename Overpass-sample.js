import { Overpass } from "./Overpass.js";

const ne = { lat: 35.95, lng: 136.19 }; // 地図右上
const sw = { lat: 35.93, lng: 136.15 }; // 地図左下
const meganestreet = [ne, sw];
const res = await Overpass.queryNode(meganestreet, { amenity: "vending_machine" });
console.log(JSON.stringify(res, null, 2));
