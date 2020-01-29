<template>
  <b-container fluid class="main-container">
    <Banner></Banner>
    <NewAbout></NewAbout>
    <GameDescription></GameDescription>
  </b-container>    
</template>

<script>
// import anime from 'animejs/lib/anime.es.js';
import Banner from '~/components/Banner';
import NewAbout from '~/components/NewAbout';
import GameDescription from '~/components/GameDescription'

export default {
  components: {
    Banner,
    NewAbout,
    GameDescription
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
  height: 300vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  width: 100%;
}
</style>