<template>
  <div class="table-warpper">
    <div class="blade-block-container">
      <div
        v-for="(group, index) in groupedItems"
        :key="index"
        class="blade-row"
      >
        <ByobuBladeBlock :item="group[0]" />
        <ByobuBladeBlock v-if="group[1]" :item="group[1]" />
      </div>
    </div>
  </div>
</template>

<script>
import ByobuBladeBlock from "./ByobuBladeBlock";

export default {
  components: {
    ByobuBladeBlock,
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
.blade-row {
  display: table-row;
  text-align: center;
}
</style>
