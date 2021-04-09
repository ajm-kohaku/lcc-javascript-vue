<template>
  <div class="photo-viewer">
    <section>
      <h1>Welcome to the Basic Photo Viewer</h1>
      <!-- <photo-showcase :imagePath="largeImage" :largeAltText="largeAltText" /> -->
      <div>
        <img :src="largeImage" :alt="largeAltText" class="img-large" />
      </div>
      <div>
        <ul>
          <li v-for="(photo, index) in photos" :key="index" id="thumbnail-list">
            <input
              type="image"
              :src="photo.smallPath"
              :alt="photo.altText"
              @mouseover="loadImage(photo)"
              class="img-thumbnail"
              data-toggle="modal"
              data-target="#image-modal"
            />
          </li>
        </ul>
      </div>
    </section>
    <div
      class="modal fade"
      id="image-modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="image-modal"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header bg-primary">
            <h5 class="modal-title" id="image-title" v-text="largeAltText" />
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="image-box">
              <img
                :src="largeImage"
                :alt="largeAltText"
                class="image-modal-expanded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import PhotoShowcase from "./Assignment9PhotoShowcase";

export default {
  name: "Assignment9PhotoViewer",
  components: {
    // PhotoShowcase,
  },
  data() {
    return {
      largeImage: require("./../assets/img/sakura_in_the_city.png"),
      largeAltText: "",
      photos: [
        {
          smallPath: require("../assets/img/sakura_in_the_city_small.jpg"),
          largePath: require("./../assets/img/sakura_in_the_city.png"),
          altText: "Sakura in the City",
        },
        {
          smallPath: require("../assets/img/flowering_tree_small.jpg"),
          largePath: require("../assets/img/flowering_tree.png"),
          altText: "Flowering Tree",
        },
        {
          smallPath: require("../assets/img/seoul_mural_small.jpg"),
          largePath: require("../assets/img/seoul_mural.png"),
          altText: "Seoul Mural",
        },
      ],
    };
  },
  methods: {
    loadImage(photo) {
      this.largeImage = photo.largePath;
      this.largeAltText = photo.altText;
    },
  },
};
</script> 

<style scoped lang="scss">
section {
  box-shadow: 0.05em 0.15em 0.5em $secondary-accent;
  display: flex;
  flex-direction: column;
}

#thumbnail-list {
  float: left;
  display: flex;
  align-content: flex-start;
}

h1 {
  text-align: center;
  margin-top: 1em;
  margin-bottom: 0.25em;
}

ul {
  list-style-type: none;
}

li {
  float: left;
  margin: 1em 0.25em 1.5em 0.25em;

  input {
    width: 8em;
    height: 8em;
    box-shadow: 0.05em 0.15em 0.25em $secondary-accent;
  }
}
.img-large {
  display: block;
  border: 0.55em solid #ddd;
  border-radius: 0.25em;
  box-shadow: 0.05em 0.15em 0.5em $secondary-accent;
  width: 40em;
  height: 20em;
  margin: 1em auto;
}

.image-modal-expanded {
  display: block;
  border: 0.55em solid #ddd;
  box-shadow: 0.05em 0.15em 0.5em $secondary-accent;
  width: calc(100% - 2em);
  height: calc(50% - 2em);
}

.modal-xl {
  max-width: 100vw;
}

.image-box {
  display: flex;
  justify-content: center;
}

.modal-header, .modal-header span {
  color: $main-bg-color
}

.modal-body {
  background-color: $main-bg-color;
}
</style>