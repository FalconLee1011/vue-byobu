<p align="center"><img src="./doc/logo.png" /></p>

# Vue-Byōbu
> Byōbu (屏風) (lit., "wind wall") are Japanese folding screens made from several joined panels, bearing decorative painting and calligraphy, used to separate interiors and enclose private spaces, among other uses.
>
> -- <cite>Wikipedia</cite>

## About
Vue-Byōbu is a beautiful, customizable, byobu-inspired menu designed for VueJS.

## Preview
<p align="center"><img src="./doc/preview.gif" /></p>

## Features
- Nested-structured menu items.
- Customizable background for both parent and child items.
- Vue Router supported.

## Dependencies
- [Vue Router](https://router.vuejs.org/) is required to use this extension;
- Please note that Vue 3 is NOT supported yet.

## How to
Install the plugin
```bash
npm install vue-byobu
```

Vue.Use() in /src/main.js
```javascript
import Vue from 'vue';
import App from './App.vue';

import byobu from 'vue-byobu'; // <-- add this

Vue.config.productionTip = false;

Vue.use(byobu); // <-- and this

new Vue({
  render: h => h(App),
}).$mount('#app');
```

In your component, define your nested pages in following format.
```html
<template>
  <div id="app">
    <byobu :items="byobuPages" />
  </div>
</template>

<script>
import byobuPages from "@/plugins/byobu";

export default {
  name: "App",
  data() {
    return {
      byobuPages: [
        {
          title: "標題壹",
          background: "#463F3A",
          subItems: [
            {
              title: "子標題壹-壹",
              background: "#777", // <-- this could be a link to an image
            },
            {
              title: "子標題壹-貳",
              background: "#777",
            },
          ],
        },
        {
          title: "標題貳",
          background: "#8A817C",
          subItems: [
            {
              title: "子標題貳-壹",
              background: "#777",
            },
            {
              title: "子標題貳-貳",
              background: "#777",
            },
            {
              title: "子標題貳-參",
              background: "#777",
            },
          ],
        },
        {
          title: "標題參",
          background: "#BCB8B1",
          subItems: [
            {
              title: "子標題參-壹",
              background: "#777",
            },
            {
              title: "子標題參-貳",
              background: "#777",
            },
          ],
        },
        {
          title: "標題肆",
          background: "#F4F3EE",
          subItems: [
            {
              title: "子標題肆-壹",
              background: "#777",
            },
            {
              title: "子標題肆-貳",
              background: "#777",
            },
          ],
        },
      ],
    };
  },
};
</script>
```