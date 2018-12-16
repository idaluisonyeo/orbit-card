# [Orbit Card Generator](https://loonaverse.com/orbit-card)

#### ✨ Purpose
A digital representation of the ID card from the Orbit 1.0 MD Kit for registered LOOΠΔ fanclub members.


#### 🎨  Design
Logos redrawn based on the original assets, respective to original copyright holders. Fonts used: [Montserrat](https://fonts.google.com/specimen/Montserrat) + [Noto Sans KR](https://fonts.google.com/specimen/Noto+Sans+KR).

#### 🛠 Feature
“Save Image” feature implemented in JavaScript with [html2canvas](https://github.com/niklasvh/html2canvas) and [FileSaver](https://github.com/eligrey/FileSaver.js) per [Yenerator](https://github.com/baumant/ye-gen).

#### 📦  Stack
This one-page site is served from the [`gh-pages`](https://github.com/idaluisonyeo/orbit-card/tree/gh-pages) branch (source code in `master`). HTML, SCSS, and jQuery assets compiled and bundled for production by [parcel.js](https://parceljs.org/).
* Install Parcel
```
npm install -g parcel-bundler
```
* To view changes locally, start Parcel to run the server to automatically watch the project
```
$ parcel index.html
```
* Bundle assets for production with the following flags to use relative paths for our URL:
```
$ parcel build index.html cp social-card.png --public-url ./
```
+ Copy files from the `/dist` dir and push them into the `gh-pages` branch with the following command:
```
$ git subtree push --prefix dist origin gh-pages
```

#### 🔒 Credit
LOOΠΔ logos, artwork, and card layout/design © BlockBerry Creative and 101X. For entertainment purposes only, no infringement intended.

**_`STAN LOONA`_**
