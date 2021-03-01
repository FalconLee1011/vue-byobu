<template>
  <div
    class="byobu-blade"
    @mouseover="active"
    @mouseleave="deactive"
    :style="bladeStyle"
  >
    <div class="byobu-title">{{ item.title }}</div>
    <transition name="fade">
      <byobuBladeBlockContainer
        :style="{ transitionDelay: this.isActive ? '0.2s' : '0s' }"
        v-if="item.subItems && isActive"
        :items="item.subItems"
      />
    </transition>
  </div>
</template>

<script>
import byobuBladeBlockContainer from "./byobuBladeBlockContainer";

export default {
  components: {
    byobuBladeBlockContainer,
  },
  props: {
    item: {
      type: Object,
      default: () => {
        return { subItems: undefined };
      },
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    bladeStyle() {
      if (this.item.background) {
        if (this.item.background[0] != "#")
          return `background: url(${this.item.background})`;
        else return `background: ${this.item.background}`;
      }
      return "";
    },
  },
  methods: {
    active() {
      this.isActive = true;
    },
    deactive() {
      this.isActive = false;
    },
  },
};
</script>

<style>
.byobu .byobu-blade {
  max-width: 50%;
  width: 10%;
  height: 100vh;
  transition: 0.6s;
  display: table-cell;
  box-sizing: border-box;
  background-size: auto 100% !important;
  background-repeat: no-repeat !important;
  background-position: left top !important;
}
.blade-block-container {
  display: table;
  box-sizing: border-box;
  border-spacing: 1rem;
  margin: 0 auto;
  margin-top: 4rem;
  overflow: scroll;
  max-height: 100vh;
}
.byobu .byobu-blade:hover,
.byobu .byobu-blade.active {
  width: 50%;
  transition: 0.6s;
}
.byobu .byobu-blade > .byobu-title {
  width: 1em;
  transition: 0.6s;
  display: block;
  font-size: 2rem;
  font-weight: bold;
  word-spacing: 10em;
  padding: 0.75rem 0.75rem;
  position: absolute;
  color: #333;
}
.byobu .byobu-blade:hover > .byobu-title,
.byobu .byobu-blade.active > .byobu-title {
  /* width: 10em; */
  color: #ffffff;
  transition: 0.6s;
}

.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: 0.6s;
}
.fade-leave-to {
  opacity: 0;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: 0.6s;
}
.fade-enter-to {
  opacity: 1;
}
</style>
