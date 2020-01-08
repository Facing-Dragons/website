<template>
    <div
        class="main-container"
        :style=""
    >
        <!-- This component basically works by this way: We will have a background picture and a foreground one
            The foreground is cropped to a size and by scrolling the size of the cropped image is going to 
            increase vertically
         -->
    </div>
</template>

<script>
export default {
    props: {
        backgroundImageSrc: String,
        foregroundImageSrc: String,
        initialForegroundImageSize: String,
        stepSize: String,
        currentHeight: String,
        // Any image put inside it must be resized to fill the height and width of the component
        containerHeight: String,
        containerWidth: String
    },
    computed: {
        mainContainerStyleObject() {
            return {
                height: this.containerHeight,
                width: this.containerWidth
            }
        }
    }
}
</script>

<style scoped>

</style>