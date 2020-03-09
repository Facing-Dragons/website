<template>
  <div>
    <Header 
      :header-type="headerType"
      :is-support="isSupportHeader" 
      v-if="!isVideoVisible" 
    ></Header>
    <nuxt class="dark" @videoVisible="handleVisible"/>
  </div>
</template>

<script>
import Header from '~/components/Header';
import { mapState } from 'vuex';

export default {
  middleware: ['isMobile'],
  components: {
    Header,
  },
  data() {
    return {
      currentWindowY: 1,
      isVideoEnded: false,
      isMobile: false || window.innerWidth < 630,
      currentActiveSection: '',
      isLandscape: false,
    }
  },
  created() {
    this.$root.$on('bv::scrollspy::activate', this.onActivate)
  },
  // created () {
  //   if (process.browser) {
  //       window.addEventListener('scroll', this.handleScroll)
  //       window.addEventListener('resize', this.handleResize)
  //   }
  // },
  // destroyed () {
  //   if (process.browser) { 
  //     window.removeEventListener('scroll', this.handleScroll)
  //     window.removeEventListener('resize', this.handleResize)
  //   }
  // },
  methods: {
    onActivate(target) {
      this.currentActiveSection = target;
    },
    handleVisible(isVisible) {
      this.isVideoVisible = isVisible;
      
    },
    handleScroll () {
      // this is basically how much of the window is remaining from 0 to 1 ... 1 is all remaining to scroll
      // and 0 zero means we reached to the end of the page
      this.currentWindowY = 1 - (window.scrollY / window.innerHeight);
    },
    handleResize () {
      this.isMobile = window.innerWidth < 630;
    },
    videoEndHandler () {
      this.isVideoEnded = true;
    }
  },
  watch: {
    isVideoVisible(newVal) {
      // console.log(newVal);
    }
  },
  computed: {
    isArrowShown() {
      return this.isVideoEnded && this.currentWindowY > 0.9;
    },
    isOverlayShown() {
      return this.isVideoEnded && this.currentWindowY > 0.6;
    },
    headerType() {
      return this.$route.path.indexOf('/quest') !== -1 ? 'quest' : 'normal';
    },
    isSupportHeader() {
      return this.$route.path === '/support';
    },
    ...mapState(['isVideoVisible']),
  }
}
</script>

<style>

.dark {
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
  z-index: 2;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
