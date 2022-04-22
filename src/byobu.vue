<template>
  <div class="byobu">
    <ByobuBlade v-for="(item, idx) in items" :key="idx" :item="item" />
  </div>
</template>

<script>
import ByobuBlade from "./ByobuBlade";

export default {
  components: { ByobuBlade },
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
.byobu #element::-webkit-scrollbar {
  display: none;
}
.byobu ::-webkit-scrollbar {
  display: none;
}
</style>
