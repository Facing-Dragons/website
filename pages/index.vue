<template>
  <b-container fluid class="main-container">
    <b-container
      fluid
      class="video-parent-container"
    >
      <b-embed
        type="video"
        autoplay
        aspect="16by9">
        <source src="~/assets/video/logo_video.mp4" type="video/mp4">
      </b-embed>
    </b-container>
  </b-container>
</template>

<script>

export default {
}
</script>

<style>
  .main-container {
    background: url("~assets/img/main.png");
    height: 200vh;
    background-size: contain;
    padding-right: 0;
    padding-left: 0;
  }

  .video-parent-container {
    padding-right: 0;
    padding-left: 0;
    height: 90vh;
  }
</style>
