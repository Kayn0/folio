<template>
  <div id="home" class="container">
    <div class="heading">
      <h1>Buying or selling a home?</h1>
      <h1 class="bold">We can help</h1>
      <h5>Affordable experienced Conveyors, with over 30 years in Sydney</h5>
    </div>

    <div class="link-container">
      <div class="links">
        <div class="row">
          <router-link to="/services/buying">
            <div class="link button buying">
              <div>Buying Property</div>
              <div class="label">More</div>
            </div>
          </router-link>
          <router-link to="/services/selling">
            <div class="link button animate">
              <div>Selling Property</div>
              <div class="label">More</div>
            </div>
          </router-link>
        </div>

        <div class="row">
          <router-link to="/services/transferring">
            <div class="link button animate">
              <div>Transferring Property</div>
              <div class="label">More</div>
            </div>
          </router-link>
          <router-link to="/services/financing">
            <div class="link button animate">
              <div>Financing Property</div>
              <div class="label">More</div>
            </div>
          </router-link>
        </div>
      </div>

      <button @click="isShowingQuoteRequest = !isShowingQuoteRequest" class="quote-btn">
        Request Quote
      </button>

      <div v-if="isShowingQuoteRequest">
        <RequestQuote
          :parentData="isShowingQuoteRequest"
          v-on:emitCloseModal="closeModal"
        />
      </div>

      <!-- <transition name="bounce" class="backdrop">
        <div v-if="isShowingQuoteRequest" class="flex-center">
          <div class="modal animate__animated animate__bounceInUp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim
            libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique
            senectus et netus.
          </div>
        </div>
      </transition> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import RequestQuote from "@/components/RequestQuote/RequestQuote.vue";

export default {
  name: "Home",
  data() {
    return {
      isShowingQuoteRequest: false,
    };
  },
  methods: {
    closeModal() {
      this.isShowingQuoteRequest = false;
    },
  },
  components: {
    RequestQuote,
  },
  created() {
    document.title = "Kane Maslen - Portfolio";
  },
};
</script>

<style scoped>
@import "./Home.scss";
</style>
