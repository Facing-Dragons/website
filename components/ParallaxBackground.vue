<template>
    <div class="main-parallax">

    </div>
</template>

<script>
export default {
    props: {
        background: {
            type: String,
            default: '~/assets/img/parallaxBackground.png',
            required: true
        },
        foreground: {
            type: String,
            default: '~/assets/img/parallaxForeground.png',
            required: true
        },
        currentScrollValue: [String, Number],
        scrollDelayValue: [String, Number],
        height: [String, Number],
        width: [String, Number]
    }
}
</script>

<style scoped>

</style>