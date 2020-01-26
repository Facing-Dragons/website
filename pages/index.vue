<template>
  <b-container class="all-container">

  </b-container>
  <!-- <b-container fluid class="main-container">
    <b-container fluid class="content-band">
      <b-container>
        <div class="row" id="intro">
          <div class="col-12 d-flex justify-content-center align-items-center p-5">
            <h2 class="m-5 text-white">
              Intro Section
            </h2>
          </div>
        </div>
      </b-container>
    </b-container>

    <div class="empty-band"></div>

    <b-container fluid class="content-band">
      <b-container>
        <div class="row" id="game">
          <div class="col-12">
            <AboutGame
              temp-text = "This is the Text about game section"
              temp-bg = "#78AD32"
            ></AboutGame>
          </div>
        </div>
      </b-container>
    </b-container>

    <div class="empty-band"></div>

    <b-container fluid class="content-band">
      <b-container>
        <div class="row py-5 position-relative" id="#team">
          <img src="~/assets/img/helios_head.png" class="helios-head">
          <div class="col-12">
            <TeamSection></TeamSection>
          </div>
          <img src="~/assets/img/dragon_mountain.png" class="dragon-mountain">
        </div>
      </b-container>
    </b-container>

    <div class="empty-band"></div>

    <b-container>
      <Sponsors></Sponsors>
    </b-container>

    <div class="empty-band"></div>

    <b-container fluid class="content-band">
      <b-container>
        <div class="row">
          <div class="col-12">
            <Footer
              temp-text = "This is the Social Media section"
              temp-bg = "#F6E67B"
            ></Footer>
          </div>
        </div>
      </b-container>
    </b-container>
  </b-container> -->
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
    background-size: contain;
    padding-right: 0;
    padding-left: 0;
  }

  @media screen and (max-width: 800px) {
    .main-container {
      background-size: cover;
    }
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

  .content-band {
    background: black;
  }

  .empty-band {
    height: 35vh;
  }

  .helios-head {
    height: 20vh;
    width: auto;
    right: 0;
    top: 0;
    position: absolute;
  }

  .dragon-mountain {
    height: 30vh;
    width: auto;
    right: 0;
    bottom: 0;
    position: absolute;
  }

  @media screen and (max-width: 650px){
      .helios-head {
        height: auto;
        width: 33vw;
      }

      .dragon-mountain {
        height: auto;
        width: 33vw;
      }
  }
</style>
