<template>
  <div class="background-container">
    <!-- <div v-if="$device.isDesktopOrTablet" class="ribbon-container d-none d-md-flex" @click="clickKickstarter">
      <img class="rounded-left" src="~assets/img/KS_banner_02.png" alt="Kickstarter logo">
    </div>
    <div v-if="$device.isDesktop" class="ribbon-container-2 d-none d-xl-flex" @click="clickKickstarter">
      <img class="rounded-left" src="~assets/img/KS_banner_01.png" alt="Kickstarter logo">
    </div> -->
    <picture v-if="!$device.isIos" id="dark-mountain">
        <source 
          type="image/png"
          :srcset="`${require(`~/assets/img/newBackground/dark_mountain@0,25x.png`)} 480w,
                  ${require(`~/assets/img/newBackground/dark_mountain@0,5x.png`)} 960w,
                  ${require(`~/assets/img/newBackground/dark_mountain@0,75x.png`)} 1440w,
                  ${require(`~/assets/img/newBackground/dark_mountain.png`)} 1920w`" 
          sizes="(max-width: 1920px) 120vw, (max-width: 640px) 120vw, (max-width: 480px) 120vw, (max-width: 320px) 120vw"
          class="foreground back-foreground"
        >
        <img 
          src="~/assets/img/newBackground/dark_mountain.png"
          :srcset="`${require(`~/assets/img/newBackground/dark_mountain@0,25x.png`)} 480w,
                  ${require(`~/assets/img/newBackground/dark_mountain@0,5x.png`)} 960w,
                  ${require(`~/assets/img/newBackground/dark_mountain@0,75x.png`)} 1440w,
                  ${require(`~/assets/img/newBackground/dark_mountain.png`)} 1920w`" 
          sizes="(max-width: 1920px) 120vw, (max-width: 640px) 120vw, (max-width: 480px) 120vw, (max-width: 320px) 120vw"
          class="foreground back-foreground"
        >
      </picture>
      <img 
        v-else
        src="~/assets/img/newBackground/dark_mountain@0,5x.png" 
        class="foreground back-foreground"
        id="dark-mountain"
      >
    <picture v-if="!$device.isIos" id="light-mountain">
        <source 
          type="image/png"
          :srcset="`${require(`~/assets/img/newBackground/light_mountain@0,25x.png`)} 480w,
                  ${require(`~/assets/img/newBackground/light_mountain@0,5x.png`)} 960w,
                  ${require(`~/assets/img/newBackground/light_mountain@0,75x.png`)} 1440w,
                  ${require(`~/assets/img/newBackground/light_mountain.png`)} 1920w`" 
          sizes="(max-width: 1920px) 120vw, (max-width: 640px) 120vw, (max-width: 480px) 120vw, (max-width: 320px) 120vw"
          class="foreground back-foreground"
        >
        <img 
          src="~/assets/img/newBackground/light_mountain.png"
          :srcset="`${require(`~/assets/img/newBackground/light_mountain@0,25x.png`)} 480w,
                  ${require(`~/assets/img/newBackground/light_mountain@0,5x.png`)} 960w,
                  ${require(`~/assets/img/newBackground/light_mountain@0,75x.png`)} 1440w,
                  ${require(`~/assets/img/newBackground/light_mountain.png`)} 1920w`" 
          sizes="(max-width: 1920px) 120vw, (max-width: 640px) 120vw, (max-width: 480px) 120vw, (max-width: 320px) 120vw"
          class="foreground back-foreground"
        >
      </picture>
      <img 
        v-else
        src="~/assets/img/newBackground/light_mountain@0,5x.png" 
        class="foreground back-foreground"
        id="light-mountain"
      >
    <picture v-if="!$device.isIos" id="trees">
        <source 
          type="image/png"
          :srcset="`${require(`~/assets/img/newBackground/trees@0,25x.png`)} 480w,
                  ${require(`~/assets/img/newBackground/trees@0,5x.png`)} 960w,
                  ${require(`~/assets/img/newBackground/trees@0,75x.png`)} 1440w,
                  ${require(`~/assets/img/newBackground/trees.png`)} 1920w`" 
          sizes="(max-width: 1920px) 120vw, (max-width: 640px) 120vw, (max-width: 480px) 120vw, (max-width: 320px) 120vw"
          class="foreground back-foreground"
        >
        <img 
          src="~/assets/img/newBackground/trees.png"
          :srcset="`${require(`~/assets/img/newBackground/trees@0,25x.png`)} 480w,
                  ${require(`~/assets/img/newBackground/trees@0,5x.png`)} 960w,
                  ${require(`~/assets/img/newBackground/trees@0,75x.png`)} 1440w,
                  ${require(`~/assets/img/newBackground/trees.png`)} 1920w`" 
          sizes="(max-width: 1920px) 120vw, (max-width: 640px) 120vw, (max-width: 480px) 120vw, (max-width: 320px) 120vw"
          class="foreground back-foreground"
        >
      </picture>
      <img 
        v-else
        src="~/assets/img/newBackground/trees@0,5x.png" 
        class="foreground back-foreground"
        id="trees"
      >
    <picture v-if="!$device.isIos">
        <source 
          id="dragon"
          type="image/png"
          :srcset="`${require(`~/assets/img/newDragon/DragonMountain@0,25x.png`)} 480w,
                  ${require(`~/assets/img/newDragon/DragonMountain@0,5x.png`)} 960w,
                  ${require(`~/assets/img/newDragon/DragonMountain@0,75x.png`)} 1440w,
                  ${require(`~/assets/img/newDragon/DragonMountain.png`)} 1920w`" 
          sizes="(max-width: 1920px) 120vw, (max-width: 640px) 120vw, (max-width: 480px) 120vw, (max-width: 320px) 120vw"
          class="foreground"
        >
        <img 
          id="dragon"
          src="~/assets/img/newDragon/DragonMountain.png"
          :srcset="`${require(`~/assets/img/newDragon/DragonMountain@0,25x.png`)} 480w,
                  ${require(`~/assets/img/newDragon/DragonMountain@0,5x.png`)} 960w,
                  ${require(`~/assets/img/newDragon/DragonMountain@0,75x.png`)} 1440w,
                  ${require(`~/assets/img/newDragon/DragonMountain.png`)} 1920w`" 
          sizes="(max-width: 1920px) 120vw, (max-width: 640px) 120vw, (max-width: 480px) 120vw, (max-width: 320px) 120vw"
          class="foreground"
        >
      </picture>
      <img 
        v-else
        src="~/assets/img/newDragon/DragonMountain@0,5x.png" 
        class="foreground"
        id="dragon"
      >
      <div class="black-gradient"></div>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';
import KickstarterRibbon from '~/components/svg/KickstarterRibbon';
export default {
  components: {
    KickstarterRibbon
  },
  data() {
    return {
      scrollAnimation: "",
      dragonAnimation: "",
      kickstarterModalShow: true,
    }
  },
  created() {
    if (process.browser) {
      window.addEventListener('scroll', this.onScrollHandler)
    }
  },
  methods: {
    onScrollHandler() {
      if(this.scrollAnimation && this.dragonAnimation) {
        this.scrollAnimation.seek(this.scrollAnimation.duration * (window.scrollY / window.innerHeight));
        this.dragonAnimation.seek(this.dragonAnimation.duration * (window.scrollY / window.innerHeight));
      }
    },
    clickKickstarter() {
      window.open('http://kck.st/3b45UZO', '_blank');
    }
  },
  mounted() {
    var animation = anime({
      targets: '.foreground',
      translateY: ['-10vh', 0],
      opacity: [0, 1],
      easing: 'easeInOutSine',
      autoplay: true,
      delay: anime.stagger(200, {start: 800})
    });
    this.animation = animation;
    const scrollAnimationTranslateY = this.$device.isMobile ? 30 : 40;
    var scrollAnimation = anime({
      targets: '.back-foreground',
      translateY: [0, (el, i) => (`${scrollAnimationTranslateY * (i+7)/10}vh`)],
      easing: 'easeInOutSine',
      autoplay: true,
      duation: 200
      // delay: anime.stagger(100, {direction: 'reverse'})
    });
    this.scrollAnimation = scrollAnimation;
    const dragonAnimationTranslateY = this.$device.isMobile ? '10vh' : '40vh';
    var dragonAnimation = anime({
      targets: '#dragon',
      translateY: [0, dragonAnimationTranslateY],
      easing: 'easeInOutSine',
      autoplay: true,
    });
    this.dragonAnimation = dragonAnimation;
  }
}
</script>

<style lang="scss" scoped>
$base-container-height: 220vh;
$bootstrap-col-12-width-xs: 100vw;
$bootstrap-col-12-width-sm: 540px;
$bootstrap-col-12-width-md: 720px;
$bootstrap-col-12-width-lg: 960px;
$bootstrap-col-12-width-xl: 1140px;
$p-2-width: 0.5rem;
$video-top-margin: 20rem;
$video-bottom-margin: 10rem;
$banner-screen-height: 100vh;
$largest-foreground-height: 1402px;

@function videoHeight($width) {
  @return calc(((#{$width} * (9/16)) + #{$video-top-margin} + #{$video-bottom-margin})/2 + 100vh);
}

@function desktopVideoHeight($width) {
  @return calc(((#{$width} * (9/16)) + #{$video-top-margin} + #{$video-bottom-margin})*3/4 + 100vh);
}

@function tabletVideoHeight($width) {
  @return calc(((#{$width} * (9/16)) + #{$video-top-margin} + #{$video-bottom-margin})*3/5 + 100vh);
}

@function containerHeight() {
  @return calc((110vw * 1402/1920)*3/4 + 100vh);
}

@function containerWidth($height) {
  @return calc((#{$height} * 1920/1402));
}

@function dragonWidth() {
  @return calc(85vh*(1920/2001));
}

@function foregroundWidth() {
  @return calc(50vh*(1920/1402));
}

@function dragonWidthTablet() {
  @return calc(120vh*(1920/2001));
}

@function foregroundWidthTablet() {
  @return calc(80vh*(1920/1402));
}

.ribbon-container, .ribbon-container-2 {
  cursor: pointer;
  max-height: 50vh;
  width: 5vw;
  display: flex;
  position: absolute;
  z-index: 10;
  top: 15vh;
  right: 0;

  img {
    // height: 100%;
    width: 100%;
  }

  @media screen and (max-width: 1200px) {
    width: 10vw;
    top: 60vh;
  }
}

.ribbon-container-2 {
  // height: 10vh;
  top: 80vh;
  position: fixed;

  @media screen and (max-width: 1200px) {
    top: 95vh;
  }
}

.background-container {
  // z-index: ;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: containerHeight();
  background: url('~assets/img/newBackground/BG_sky_wstars_black.webp'), url('~assets/img/newBackground/BG_sky_wstars_black.png');
  background-size: cover;
  overflow: hidden;
  background-repeat: no-repeat;
}

.black-gradient {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  position: absolute;
  width: 100vw;
  height: calc((120vw * 1402/1920)/5);
  right: 0;
  bottom: 0;
  left: 0;
}

.foreground {
  position: absolute;
  width: 105vw;
  right: -5vw;
  bottom: 0vh;
  transform: translateY(0);
}

#dragon {
  width: 92vw;
  // left: 10vw;
}

@media screen and (min-aspect-ratio: 3/2) {
  #dragon {
    top: 0;
    bottom: auto;
  }
}

@media screen and (max-aspect-ratio: 3/2) and (max-width: 550px) {
  .foreground {
    width: foregroundWidth();
    right: calc((-52vh*(1920/1402) + 100vw)*0.7);
    // height: 60vh;
  }
  #dragon {
    width: dragonWidth();
    bottom: 0;
  }
}

@media screen and (max-aspect-ratio: 3/2) and (min-width: 551px) and (max-width: 1025px) {
  .foreground {
    width: foregroundWidthTablet();
    right: calc((-80vh*(1920/1402) + 100vw)*0.7);
    // height: 60vh;
  }
  #dragon {
    width: dragonWidthTablet();
    bottom: 0;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1024px) and (min-height: 768px) and (max-height: 768px) {
  .foreground {
    position: absolute;
    width: 110vw;
    right: -10vw;
    bottom: 0vh;
  }

  #dragon {
    width: 110vw;
    // left: 10vw;
  }
}

@media screen and (min-width: 1025px) {
  .foreground {
    position: absolute;
    width: 105vw;
    right: -5vw;
    bottom: 0vh;
  }

  #dragon {
    width: 92vw;
    // left: 10vw;
  }
}

@media screen and (max-width: 1200px) {
  .background-container {
      height: containerHeight();
  }
}

@media screen and (max-width: 992px){
  .background-container {
    background: url('~assets/img/newBackground/BG_sky_wstars_black@0,75x.webp'), url('~assets/img/newBackground/BG_sky_wstars_black@0,75x.png') ;
  }
}
@media screen and (max-width: 768px){
  .background-container {
    background: url('~assets/img/newBackground/BG_sky_wstars_black@0,5x.webp'), url('~assets/img/newBackground/BG_sky_wstars_black@0,5x.png') ;
  }
}
@media screen and (max-width: 576px){
  .background-container {
    // background: url('~assets/img/newBackground/BG_sky_wstars_black@0,25x.webp'), url('~assets/img/newBackground/BG_sky_wstars_black@0,25x.png') ;
  }
}


// @media screen and (max-aspect-ratio: 1/2) {
//   .background-container {
//     height: 150vh;
//   }
//   .foreground {
//     width: auto;
//     height: 75vh;
//     // left: calc((75vh * 1920/2000)/5);
//     bottom: 0vh;
//   }
//   #dragon {
//     width: auto;
//     height: 100vh;
//   }
// }

.background-container {
  background-size: cover;
  overflow: hidden;
  background-repeat: no-repeat;
}

</style>