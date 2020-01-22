<template>
  <div>
    <!-- <ParallaxBackground
      background-img = "main.png"
      foreground-img = "layer2.png"
      :currentScrollValue = "currentWindowY"
      scrollDelayValue = "0px"
      height = "200vh"
      width = "100vw"
    >
    </ParallaxBackground> -->
    <Header></Header>
    <!-- <div class="video-container">
      <video autoplay muted id="myVideo">
        <source 
          src="~/assets/video/logo_video.mp4"
          type="video/mp4"
        >
      </video>
    </div> -->
    <nuxt />
  </div>
</template>

<script>
import Header from '~/components/Header';
import ParallaxBackground from '~/components/ParallaxBackground';
export default {
  components: {
    Header,
    ParallaxBackground
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
      // console.log(window.scrollY/window.innerHeight);
      // this is basically how much of the window is remaining from 0 to 1 ... 1 is all remaining to scroll
      // and 0 zero means we reached to the end of the page
      this.currentWindowY = 1 - (window.scrollY / window.innerHeight);
    }
  },
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
