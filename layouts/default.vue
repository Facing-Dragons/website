<template>
  <div>
    <ParallaxBackground>
    </ParallaxBackground>
    <!-- <Header></Header> -->
    <!-- <div class="video-container">
      <video autoplay muted id="myVideo">
        <source 
          src="~/assets/video/logo_video.mp4"
          type="video/mp4"
        >
      </video>
    </div> -->
    <!-- <nuxt /> -->
  </div>
</template>

<script>
import Header from '~/components/Header';
import ParallaxBackground from '~/components/ParallaxBackground';
export default {
  components: {
    Header,
    ParallaxBackground
  }
}
</script>

<style>

@font-face {
  font-family: 'marcellus';
  src: url("~assets/fonts/marcellus.ttf");
}

.video-container {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  height: 100vh;
}

#myVideo {
  width: 98vw;
  height: auto;
}

* {
  font-family: 'marcellus';
}

html {
  font-family: 'marcellus' ,sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background-color: black;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

</style>
