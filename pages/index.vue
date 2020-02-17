<template>
  <b-container fluid class="main-container">
    <banner-background></banner-background>
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
import BannerBackground from '~/components/BannerBackground'


export default {
  components: {
    Banner,
    AboutGame,
    GameDescription,
    NewTeamSection,
    VlogSection,
    Sponsors,
    Footer,
    BannerBackground
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
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
  width: 100%;
}

</style>