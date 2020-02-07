<template>
    <div class="feature-container d-flex flex-column text-center align-items-center justify-content-around h-100 mb-5">
        <div class="icon">
            <!-- <font-awesome-icon :icon="icon"/> -->
            <b-img fluid class="icon-image"  :src="require(`~/assets/img/${icon}`)"></b-img>
        </div>
        <div class="feature-text d-flex flex-column">
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
    width: 100%;
    color: #aaaaaa;
    transition: 0.2s all ease-in-out;
    padding-top: 10%;
    padding-bottom: 10%;
}

.icon-image {
    height: auto;
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
    font-size: calc(1rem + 0.5vw);
    font-weight: 500;
    background-image: linear-gradient(to right, white 0%, white 100%);
    background-clip: text;
    transition: .2s all ease-in-out;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    user-select: none; /* supported by Chrome and Opera */
   -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Firefox */
   -ms-user-select: none; /* Internet Explorer/Edge */
}

.feature-text {
    // height: 100%;
    min-height: 15vh;
    justify-content: space-evenly;
}

.feature-description {
    font-size: calc(0.5rem + 0.2vw);
    letter-spacing: 0.1vw;
}
</style>