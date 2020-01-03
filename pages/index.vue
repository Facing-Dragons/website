<template>
  <b-container fluid class="main-container">
    <div
      class="row"
    >
      <div class="col-12">
        <b-embed
          type="video"
          autoplay
          aspect="16by9">
          <source src="~/assets/video/logo_video.mp4" type="video/mp4">
        </b-embed>
      </div>
    </div>

    <b-container
      class="center-container"
    >
      <div class="row">
        <div class="col-12">
          <b-img
            class="mountain-image"
            src="~/assets/img/mountain1_01.png"
          ></b-img>
        </div>
      </div>
      <!-- <parallaxingImage
        width = "100%"
        height = "300px"
        :currentWindowY = "currentWindowY"
        src = "~/assets/img/mountain1_01.png"
      >

      </parallaxingImage> -->
    </b-container>
  </b-container>
</template>

<script>
import parallaxingImage from '~/components/ParallaxingImage';

export default {
  components: {
    parallaxingImage
  },  
  data() {
    return {
      currentWindowY: 0
    }
  },
  created () {
    if (process.browser) {
        window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed () {
    if (process.browser) { 
        window.removeEventListener('scroll', this.handleScroll)
    }
  },
  methods: {
    handleScroll () {
      console.log(window.scrollY)
      this.currentWindowY = window.scrollY;
    }
  },
  
}
</script>

<style>
  .main-container {
    background: url("~assets/img/main.png");
    height: 200vh;
    background-size: cover;
    padding-right: 0;
    padding-left: 0;
  }

  .video-parent-container {
    padding-right: 0;
    padding-left: 0;
    height: 90vh;
  }

  .mountain-image {
    width: 100%;
    height: auto;
  }

  .parallaxing-image {
    width: 100%;
    height: auto;
  }

  .center-container {
    /* background: red; */
    position: relative;
    height: 100%;
  }
</style>
