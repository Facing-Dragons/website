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
        <span class="main-title-text">FACE </span><span class="your-title">YOUR</span>
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
    </div>
    <img src="~/assets/img/dragon_mountain_02.png" class="dragon-image">
  </b-container>
</template>

<script>
/**
 * This will be the first section of the page, the banner that also contains the video
 */
export default {
    
}
</script>

<style scoped>
* {
    transition: all 0.5ms ease-in-out;
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
  width: 50vw;
  position: relative;
}

.logo-container {
  position: absolute;
  display: flex;
  top: 3.3vw;
  background: black;
  left: 28.7vw;
}

.title-logo {
  width: 8vw;
}

.main-title-text {
  color: #f79519;
  font-size: 9.5vw;
  font-weight: 300;
  background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.main-title {
  margin-top: -4vw;
}

.second {
  margin-top: -7.2vw;
  position: relative;
}

.pre-title {
  padding-left: 1vw;
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

svg {
  width: 100%;
}

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
    font-size: 8vh;
  }

  .your-title {
    margin-left: -5vw;
    font-size: 1vh;
  }

  .second {
    margin-top: -6vh;
    position: relative;
    font-size: 8vh;
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
    top: 0;
    height: 7vh;
    width: auto;
  }
}
</style>