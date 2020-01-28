<template>
    <div class="main-video-container">
        <b-embed
            type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/TA1uyIciJ8Y"
            allowfullscreen
        ></b-embed>
        <img 
            src="~/assets/img/helios_seated.png"
            class="right-corner-frame"
        >
        <img 
            src="~/assets/img/helios_seated.png"
            class="left-corner-frame"
        >
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.main-video-container {
    position: relative;
    width: 41vw;
    background-image: url('~assets/img/frame_trans.png');
    padding: 2rem;
    padding-bottom: 0;
    background-size: cover;
}

.right-corner-frame {
    position: absolute;
    width: 5vw;
    height: auto;
    bottom: -4vh;
    right: -1.8vw;
}

.left-corner-frame {
    position: absolute;
    width: 5vw;
    height: auto;
    bottom: -4vh;
    left: -1.8vw;
    transform: scaleX(-1);
}
</style>