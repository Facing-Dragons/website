<template>
    <div class="feature-container d-flex flex-column text-center align-items-center justify-content-center h-100 mb-5">
        <div class="icon">
            <font-awesome-icon :icon="icon"/>
        </div>
        <div class="feature-text">
            <div class="feature-title" v-html="title">
            </div>
            <div class="feature-description mt-4">
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
        & .icon {
            color: #ebebeb;
        }

        & .feature-title {
            background-image: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
}


.feature-title {
    font-size: calc(1.2rem + 0.7vw);
    font-weight: 500;
    background-image: linear-gradient(to right, white 0%, white 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    user-select: none; /* supported by Chrome and Opera */
   -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Firefox */
   -ms-user-select: none; /* Internet Explorer/Edge */
}

.feature-description {
    font-size: calc(0.5rem + 0.2vw);
    letter-spacing: 0.1vw;
}
</style>