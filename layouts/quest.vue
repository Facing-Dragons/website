<template>
    <div>
        <div v-if="!isPortrait" class="orientation-overlay">
          <div class="overlay-text">
            PLEASE KEEP YOUR DEVICE IN THE PORTRAIT MODE.
          </div>
        </div>
        <nuxt class="light"/>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isPortrait: true,
    }
  },
  created() {
    window.addEventListener("orientationchange", this.handleOrientation);
  },
  methods: {
    handleOrientation() {
      // console.log(window.orientation);
      if(window.orientation !== 0) {
        this.isPortrait = false;
      } else 
        this.isPortrait = true;
    }
  },
  destroyed() {
    window.removeEventListener("orientationchange", this.handleOrientation);
  }
}
</script>

<style lang="scss">

.light {
  background-color: #ebebeb;
}

.orientation-overlay {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
  background: rgba($color: #0074D9, $alpha: 1);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  z-index: 100;
}

.overlay-text {
  font-weight: 700;
  font-size: 2.2rem;
  color: white;
  text-align: center;
}

</style>