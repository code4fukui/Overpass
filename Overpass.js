import { XML } from "https://js.sabae.cc/XML.js";

const endpoint = "https://overpass-api.de/api/interpreter";

const api = async (osmscript) => {
  const body = XML.stringify(osmscript);
  const url = endpoint;
  const xml = await (await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "text/xml",
    },
    body,
  })).text();
  const res = XML.toJSON(xml);
  return res;
};

const queryNode = async (bbox, keyvalues) => {
  const [ne, sw] = bbox;
  const kvs = [];
  for (const key in keyvalues) {
    kvs.push({ k: key, v: keyvalues[key] });
  }
  const res = await api({ "osm-script": {
      query: {
        type: "node",
        "has-kv": kvs,
        "bbox-query": { n: ne.lat, e: ne.lng, s: sw.lat, w: sw.lng },
      },
      print: { mode: "meta" }, // ids: only id, skel: small, meta: detail
    }})
  return res;
};

export const Overpass = { api, queryNode };
