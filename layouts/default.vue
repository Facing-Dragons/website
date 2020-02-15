<template>
  <div>
    <Header 
      :header-type="headerType"
      :is-support="isSupportHeader"  
    ></Header>
    <nuxt />
  </div>
</template>

<script>
import Header from '~/components/Header';

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
    }
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
    handleScroll () {
      // console.log(window.scrollY/window.innerHeight);
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
  computed: {
    isArrowShown() {
      return this.isVideoEnded && this.currentWindowY > 0.9;
    },
    isOverlayShown() {
      return this.isVideoEnded && this.currentWindowY > 0.6;
    },
    headerType() {
      return this.$route.path !== '/quest' ? 'dark' : 'light';
    },
    isSupportHeader() {
      return this.$route.path === '/support';
    }
  }
}
</script>

<style>


* {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}

html {
  font-family: 'Montserrat' ,sans-serif;
  /* This means for sizes under 576px the body font size will be 10px */
  font-size: 10px; 
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

@media (min-width: 576px) { 
  html {
    font-size: 10px;
  }
}

@media (min-width: 768px) { 
  html {
    font-size: 12px;
  }
}

@media (min-width: 992px) { 
  html {
    font-size: 14px;
  }
}

@media (min-width: 1200px) { 
  html {
    font-size: 16px;
  }
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
  z-index: 2;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
