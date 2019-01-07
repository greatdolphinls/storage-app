<template>
  <div>
    <h2>{{valueOfVideo.title}}</h2>
    <div>
      <div class="col-sm-3">
        <iframe width="420" height="315" :src="valueOfVideo.videourl">
        </iframe>
      </div>
      <div class="col-sm-9">
        <p>{{valueOfVideo.description}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async fetch({ store , params, route}) {
    await store.dispatch("GET_VALUE_OF_VIDEO", route.params.id);
  },
  computed: {
    valueOfVideo() {
      return this.$store.getters.valueOfVideo
        ? this.$store.getters.valueOfVideo
        : [];
    }
  }
}
</script>