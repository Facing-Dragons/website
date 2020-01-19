<template>
    <div 
        :style="[backgroundStyleObject, {backgroundImage: `url(${backgroundComputed})`}]"
        class="main-parallax" 
    >
        <img 
            :src="firstForegroundComputed" 
            alt="foregroundd" 
            class="filler-image"
        >
        <img 
            :src="foregroundComputed" 
            :style="`clip-path: inset(${topSideOffset} 0 0 0)`"
            alt="foreground" 
            class="filler-image"
            id="torches"
        >
    </div>
</template>

<script>
export default {
    props: {
        backgroundImg: {
            type: String,
            default: '~assets/img/parallaxBackground.png',
            required: true
        },
        foregroundImg: {
            type: String,
            default: '~assets/img/parallaxForeground.png',
            required: true
        },
        currentScrollValue: [String, Number],
        scrollDelayValue: [String, Number],
        height: [String, Number],
        width: [String, Number]
    },
    computed: {
        backgroundStyleObject() {
            return {
                // position: "fixed",
                height: this.height,
                width: this.width,
                top: 0,
                backgroundSize: 'contain'
            }
        },
        backgroundComputed() { 
            return require(`~/assets/img/${this.backgroundImg}`);
        },
        foregroundComputed() { 
            return require(`~/assets/img/${this.foregroundImg}`);
        },
        firstForegroundComputed() { 
            return require('~/assets/img/mountain1.png');
        },
        topSideOffset() {
            if(this.currentScrollValue >= 1)
                return "100%";
            else if (this.currentScrollValue > 0)
                return `${Number(this.currentScrollValue) * 100}%`;
            else if (this.currentScrollValue <= 0)
                return "0";
                
        }
    }
}
</script>

<style scoped>
    .filler-image {
        position: absolute; 
        height: auto;
        width: 100vw;
        top: 40vh;
        left: 0;
    }

    #torches {
        /* top: 46vh;
        left: 10.5vw; */
    }
</style>