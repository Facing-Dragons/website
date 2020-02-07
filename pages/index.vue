<template>
  <b-container fluid class="main-container">
    <div class="background-container">
      <img src="~/assets/img/mountains_01.png" class="backdrop">
      <img src="~/assets/img/dragonMountain.png" class="mountain">
      <!-- <img src="~/assets/img/dragon.png" class="dragon"> -->
      <div class="gradient"></div>
      <!-- <div class="dragon-container">
        <dragon></dragon>
      </div> -->
    </div>
    <Banner></Banner>
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

.background-container {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 220vh;
  background: url('~assets/img/main.png');
  background-size: cover;
  overflow: hidden;
  background-position-y: -15vh;

  .mountain {
    position: absolute;
    bottom: -17vh;
    width: 120vw;
    height: auto;
    right: -20vw;
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