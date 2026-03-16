# Overpass.js

Overpass.jsは、オープンストリートマップ(OSM)のOverpass APIを使用するためのJavaScript ESモジュールです。Overpass APIを介してOSMのデータを取得し、地理空間データの検索や抽出ができます。

## デモ
[鯖江自販機マップ](https://code4fukui.github.io/Overpass/)

## 機能
- Overpass APIを使ってOSMのデータを取得できる
- 地物のノードデータを条件検索できる

## 必要環境
- [XML.js](https://github.com/code4fukui/XML)

## 使い方
```JavaScript
import { Overpass } from "https://code4fukui.github.io/Overpass/Overpass.js";

const ne = { lat: 35.95, lng: 136.19 }; // 地図右上
const sw = { lat: 35.93, lng: 136.15 }; // 地図左下
const bbox = [ne, sw];
const res = await Overpass.queryNode(bbox, { amenity: "vending_machine" });
console.log(JSON.stringify(res, null, 2));
```

## ライセンス
MIT License