<template>
  <b-container fluid class="main-container">
    <div class="background-container">
      <img src="~/assets/img/mountains_01.png" class="backdrop">
      <!-- <img src="~/assets/img/mountain1.png" class="mountain"> -->

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

export default {
  components: {
    Banner,
    AboutGame,
    GameDescription,
    NewTeamSection,
    VlogSection,
    Sponsors,
    Footer
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

.background-container {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 100vh;
  background: url('~assets/img/main.png');
  background-size: cover;
  overflow: hidden;

  .mountain {
    position: absolute;
    bottom: -10vh;
    width: 100vw;
    height: auto;
    right: -10vw;
  }

  .backdrop {
    position: absolute;
    bottom: 0vh;
    width: 100%;
    height: auto;
  }
}


</style>