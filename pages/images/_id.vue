<template>
  <div>
    <h2>{{image.title}}</h2>
    <div>
      <div class="col-sm-3">
        <span class="image">
          <img :src="image.url" :width="450" alt>
        </span>
      </div>
      <div class="col-sm-9">
        <p>{{image.description}}</p>
      </div>
    </div>
  </div>
  
</template>
<script>
import axios from "axios";
export default {
  asyncData() {
    return axios.get("/localImages.json").then(res => {
      console.log(res.data.data);
      return { images: res.data.data };
    });
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    image() {
      return this.images[this.id - 1]
    }
  }
}
</script>

