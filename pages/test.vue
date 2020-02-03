<template>
  <b-container fluid class="main-container">
    <Banner></Banner>
    <about-game></about-game>
    <!-- <GameDescription></GameDescription> -->
    <NewTeamSection></NewTeamSection>
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

export default {
  components: {
    Banner,
    AboutGame,
    GameDescription,
    NewTeamSection,
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

<style scoped>
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
</style>