<template>
    <div class="feature-container d-flex flex-column p-5 text-center align-items-center justify-content-around">
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
.icon {
    font-size: calc(1rem + 6vw);
    color: #aaaaaa;
    transition: 0.2s all ease-in-out;
}

.feature-container {
    transition: 0.2s all ease-in-out;
    & div {
        background: linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);
        // color: white;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    &:hover {
        transform: scale(1.05);

        & .icon {
            color: #ebebeb;
        }
    }
}


.feature-title {
    font-weight: 200;
}

// .feature-description {
//     font-size: 2vw;
// }
</style>