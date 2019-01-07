<template>
  <div class="main-image">
    <p>images</p>
    <article v-for="(image) in images" v-bind:value="image.value" :key="image.value">
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
    loader: null,
    watching: false,
    images: null
  }),
  asyncData() {
    return axios.get("/localImages.json").then(res => {
      console.log(res.data.data);
      return { images: res.data.data };
    });
  }
};
</script>
<style scoped>
.main-image{
  padding: 10px;
}
</style>
