<template>
  <b-container fluid class="main-container">
    <div
      class="row justify-content-center mr-0 video-row"
    >
      <div class="col-8">
        <b-embed
          class="video-embed"
          type="video"
          height="200px"
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

      <div class="row">
        <div class="col-12 d-flex justify-content-center align-items-center p-5 text-light">
          <!-- <animating-image
            backgroundImageSrc = "~/assets/img/mountain1_01.png"
            foregroundImageSrc = "blah"
            initialForegroundImageHeight = "100%"
            stepSize = "1%"
            currentHeight = "50%"
            containerHeight = "300px"
            containerWidth = "100%"
          ></animating-image> -->
          <!-- <TeamSection
            temp-text = "Animating Image placeholder"
            temp-bg = "#ebebeb"
          ></TeamSection> -->
          <h2 class="m-5">
            Animating Image Placeholder
          </h2>
        </div>
      </div>

      <div class="row">
        <div class="col-12 d-flex justify-content-center align-items-center p-5">
          <h2 class="m-5 text-white">
            Intro Section
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <AboutGame
            temp-text = "This is the Text about game section"
            temp-bg = "#78AD32"
          ></AboutGame>
        </div>
      </div>
      <div class="row py-5">
        <div class="col-12">
          <TeamSection></TeamSection>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <Sponsors
            temp-text = "This is the Sponsor's section"
            temp-bg = "#60554F"
          ></Sponsors>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <Footer
            temp-text = "This is the Social Media section"
            temp-bg = "#F6E67B"
          ></Footer>
        </div>
      </div>
      <!-- <ParallaxingImage
        width = "100%"
        height = "300px"
        :currentWindowY = "currentWindowY"
        src = "~/assets/img/mountain1_01.png"
      >

      </ParallaxingImage> -->
    </b-container>
  </b-container>
</template>

<script>
import ParallaxingImage from '~/components/ParallaxingImage';
import AnimatingImage from '~/components/AnimatingImage';
import TeamSection from '~/components/TeamSection';
import AboutGame from '~/components/AboutGame';
import Sponsors from '~/components/Sponsors';
import Footer from '~/components/Footer';

export default {
  components: {
    ParallaxingImage,
    TeamSection,
    AnimatingImage,
    AboutGame,
    Sponsors,
    Footer
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
      // console.log(window.scrollY)
      // this.currentWindowY = window.scrollY;
    }
  },
  
}
</script>

<style>
  .video-embed {
    height: 50vh;
  }

  .video-parent-container {
    padding-right: 0;
    padding-left: 0;
    height: 90vh;
  }

  .video-row {
    background-color: black;
  }

  .main-container {
    background: url("~assets/img/main.png");
    height: 200vh;
    background-size: cover;
    padding-right: 0;
    padding-left: 0;
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
