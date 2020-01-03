<template>
    <div 
        class="container" 
        :style="styleObject"
        @click="clickHandler"
    >
        Hi
    </div>
</template>

<script>
export default {
    data() {
        return {
            color: 'black'
        }
    },
    props: {
        height: String, 
        width: String,
        src: String,
        initialVerticalPostion: {
            type: String, 
            default: "0"
        },
        /**
         * How up the image could go when parallaxing
         */
        finalVerticalPosition: {
            type: String, 
            default: "10%"
        },
        /**
         * Speed of their movement each time the Delta changes 1 unit
         * it's a mapping between the delta values and the image's position
         */
        movingSpeed: {
            type: String, 
            default: "2px"
        }
    },
    methods: {
        clickHandler() {
            this.color = 'white';
        }
    },
    computed: {
        styleObject() {
            return {
                height: this.height,
                width: this.width,
                backgroundColor: this.color
            }
        }
    }
}
</script>

<style scoped>

</style>