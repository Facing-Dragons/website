<template>
    <div class="video-container">
      <video 
        autoplay 
        muted 
        id="myVideo"
        @ended="videoEndHandler"
      >
        <source 
          src="~/assets/video/logo_video.mp4"
          type="video/mp4"
        >
      </video>
      <slot></slot>
    </div>
</template>

<script>
export default {
    methods: {
        videoEndHandler() {
            this.$emit('ended');
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
}

#myVideo {
    width: 100%;
    height: auto;
}
</style>