<template>
  <b-container fluid class="main d-flex p-5 align-items-center">
    <div class="title-box">
      <div class="pre-title">
        UNLOCK YOUR 
        <span id="purpose">
          PURPOSE 
        </span>
      </div>
      <!-- <svg id="face" viewBox="0 0 110 20">
        <defs>
          <linearGradient id="Gradient1">
            <stop class="stop1" offset="0%"/>
            <stop class="stop2" offset="100%"/>
          </linearGradient>
          <style type="text/css">
            #faceText { fill: url(#Gradient1); }
            .stop1 { stop-color: #f83600; }
            .stop2 { stop-color: #f9d423;}
          </style>
        </defs>
        <text x="0" y="20" id="faceText" fill="url(#Gradient1)">FACE</text>
      </svg>
      <svg id="your" viewBox="0 0 110 20">
        <text x="0" y="15">YOUR</text>
      </svg>
      <svg id="dragon" viewBox="0 0 110 20">
        <defs>
          <linearGradient id="Gradient1">
            <stop class="stop1" offset="0%"/>
            <stop class="stop2" offset="100%"/>
          </linearGradient>
          <style type="text/css">
            #dragonText { fill: url(#Gradient1); }
            .stop1 { stop-color: #f83600; }
            .stop2 { stop-color: #f9d423;}
          </style>
        </defs>
        <text id="dragonText" x="0" y="12">DRAGONS</text>
      </svg> -->
      <div class="main-title">
        <span class="main-title-text">FACE </span><span class="your-title">YOUR</span>
      </div>
      <div class="main-title-text second">
        DRAGONS
      </div>
      <p class="small-text">
        Facing Dragons is a deeply gamified mobile health app that helps your adults overcome life's challenges 
        and unlock their purpose. <br>
        <span class="get-quest-text">
          In order to get your first quest, click on the link below.
        </span> 
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
.secondary {
  height: 100vh;
  position: absolute;
  top: 0;
  width: 100%;
}

.main {
  height: 100vh;
  position: absolute;
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

.main-title-text {
  color: #f79519;
  font-size: 9.5vw;
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
}

.pre-title {
  padding-left: 0.6vw;
  letter-spacing: 0.8vw;
  font-size: 1.7vw;
}

#purpose {
  /* color: #ebebeb; */
  background-image: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
  margin-left: 0.5vw;
  font-size: max(2vh, 1vw);
  letter-spacing: 0.4vw;
  text-align: justify;
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
</style>