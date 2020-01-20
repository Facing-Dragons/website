<template>
    <div 
        :style="[backgroundStyleObject, {backgroundImage: `url(${backgroundComputed})`}]"
        class="main-parallax" 
    >
        <img 
            :src="firstForegroundComputed" 
            alt="foregroundd" 
            class="filler-image"
            :style ="`bottom: ${bottomValue}`"
        >
        <img 
            :src="foregroundComputed" 
            :style="`clip-path: inset(${topSideOffset} 0 0 0); bottom: ${bottomValue}`"
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
    methods: {
        mapRange(value, in_min, in_max, out_min, out_max) {
            return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
        }
    },
    computed: {
        backgroundStyleObject() {
            return {
                // position: "fixed",
                height: this.height,
                width: this.width,
                top: 0,
                backgroundSize: 'cover'
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
                
        },
        bottomValue() {
            if (process.browser) {
                if(window.innerWidth < 800) // mobile
                {
                    return "0"
                } else {
                    if(this.currentScrollValue >= 1)
                        return "0";
                    else if (this.currentScrollValue > 0)
                        return `${this.mapRange(this.currentScrollValue, -0.1, 1.1, -0.6, 0) * 100}vh`;
                    else if (this.currentScrollValue <= 0)
                        return "-60vh";
                }
            }
        }
    }
}
</script>

<style scoped>
    .filler-image {
        position: fixed; 
        height: auto;
        width: 100vw;
        left: 0;
        bottom: 0;
    }

    @media screen and (max-width: 800px) {
        .filler-image {
            bottom: 0;
        }
    }

    #torches {
        /* top: 46vh;
        left: 10.5vw; */
    }
</style>