<template>
    <b-container fluid class="about-container-fluid">
        <b-container 
            class="about-container"
        >
            <section-title 
                title-text="Faces Behind Facing Dragons"
                text-gradient="linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);"
                line-gradient="linear-gradient(to left, black 0%, #f9d423 100%)"
            ></section-title>
        </b-container>

    </b-container>
</template>

<script>
import SectionTitle from '~/components/SectionTitle';
export default {
    components: {
        SectionTitle,
    },
}
</script>

<style scoped>
.about-container-fluid {
    /* margin-top: 100vh; */
    min-height: 100vh;
    position: relative;
}
</style>