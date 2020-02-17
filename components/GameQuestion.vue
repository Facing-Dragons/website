<template>
    <div class="container main-quest-container h-100 d-flex justify-content-center align-items-center">
        <div class="row">
            <div class="col-12 justify-content-center title-container">
                <!-- <h1 class="quest-title">
                    {{ title }}
                </h1> -->
                <slot></slot>
            </div>
            <div class="col-12 justify-content-center">
                <p v-if="question" class="quest-text">
                    {{ question }}
                </p>
                <!-- <p class="quest-text">
                    {{ text }}
                </p> -->
            </div>
            <div class="col-12 justify-content-center align-items-center control-col">
                <vue-slider
                    :key="title"
                    :value="value"
                    @change="handleChange"
                    :adsorb="true"
                    :interval="10"
                    :marks="true"
                    :dotSize="18"
                    height="20px"
                    :processStyle="computedStyle"
                    :data="['0 - Low', 1, 2, 3, 4, 5, 6, 7, 8, 9, '10 - High']"
                ></vue-slider>
            </div>
        </div>
    </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

export default {
    components: {
        VueSlider,
    },
    props: {
        text: String,
        question: String,
        value: Number,
        color: String,
        title: String,
    },
    methods: {
        handleChange(newVal) {
            this.$emit('change', newVal);
        }
    },
    computed: {
        computedStyle() {
            return {
                backgroundColor: this.color,
                opacity: 1,
                transition: '0.5s all ease-in-out'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.control-col {
    // height: 40vh;
    z-index: 4;
}

.main-quest-container {
    width: 80vw;
}

@media screen and (max-width: 760px) {
    .main-quest-container {
        width: auto;
    }
}

.quest-title {
    font-size: 12vw;
    text-align: center;
    font-weight: 200;
}

.title-container {
    height: 30vh;
}

.quest-text {
    font-size: 2vw;
    font-weight: 300;
    text-align: center;
    letter-spacing: 0.1vw;
    color: #1e1e1e;
    margin-bottom: 10vh;
}
</style>