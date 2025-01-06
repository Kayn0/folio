<template>
  <div class="navbar">
    <router-link to="/" class="router">
      <img
        class="logo"
        alt="Kane Maslen logo"
        src="../../assets/images/kane-maslen-logo.png"
      />
    </router-link>

    <div class="nav-links">
      <router-link to="/" @click="disableDropdown()">Work</router-link>
      <router-link to="/about" v-on:click="disableDropdown()">About</router-link>
      <a href="/kane-maslen-resume.pdf" download="kane-maslen-resume.pdf">Resume</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isOpen: false,
    };
  },
  props: {},
  created() {
    window.addEventListener("click", (e) => {
      if (!this.$el.contains(e.target)) {
        this.isOpen = false;
      }
    });
  },
  methods: {
    disableDropdown: function () {
      if (this.isOpen === true) {
        this.isOpen = false;
      }
    }
  }
};
</script>

<style scoped>
@import "./Navbar.scss";
</style>
