<template>
  <div class="byobu">
    <byobuBlade v-for="(item, idx) in items" :key="idx" :item="item" />
  </div>
</template>

<script>
import byobuBlade from "./byobuBlade";

export default {
  name: "byobu",
  components: { byobuBlade },
  props: {
    items: {
      type: Array,
    },
  },
};
</script>

<style>
.byobu {
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  display: table;
}
</style>
