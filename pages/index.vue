<template>
  <b-container fluid class="main-container">
    <div class="background-container">
      <picture v-if="!$device.isIos">
        <source
          :srcset="`${require(`~/assets/img/dragon/mountainCombo@0,25x.webp`)} 480w,
                ${require(`~/assets/img/dragon/mountainCombo@0,5x.webp`)} 960w,
                ${require(`~/assets/img/dragon/mountainCombo@0,75x.webp`)} 1440w,
                ${require(`~/assets/img/dragon/mountainCombo.webp`)} 1920w`" 
          sizes="(max-width: 1920px) 120vw, (max-width: 640px) 120vw, (max-width: 480px) 120vw, (max-width: 320px) 120vw"
          class="mountain"
        >
        <source 
          type="image/png"
          :srcset="`${require(`~/assets/img/dragon/mountainCombo@0,25x.png`)} 480w,
                  ${require(`~/assets/img/dragon/mountainCombo@0,5x.png`)} 960w,
                  ${require(`~/assets/img/dragon/mountainCombo@0,75x.png`)} 1440w,
                  ${require(`~/assets/img/dragon/mountainCombo.png`)} 1920w`" 
          sizes="(max-width: 1920px) 120vw, (max-width: 640px) 120vw, (max-width: 480px) 120vw, (max-width: 320px) 120vw"
          class="mountain"
        >
        <img 
          src="~/assets/img/dragon/mountainCombo.png"
          :srcset="`${require(`~/assets/img/dragon/mountainCombo@0,25x.png`)} 480w,
                  ${require(`~/assets/img/dragon/mountainCombo@0,5x.png`)} 960w,
                  ${require(`~/assets/img/dragon/mountainCombo@0,75x.png`)} 1440w,
                  ${require(`~/assets/img/dragon/mountainCombo.png`)} 1920w`" 
          sizes="(max-width: 1920px) 120vw, (max-width: 640px) 120vw, (max-width: 480px) 120vw, (max-width: 320px) 120vw"
          class="mountain"
        >
      </picture>
      <img 
        v-else
        src="~/assets/img/dragon/mountainCombo@0,5x.png" 
        class="mountain"
      >
    </div>
    <Banner></Banner>
    <div class="black-background"></div>
    <about-game></about-game>
    <!-- <GameDescription></GameDescription> -->
    <NewTeamSection></NewTeamSection>
    <VlogSection></VlogSection>
    <Sponsors></Sponsors>
    <Footer></Footer>
  </b-container>    
</template>

<script>
// import anime from 'animejs/lib/anime.es.js';
import Banner from '~/components/Banner';
import AboutGame from '~/components/AboutGame';
import GameDescription from '~/components/GameDescription'
import NewTeamSection from '~/components/NewTeamSection'
import Sponsors from '~/components/Sponsors'
import Footer from '~/components/Footer';
import VlogSection from '~/components/VlogSection';
import Dragon from '~/components/Dragon'


export default {
  components: {
    Banner,
    AboutGame,
    GameDescription,
    NewTeamSection,
    VlogSection,
    Sponsors,
    Footer,
    Dragon
  },
  data() {
    return {
      count: {
        number: 12
      },
      animation: ""
    }
  },
  created() {
    if (process.browser) {
      // window.addEventListener('scroll', this.onScrollHandler)
      window.addEventListener('resize', this.handleResize)
    }
  },
  methods: {
    onScrollHandler() {
      // console.log(this.animation)
      // if(this.animation) {
      //   this.animation.seek(this.animation.duration * (window.scrollY / window.innerHeight));
      // }
    }
  },
  mounted() {
    // var animation = anime({
    //   targets: '.dragon-image',
    //   translateX: '10vw',
    //   easing: 'easeInOutSine',
    //   autoplay: false
    // });
    // this.animation = animation;
  }
}
</script>

<style lang="scss" scoped>
.gradient {
  position: absolute;
  width: 100vw;
  right: 0;
  left: 0;
  bottom: 0;
  height: 80vh;
  background: linear-gradient(to bottom, transparent, black);
}

.main-container {
  /* height: 300vh; */
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
  /* justify-content: center; */
  /* align-items: center; */
  width: 100%;
}

.dragon-container {
  width: 60vw;
  position: relative;
  right: 0;
}

@media screen and (max-width: 360px){
  .background-container {
    background: url('~assets/img/background/blackendedbackground@0,25x.webp'), url('~assets/img/background/blackendedbackground@0,25x.png') ;
  }
}
@media screen and (max-width: 480px){
  .background-container {
    background: url('~assets/img/background/blackendedbackground@0,5x.webp'), url('~assets/img/background/blackendedbackground@0,5x.png') ;
  }
}
@media screen and (max-width: 640px){
  .background-container {
    background: url('~assets/img/background/blackendedbackground@0,75x.webp'), url('~assets/img/background/blackendedbackground@0,75x.png') ;
  }
}
// @media screen and (max-width: 960px){
//   .background-container {
//     background: url('~assets/img/blackendedbackground.webp');
//   }
// }

.background-container {
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 220vh;
  background: url('~assets/img/background/blackendedbackground.webp'), url('~assets/img/background/blackendedbackground.png');
  background-size: cover;
  overflow: hidden;
  background-position-y: -15vh;
  background-repeat: no-repeat;

  .mountain {
    position: absolute;
    // top: 0vh;
    width: 120vw;
    height: auto;
    right: -20vw;
    top: 0vh;
    bottom: auto;
  }

  
@media screen and (max-width: 710px) {
  .mountain {
    bottom: 100vh;
    top: auto;
  }
}

  .dragon {
    position: absolute;
    bottom: 102vh;
    width: 77vw;
    height: auto;
    right: 2vw;
  }

  .backdrop {
    position: absolute;
    bottom: 51vh;
    width: 100%;
    height: auto;
  }
}


</style>