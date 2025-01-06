<template>
  <div class="sidebar">
    <div class="sidebar-backdrop" @click="closeSidebarPanel" v-if="isPanelOpen"></div>
    <transition name="slide">
      <div v-if="isPanelOpen" class="sidebar-panel">
        <ul class="sidebar-panel-nav">
          <router-link to="/" @click="closeSidebarPanel" v-if="isPanelOpen">
            Work
          </router-link>

          <router-link to="/about" @click="closeSidebarPanel" v-if="isPanelOpen">
            About
          </router-link>
          <a href="/kane-maslen-resume.pdf" download="kane-maslen-resume.pdf">Resume</a>

        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
import { store, mutations } from "@/store.js";

export default {
  methods: {
    closeSidebarPanel: mutations.toggleNav,
  },
  computed: {
    isPanelOpen() {
      return store.isNavOpen;
    },
  },
};
</script>
<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}

.sidebar-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
}

.sidebar-panel {
  overflow-y: auto;
  background-color: #222222;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  color: #FFFFFF;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 99999;
  width: 300px;
}

ul.sidebar-panel-nav {
  list-style-type: none;
  padding: 0;
  margin: 0;
  line-height: 44px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
}


a:-webkit-any-link {
  text-decoration: none;
  color: #FFFFFF;
}

ul.sidebar-panel-nav > ul > a {
  color: #19292e;
  text-decoration: none !important;
  font-size: 24px;
  display: block;
  padding-bottom: 0.5em;
}
</style>
