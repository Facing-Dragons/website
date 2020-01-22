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
    
      <!-- <transition name="fade">
        <QuestOverlay v-if="isOverlayShown"></QuestOverlay>
      </transition> -->
    <!-- </div> -->
    <BannerVideo
      @ended="videoEndHandler"
    >
      <!-- <transition name="fade">
        <div 
          v-if="isArrowShown"
          class="arrow-container"
        >
          <nuxt-link to="#intro">
            <AnimatingArrowDown></AnimatingArrowDown>
          </nuxt-link>
        </div>
      </transition> -->
    </BannerVideo>
    <nuxt />
  </div>
</template>

<script>
import Header from '~/components/Header';
import ParallaxBackground from '~/components/ParallaxBackground';
import AnimatingArrowDown from '~/components/AnimatingArrowDown';
import QuestOverlay from '~/components/QuestOverlay';
import BannerVideo from '~/components/BannerVideo';

export default {
  components: {
    Header,
    ParallaxBackground,
    AnimatingArrowDown,
    QuestOverlay,
    BannerVideo
  },
  data() {
    return {
      currentWindowY: 1,
      isVideoEnded: false,
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
    },
    videoEndHandler () {
      this.isVideoEnded = true;
    }
  },
  computed: {
    isArrowShown() {
      return this.isVideoEnded && this.currentWindowY > 0.9;
    },
    isOverlayShown() {
      return this.isVideoEnded && this.currentWindowY > 0.6;
    }
  }
}
</script>

<style>

@font-face {
  font-family: 'marcellus';
  src: url("~assets/fonts/marcellus.ttf");
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
  scroll-behavior: smooth;
}

body {
  background-color: black;
}

.arrow-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 3rem;
  z-index: 5;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
