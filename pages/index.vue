<template>
  <b-container fluid class="main-container">
    <!-- <b-container
      fluid
      class="video-parent-container"
    > -->
      <!-- <b-embed
        type="video"
        autoplay
        aspect="16by9">
        <source src="~/assets/video/logo_video.mp4" type="video/mp4">
      </b-embed> -->
      <!-- <b-img
        src="~/assets/img/mountain1_01.png"
        class="parallaxing-image"
        id="mountain-main"
      ></b-img>
    </b-container> -->
    <b-container
      class="center-container"
    >
      <!-- <div
        class="row"
      >

      </div> -->
      <parallaxingImage
        width = "100%"
        height = "300px"
        src = "~/assets/img/mountain1_01.png"
      >

      </parallaxingImage>
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
