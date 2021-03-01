<template>
  <div class="table-warpper">
    <div class="blade-block-container">
      <div
        v-for="(group, index) in groupedItems"
        :key="index"
        style="display: table-row;"
      >
        <byobuBladeBlock :item="group[0]" />
        <byobuBladeBlock v-if="group[1]" :item="group[1]" />
      </div>
    </div>
  </div>
</template>

<script>
import byobuBladeBlock from "./byobuBladeBlock";

export default {
  components: {
    byobuBladeBlock,
  },
  props: {
    items: {
      type: Array,
    },
  },
  computed: {
    groupedItems() {
      let groupedItems = [];
      for (let i = 0; i < this.items.length / 2; i++) {
        let group = [];
        group.push(this.items[i * 2]);
        group.push(this.items[i * 2 + 1]);
        groupedItems.push(group);
      }
      return groupedItems;
    },
  },
};
</script>

<style>
.table-warpper {
  width: 100%;
  overflow: scroll;
  max-height: 100vh;
}
.blade-block-container {
  display: table;
  box-sizing: border-box;
  border-spacing: 1rem;
  margin: 0 auto;
  padding-bottom: 1rem;
}
</style>
