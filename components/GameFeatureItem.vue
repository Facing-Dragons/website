<template>
    <div class="feature-container d-flex flex-column text-center align-items-center justify-content-around h-100 mb-5">
        <div class="icon">
            <!-- <font-awesome-icon :icon="icon"/> -->
            <b-img fluid class="icon-image"  :src="require(`~/assets/img/${icon}`)"></b-img>
        </div>
        <div class="feature-text d-flex flex-column">
            <h3 class="feature-title" v-html="title">
            </h3>
            <div class="feature-description mt-4">
                <p>
                    {{ description }}
                </p>
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
.icon {
    max-width: 75%;
    transition: 0.2s all ease-in-out;
    padding-top: 10%;
}

.icon-image {
    height: auto;
}

.feature-container {
    transition: 0.5s all ease-in-out;
}


.feature-title {
    font-size: 1.6rem;
    font-weight: 500;
    color: #ebebeb;
    user-select: none;
}

.feature-description p {
    font-size: 1.1rem;
    font-weight: 400;
    color: #ebebeb;
}

@media screen and (max-width: 768px) {
    .feature-title {
        font-size: 2.4rem;
    }
    .feature-description p {
        font-size: 1.9rem;
    }
}
</style>