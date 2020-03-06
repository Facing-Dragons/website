<template>
    <div class="container main-quest-container h-100">
        <div class="row">
            <div class="col-12 justify-content-center">
                <div class="title-container">
                    <slot></slot>
                </div>
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
        </div>
        <div class="content-box">
                <transition
                    name="slide-fade"
                    mode="out-in"
                >
                <div :id="`${title}-rating-box`" :key="`${title}-rating-box`"  class="rating-box">
                    <div class="diamond" :style="{backgroundColor: this.color}">
                        <span class="value-number">
                            {{value}}
                        </span>
                    </div>

                    <div class="difficulty-description w-100 d-flex">
                        <div class="low-desc w-50 d-flex flex-column align-items-center">
                            <h3 class="difficulty-title">
                                LOW
                            </h3>
                            <p class="difficulty-description">
                                {{ lowDescription }}
                            </p>
                        </div>
                        <div class="high-desc w-50 d-flex flex-column align-items-center">
                            <h3 class="difficulty-title">
                                HIGH
                            </h3>
                            <p class="difficulty-description">
                                {{ highDescription }}
                            </p>
                        </div>
                    </div>
                    <div class="main-wrapper d-flex align-items-center">
                        <div class="slider-wrapper">
                            <vue-slider
                                :key="title"
                                :value="value"
                                @change="handleChange"
                                :adsorb="true"
                                :interval="1"
                                :max="10"
                                :marks="marks1"
                                :dotSize="20"
                                height="3vh"
                                :processStyle="computedStyle"
                                :labelStyle="labelStyle"
                            ></vue-slider>
                        </div>
                    </div>
                </div>
                </transition>
        </div>
        <div @click="handleNext" class="button-wrapper" :style="{backgroundColor: color}">
            NEXT
        </div>
    </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
import ChevronRight from '~/components/ChevronRight';

export default {
    components: {
        VueSlider,
        ChevronRight
    },
    props: {
        text: String,
        question: String,
        value: Number,
        color: String,
        title: String,
        highDescription: String,
        lowDescription: String,
        isLastStep: Boolean
    },
    data() {
        const labelStyle = {
            fontWeight: 500,
            fontSize: '1.2rem'
        };
        return {
            marks1: {
                '0': '0',
                '1': '1',
                '2': '2',
                '3': '3',
                '4': '4',
                '5': '5',
                '6': '6',
                '7': '7',
                '8': '8',
                '9': '9',
                '10': '10'
            },
            labelStyle
        }
    },
    methods: {
        handleChange(newVal) {
            this.$emit('change', newVal);
        },
        handleNext() {
            this.$emit('next');
        }
    },
    computed: {
        computedStyle() {
            return {
                backgroundColor: this.color,
                opacity: 1,
                transition: '0.5s all ease-in-out',
            }
        }
    }
}
</script>

<style lang="scss" scoped>
$slider-height: 5vh;
$next-button-height: 10vh;

.control-col {
    // height: 40vh;
    z-index: 4;
}

.main-quest-container {
    display: flex;
    flex-direction: column;
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
    height: 25vh;
}

.quest-text {
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
    color: #1e1e1e;
}

.content-box { 
    height: 50vh;
    position: fixed;
    left: 0;
    right: 0;
    bottom: $next-button-height; 
}

.diamond {
    border: 3px solid black;
    position: absolute;
    height: 8rem;
    width: 8rem;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    text-align: center;
    top: -3.8rem;
    left: calc(50vw - 4rem);

    span {
        font-size: 4rem;
        font-weight: 700;
        color: black;
        position: absolute;
        transform: rotate(-45deg);
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

.rating-box {
    height: 50vh;
    background: #ebebeb;
    padding: 2rem;
    border-top: 3px solid black;
}

.difficulty-description {
    font-weight: 400;
    font-size: 1.25rem;
    text-align: center;
    padding: 0.5rem;
    height: 70%;
    overflow: auto;
}

.main-wrapper {
    position: absolute;
    right: 2rem;
    left: 2rem;
    bottom: 4rem;
}

.slider-wrapper {
    width: 85%;

    @media screen and (max-width: 1200px) {
        width: 100%;
    }
}

.slider-button-wrapper {
    width: 15%;
    position: relative;
    height: $slider-height;
}

.slider-button {
    border-radius: 27px;
    padding: 0;
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    height: $slider-height;
    position: absolute;
    right: 0;
    left: 35%;
}
#slider-button-label {
    font-weight: 500;
    font-size: 1.5rem;
    top: 130%;
    left: 47%;
    position: absolute;
}
.arrow-icon  {
    width: 100%;
    height: 100%;
}

.button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: $next-button-height;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    transition: all .3s ease;
    font-size: 3rem;
    font-weight: 700;
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