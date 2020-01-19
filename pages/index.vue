<template>
  <b-container fluid class="main-container">
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

      <div class="row">
        <div class="col-12 d-flex justify-content-center align-items-center p-5">
          <h2 class="m-5 text-white">
            Intro Section
          </h2>
        </div>
      </div>
      <div class="row" id="game">
        <div class="col-12">
          <AboutGame
            temp-text = "This is the Text about game section"
            temp-bg = "#78AD32"
          ></AboutGame>
        </div>
      </div>
      <div class="row py-5" id="#team">
        <div class="col-12">
          <TeamSection></TeamSection>
        </div>
      </div>
      <Sponsors></Sponsors>
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
  }
}
</script>

<style>
  .video-embed {
    height: 50vh;
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
