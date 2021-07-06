

<div align="center">
  <img src="./gitAssets/background.svg" width="100%">
</div>

<br>
---
<div align="center">
  <strong>
  A react library for hamburgers inspired by Hamburgers by Jonathan Su
  </strong>
</div>
<br>

---

# Installation

```bash
$npm i react-hamburgers-menu
```
<br>

# Docs

| Property | Description | value | Default |
| --- | --- | --- | --- |
| type | Animation Type | string | none
| color | Menu color | string | #000

<br>

# Animations 

| Type | Description |
| --- | --- | 
| "N3dx" | 3D in X axis 
| "R3dx" | Reverse 3D in X axis
| "N3dy" | 3D in Y axis
| "R3dy" | Reverse 3D in Y axis
| "N3dxy" | 3D in XY axis
| "R3dxy" | Reverse 3D in XY axis
| "Arrow" | Arrow Left
| "ArrowR" | Arrow Right
| "ArrowAlt" | Arrow Left Alternative
| "ArrowRAlt" | Arrow Right Alternative
| "Collapse" | Collapse
| "RCollapse" | Reverse Collapse


<br>

# Usage

```js
import {Hamburger } from 'react-hamburgers-menu'

//use component
<Hamburger type={'R3dx'}/>
```
<br>