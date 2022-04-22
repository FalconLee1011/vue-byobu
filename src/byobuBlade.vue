<template>
  <div
    class="byobu-blade"
    @mouseover="active"
    @mouseleave="deactive"
    :style="bladeStyle"
  >
    <div class="byobu-title">{{ item.title }}</div>
    <transition name="fade">
      <ByobuBladeBlockContainer
        v-if="isActive && item.subItems"
        :style="{ transitionDelay: transitionDelay }"
        :items="item.subItems"
      />
    </transition>
  </div>
</template>

<script>
import ByobuBladeBlockContainer from "./ByobuBladeBlockContainer";

export default {
  components: {
    ByobuBladeBlockContainer,
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
    transitionDelay() {
      return this.isActive ? ".2s" : ".0s";
    },
    bladeStyle() {
      const BASE_URL =
        process.env.NODE_ENV === "production" ? process.env.BASE_URL : "/";
      if (this.item.background) {
        if (this.item.background[0] != "#")
          return `background: linear-gradient(to right, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, .5) 100%), url(${BASE_URL}${this.item.background});`;
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
  /* background-position: left top !important; */
  background-position: center !important;
  filter: brightness(0.75);
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
  filter: brightness(1);
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
  color: #bbbbbb;
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
