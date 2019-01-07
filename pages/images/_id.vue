<template>
  <div>
    <h2>{{valueOfImage.title}}</h2>
    <div>
      <div class="col-sm-3">
        <span class="image">
          <img :src="valueOfImage.url" :width="450" alt>
        </span>
      </div>
      <div class="col-sm-9">
        <p>{{valueOfImage.description}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async fetch({ store , params, route}) {
    await store.dispatch("GET_VALUE_OF_IMAGE", route.params.id);
  },
  computed: {
    valueOfImage() {
      return this.$store.getters.valueOfImage
        ? this.$store.getters.valueOfImage
        : [];
    }
  }
}
</script>