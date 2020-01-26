<template>
    
</template>

<script>
export default {
    props: {
        initialPosition: {
            type: [String, Number],
            default: "0"
        }, 
        finalPosition: {
            type: [String, Number],
            default: "0"
        },
        initialColor: {
            type: String,
            default: "white"
        },
        finalColor: {
            type: String,
            default: "black"
        },
        initialOpacity: {
            type: Number,
            default: 0
        }, 
        beginOpacity: {
            type: Number,
            default: 0
        }, 
        finalOpacity: {
            type: Number, 
            default: 1
        },
        tweenableProperties: {
            type: String,
            default: "position color opacity"
        },
        tweeningDuration: {
            type: Number, 
            default: 500
        }
    }
}
</script>

<style scoped>

</style>