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
      <div 
        class="banner"
        v-if="!isVideoShown"   
      >
        <video 
            autoplay 
            loop
            muted 
            id="fireVideo"
            v-if="!isMobile"
        >
            <source 
            src="~/assets/video/fire.webm"
            type="video/webm"
            >
        </video>
        <div class="triangle"></div>
        <img 
          src="~/assets/img/logo_white.png"
          class="banner-image" 
          alt=""
        >
        <div class="banner-text">
          <div class="show-large">Facing</div>
          <div class="show-large">Dragons</div>
          <div class="hide-large">Facing Dragons</div>
          <small id="desc">Unlock Your Purpose</small>
        </div>
      </div>
    </transition>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    isMobile: Boolean
  },
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
.triangle {
  position: absolute;
  width: 0;
  height: 0;
  top: 0px;
  border-style: solid;
  border-width: 100vh 23vh 0 0;
  border-color: #efefef transparent transparent transparent;
  z-index: 4;
}

.video-container {
  background: #efefef;
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

#fireVideo {
  width: auto;
  height: 100vh;
  /* top: 10vh; */
  position: fixed;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.banner {
  background: black;
  position: absolute;
  height: 100vh;
  right: 0;
}

.banner-image {
  height: 75vh;
  width: auto;
  position: relative;
  top: -5vh;
  right: -3vw;
  transition: all ease-in-out 0.5s;
}

.banner-text {
  position: relative;
  left: 8vh;
  top: -10vh;
  color: #f77c00;
  transition: all ease-in-out 0.5s;
}

.show-large {
  font-size: 11vh;
  margin-bottom: -8vh;
  opacity: 1;
}

#desc {
  color: white;
  font-size: 3vh;
  left: 1%;
  top: -5vh;
  position: relative;
}

.hide-large {
  opacity: 0;
  font-size: 6vh;
}

@media screen and (max-width: 630px){
    .video-container {
      background: black;
    }

    .triangle {
      opacity: 0;
    }

   .banner-image {
     transition: all 0.5s ease-in-out;
     width: 75vw;
     height: auto;
     right: auto;
   }

   .banner {
    height: auto;
    width: 100vw;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
   }

   .banner-text {
     text-align: center;
     left: auto;
   }

   .show-large {
     font-size: 7vh;
     opacity: 0;
   }

   #desc {
     left: auto;
     top: -3vh;
   }

   .hide-large {
     opacity: 1;
     font-size: 6vh;
   }
}

.logo-enter-active {
  transition: all 3s ease-in-out;
}
.logo-enter {
  opacity: 0;
  /* transform: translateX(50vw); */
}
.logo-enter-to {
  opacity: 1;
  /* transform: translateX(0); */
}

</style>