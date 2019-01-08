<template>
  <div class="main-image">
    <p>images</p>
    <article v-for="(image) in $store.state.images" v-bind:value="image.value" :key="image.value">
      <div class="col-sm-3">
        <span class="image">
          <img :src="image.url" :width="150" alt>
        </span>
      </div>
      <div class="col-sm-9">
        <nuxt-link v-bind:to="'/images/' + image.id">
          <h2>{{image.title}}</h2>
        </nuxt-link>
        <p>{{image.description}}</p>
      </div>
    </article>          
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    images: null
  }),
  async fetch ({ store, params }) {
    await store.dispatch('GET_IMAGES');
  }
};
</script>
<style scoped>
.main-image{
  padding: 10px;
}
</style>
