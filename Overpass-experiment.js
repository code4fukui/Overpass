import { XML } from "https://js.sabae.cc/XML.js";

const endpoint = "https://overpass-api.de/api/interpreter";

// 地図右上: n 35.95734780164315, e 136.1993688765012
// 地図左下: s 35.937162439076616, w 136.15250532087168
/*
const body = `
<osm-script>
  <query type="node">
    <has-kv k="amenity" v="vending_machine"/>
    <bbox-query n="35.95" e="136.19" s="35.93" w="136.15" />
  </query>
  <print/>
</osm-script>
`;
*/
const body = XML.stringify({ "osm-script": {
  query: {
    type: "node",
    "has-kv": { k: "amenity", v: "vending_machine" },
    "bbox-query": { n: 35.95, e: 136.19, s: 35.93, w: 136.15 },
  },
  print: {},
}});

const url = endpoint;
const xml = await (await fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "text/xml",
  },
  body,
})).text();
console.log(xml);
const res = XML.toJSON(xml);

/*
"k": "source",
"v": "survey,2013-04" or survey
*/
console.log(JSON.stringify(res, null, 2));
