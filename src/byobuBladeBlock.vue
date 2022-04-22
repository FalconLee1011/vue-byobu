<template>
  <router-link :to="item.link">
    <div class="blade-block" :style="blockStyle">
      <div class="title">{{ item.title }}</div>
      <img
        width="100%"
        :src="`${BASE_URL}${item.background}`"
        alt=""
        srcset=""
      />
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },
  computed: {
    BASE_URL() {
      return process.env.NODE_ENV === "production" ? process.env.BASE_URL : "/";
    },
    blockStyle() {
      if (this.item.background) {
        if (this.item.background[0] != "#")
          return `background: linear-gradient(to bottom, rgba(0, 0, 0, .4) 15%, rgba(0, 0, 0, .1) 35%, rgba(0, 0, 0, 0)), url(${this.BASE_URL}${this.item.background})`;
        else return `background: ${this.item.background}`;
      }
      return "";
    },
  },
};
</script>

<style>
.byobu .byobu-blade .blade-block {
  width: 25rem;
  height: 15rem;
  transition: 0.4s;
  display: table-cell;
  position: relative;
  background-size: auto 100% !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  box-shadow: #000000bb 0.5em 0.5em 1.25em;
}
.blade-block img {
  position: absolute;
  /* display: none; */
  opacity: 0;
}
.blade-block .title {
  color: #ffffff;
  transition: 0.2s;
  z-index: 2;
  padding: 0.5em 0.65em;
  position: absolute;
}
.byobu .byobu-blade .blade-block:hover {
  cursor: pointer;
  filter: brightness(1.5);
  box-shadow: #000000bb 0.75em 0.75em 1.25em;
  transform: translateY(-0.3em) translateX(-0.3em);
}

.byobu .byobu-blade .blade-block:hover .title {
  text-shadow: #000000 0.075em 0.075em 0.15em;
}
</style>
