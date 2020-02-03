<template>
    <div class="feature-container d-flex flex-container align-items-center justify-content-around">
        <div class="icon">
            <font-awesome-icon :icon="icon"/>
        </div>
        <div class="feature-text">
            <h2 class="feature-title">
                {{ title }}
            </h2>
            <div class="feature-description">
                {{ description }}
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    props: {
        icon: String,
        title: String,
        description: String
    }
}
</script>

<style lang="scss" scoped>

</style>