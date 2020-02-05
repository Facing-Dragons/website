<template>
  <b-container fluid class="main d-flex align-items-md-center">
    <div class="title-box">
      <div class="pre-title">
        UNLOCK YOUR 
        <span id="purpose">
          PURPOSE 
        </span>
      </div>
      <div class="main-title">
        <span class="main-title-text">FACE YOUR</span>
        <!-- <banner-text-section></banner-text-section> -->
      </div>
      <div class="main-title-text second">
        DRAGONS
        <div class="logo-container">
          <img src="~/assets/img/logo_white.png" class="title-logo">
        </div>
      </div>
      <p class="small-text">
        Facing Dragons is mixed-reality
        mental health and life coaching game. <br><br>
        Overcome real-life challenges
        and unlock your purpose. <br>
        <!-- <span class="get-quest-text">
          In order to get your first quest, click on the link below.
        </span>  -->
      </p>
      <div class="button-container d-flex flex-row flex-md-column p-0 p-md-4 justify-content-center align-items-start">
        <button class="mb-0 mb-md-2 mr-2 mr-md-2 py-2 py-md-0 custom-buttons w-50 rounded">START YOUR QUEST</button>
        <button class="w-50 py-2 py-md-0 custom-buttons rounded">SUPPORT WORKERS</button>
      </div>
    </div>
    <img src="~/assets/img/dragon_mountain_02.png" class="dragon-image">
    <div class="arrow-container w-100 d-flex justify-content-center align-items-center">
      <animating-arrow-down></animating-arrow-down>
    </div>
  </b-container>
</template>

<script>
/**
 * This will be the first section of the page, the banner that also contains the video
 */
import BannerTextSection from '~/components/BannerTextFirst'
import AnimatingArrowDown from '~/components/AnimatingArrowDown'
export default {
    components: {
      BannerTextSection,
      AnimatingArrowDown
    }
}
</script>

<style scoped>
* {
    transition: all 0.5ms ease-in-out;
  }

.arrow-container {
  height: 10vh;
}

.secondary {
  height: 100vh;
  position: absolute;
  top: 0;
  width: 100%;
}

.main {
  height: 100vh;
  position: relative;
  top: 0;
}

.main-container {
  height: 300vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.dragon-image {
  position: absolute;
  bottom: 0;
  right: 0;
  height: auto;
  width: 50vw;
}

.title-box {
  width: 53vw;
  position: relative;
}

.logo-container {
  position: absolute;
  display: flex;
  top: 3vw;
  background: black;
  left: 24.7vw;
}

.title-logo {
  width: 6.5vw;
}

.main-title-text {
  color: #f79519;
  font-size: 8vw;
  font-weight: 500;
  background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.main-title {
  margin-top: -3.7vw;
}

.second {
  margin-top: -6.1vw;
  position: relative;
}

.pre-title {
  padding-left: 0.5vw;
  letter-spacing: 0.8vw;
  font-size: 1.7vw;
  font-weight: 100;
  background-image: linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#purpose {
  /* color: #ebebeb; */
  background-image: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 100;
}

.your-title {
  background-image: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-left: -3vw;
  font-size: 2vh;
}

.small-text {
  font-weight: 600;
  text-transform: uppercase;
  margin-left: 1vw;
  font-size: max(1.5vh, 1.5vw);
  letter-spacing: 0.3vw;
  /* text-align: justify; */
  width: 65%;
  background-image: linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.custom-buttons {
  transition: 0.3s all ease-in-out;
  font-size: calc(1rem + 0.5vw);
  font-weight: 700;
  background: #f79519;
  color: #1f1f1f;
  border: none;
  outline: none;
}

.custom-buttons:hover {
  color: #303030;
  background: #dfdfdf;
}

/* svg {
  width: 100%;
} */

text {
  fill: #00c9ff;
}

#face {
  fill: linear-gradient(to right, #f83600 0%, #f9d423 100%);
}

#your {
  position: absolute;
  width: 10vw;
  left: 17vw;
  top: 17vh;
}

#dragon {
  /* margin-top: -7.5vh; */
}

@media screen and (max-width: 780px) {
  * {
    transition: all 0.5ms ease-in-out;
  }

  .custom-buttons {
    font-size: max(1.5vh, 1.2vw);
  }

  .dragon-image {
    right: -31vw;
    height: 50vh;
    width: auto;
  }

  .small-text {
    font-size: max(1.5vh, 1.2vw);
  }  

  .title-box {
    margin-top: 20vh;
    width: 100%;
    transition: 0.2s all ease-in-out;
  }

  .pre-title {
    padding-left: 0.6vw;
    letter-spacing: 0.8vw;
    font-size: 3.7vw;
  }

  .main-title {
    margin-top: -3vh;
  }

  .main-title-text {
    font-size: 7.7vh;
  }

  .second {
    margin-top: -6vh;
    position: relative;
    font-size: 7.7vh;
  }

  .logo-container {
    display: flex;
    top: 2.5vh;
    height: 7vh;
    background: black;
    left: 24vh;
  }

  .title-logo {
    position: relative;
    top: 0.5vh;
    height: 6vh;
    width: auto;
  }
}

@media screen and (max-width: 480px) {
   .main-title {
    margin-top: -3vh;
  }

  .main-title-text {
    font-size: 6vh;
  }

  .second {
    margin-top: -4.4vh;
    position: relative;
    font-size: 6vh;
  }

  .logo-container {
    display: flex;
    top: 2.1vh;
    height: 7vh;
    background: black;
    left: 18.6vh;
  }

  .title-logo {
    position: relative;
    top: 0;
    height: 5vh;
    width: auto;
  }
}
</style>