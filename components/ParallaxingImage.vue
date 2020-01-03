<template>
    <div 
        class="container" 
        :style="styleObject"
        @click="clickHandler"
    >
        <b-img
            :src="src"
            :style="[imageStyleObject, {bottom: String(currentVerticalPosition) + 'px'}]"
        ></b-img>
    </div>
</template>

<script>
export default {
    data() {
        return {
            color: 'black',
        }
    },
    props: {
        height: String, 
        width: String,
        currentWindowY: Number,
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
        },
        mapRange(num, in_min, in_max, out_min, out_max){
           return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
        }
    },
    computed: {
        styleObject() {
            return {
                position: "fixed",
                height: this.height,
                width: this.width,
                backgroundColor: this.color
            }
        },
        currentVerticalPosition() {
            /**
             * This is going to map the values of the delta to the values of the window
             */
            let vertPos = this.mapRange(this.currentWindowY, 0, window.innerHeight, 0, 100);
            console.log('====================================');
            console.log(vertPos);
            console.log('====================================');
            return vertPos;
        },
        imageStyleObject() {
            return {
                height: "100%",
                width: "100%",
                position: "absolute",
            }
        }
    }
}
</script>

<style scoped>
    .container {
        position: fixed;
        top: 0;
    }
</style>