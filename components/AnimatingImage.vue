<template>
    <div
        class="main-container"
        :style="[mainContainerStyleObject, {background: `url(${backgroundImageSrc})`}]"
    >
        <h2>Hello world</h2>
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
        initialForegroundImageHeight: String,
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
    .main-container {
        padding: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
    }

    .background-image {
        margin: 0;
    }
</style>