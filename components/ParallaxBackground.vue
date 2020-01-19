<template>
    <div 
        :style="[backgroundStyleObject, {backgroundImage: `url(${backgroundComputed})`}]"
        class="main-parallax" 
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
                position: "fixed",
                height: this.height,
                width: this.width,
                right: 0,
                left: 0,
                top: 0,
                backgroundSize: 'contain'
                // background: `url(${require('~/static/mountain1_01.png')})`,
                //bottom: 0,
                // backgroundColor: "white"  
            }
        },
        backgroundComputed() { 
            return require(`~/assets/img/${this.backgroundImg}`);
        }
    }
}
</script>

<style scoped>
    background-image {
        height: 100%;
        width: 100%;
        position: fixed; 
        top: 0;
        right: 0;
        left: 0;
    }
</style>