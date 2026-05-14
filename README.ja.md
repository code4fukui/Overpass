# Overpass.js

OpenStreetMap (OSM) Overpass API をクエリするための JavaScript ES モジュールです。

## デモ
[鯖江自販機マップ](https://code4fukui.github.io/Overpass/)

## 特徴
- 指定したバウンディングボックス内で条件に一致するノードデータを取得するシンプルなインターフェースを提供
- OSM Overpass API へのクエリをサポート

## 要件
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
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
