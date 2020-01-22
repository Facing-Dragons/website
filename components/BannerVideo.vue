<template>
  <div class="video-container">
    <transition name="fade">
        <video 
            autoplay 
            muted 
            id="myVideo"
            @ended="videoEndHandler"
            v-if="isVideoShown"
        >
            <source 
            src="~/assets/video/logo_video.mp4"
            type="video/mp4"
            >
        </video>
    </transition>
    <transition
      name="logo"
    >
      <img 
        v-if="!isVideoShown" 
        src="~/assets/img/logo_white.png"
        class="banner-image" 
        alt=""
      >
    </transition>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
      return {
          isVideoShown: true,
      }
  },
  methods: {
      videoEndHandler() {
          this.$emit('ended');
          setTimeout(() => {
              this.isVideoShown = false;
          }, 500);
      }
  }
}
</script>

<style scoped>
.video-container {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  height: 100vh;
  overflow: hidden;
}

#myVideo {
  width: 100%;
  height: auto;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.banner-image {
  height: 40vh;
  width: auto;
  position: absolute;
  top: 20vh;
  right: -5vw;
  transition: all ease-in-out 0.5s;
}

@media screen and (max-width: 630px){
   .banner-image {
     transition: all 0.5s ease-in-out;
     width: 40vw;
     height: auto;
     right: -10vw;
   }
}

.logo-enter-active {
  transition: all 1.5s ease-in-out;
}
.logo-enter {
  opacity: 0;
  transform: translateX(-50vw);
}
.logo-enter-to {
  opacity: 1;
  transform: translateX(0);
}

</style>