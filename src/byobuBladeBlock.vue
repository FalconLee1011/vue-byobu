<template>
  <v-img
    gradient="to bottom, rgba(0,0,0,.5), rgba(0,0,0,.1), rgba(0,0,0, 0)"
    @click="$router.push(item.link)"
    class="blade-block"
    :style="blockStyle"
  >
    {{ item.title }}
  </v-img>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },
  computed: {
    blockStyle() {
      if (this.item.background) {
        if (this.item.background[0] != "#")
          return `background: url(${this.item.background})`;
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
  transition: 0.6s;
  display: table-cell;
  padding: 0.75rem 0.75rem;
  transition: 1s;
  background-size: 100% auto !important;
  background-repeat: no-repeat !important;
  background-position: left top !important;
}
.byobu .byobu-blade .blade-block:hover {
  cursor: pointer;
  filter: brightness(1.5);
}
</style>
