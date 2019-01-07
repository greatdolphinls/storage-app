<template>
  <div class="main-video">
    <p>videos</p>
    <article v-for="(video) in $store.state.videos" v-bind:value="video.value" :key="video.value">
      <div class="col-sm-3">
        <span class="image">
          <img :src="video.imageurl" :width="150" alt>
        </span>
        
      </div>
      <div class="col-sm-9">
        <nuxt-link v-bind:to="'/videos/' + video.id">
          <h2>{{video.title}}</h2>
        </nuxt-link>
        <p>{{video.description}}</p>
      </div>
    </article>          
  </div>
</template>

<script>
export default {
  async fetch ({ store, params }) {
    await store.dispatch('GET_VIDEOS');
  }
};
</script>
<style scoped>
.main-video{
  padding: 10px;
}
</style>