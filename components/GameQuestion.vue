<template>
    <div class="container main-quest-container h-100 d-flex justify-content-center align-items-center">
        <div class="row">
            <div class="col-12 justify-content-center title-container">
                <slot></slot>
            </div>
            <div class="col-12 justify-content-center">
                <transition
                    name="slide-fade"
                    mode="out-in"
                >
                <p :key="title" class="quest-text">
                    {{ text }}
                </p>
                </transition>
            </div>
            <div class="col-12 justify-content-center align-items-center control-col">
                <transition
                    name="slide-fade"
                    mode="out-in"
                >
                <vue-slider
                    :key="title"
                    :value="value"
                    @change="handleChange"
                    :adsorb="true"
                    :interval="1"
                    :max="10"
                    :marks="marks1"
                    :dotSize="18"
                    height="20px"
                    :processStyle="computedStyle"
                ></vue-slider>
                </transition>
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
    data() {
        return {
            marks1: {
                '0': '0 - Low',
                '1': '1',
                '2': '2',
                '3': '3',
                '4': '4',
                '5': '5',
                '6': '6',
                '7': '7',
                '8': '8',
                '9': '9',
                '10': '10 - High'
            },
        }
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
    font-size: 2rem;
    font-weight: 300;
    text-align: center;
    letter-spacing: 0.1vw;
    color: #1e1e1e;
    margin-bottom: 10vh;
}

.slide-fade-enter-active {
    transition: all .3s ease-in-out;
  }
  .slide-fade-leave-active {
    transition: all .3s ease-in-out;
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(2px);
    opacity: 0;
  }
</style>