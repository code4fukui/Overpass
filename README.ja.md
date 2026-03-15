# Overpass.js

Overpass.jsは、オープンストリートマップ(OSM)のAPI、Overpass用のJavaScript ESモジュールです。

## デモ

- [鯖江自販機マップ](https://code4fukui.github.io/Overpass/)

## 機能

- OSMのOverpass APIを使ってデータを取得できる
- 地理空間データの検索や抽出が可能

## 使い方

```JavaScript
import { Overpass } from "https://code4fukui.github.io/Overpass/Overpass.js";

const ne = { lat: 35.95, lng: 136.19 }; // 地図右上
const sw = { lat: 35.93, lng: 136.15 }; // 地図左下
const meganestreet = [ne, sw];
const res = await Overpass.queryNode(meganestreet, { amenity: "vending_machine" });
console.log(JSON.stringify(res, null, 2));
```

## ライセンス

MIT License