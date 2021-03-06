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
        <div class="row">
            <div class="col-12 justify-content-center align-items-center control-col">
                <transition
                    name="slide-fade"
                    mode="out-in"
                >
                <div :id="`${title}-rating-box`" :key="`${title}-rating-box`"  class="rating-box">
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
                                :dotSize="$device.isMobile? 40 : $device.isTabletOrDesktop ? 50 : 50"
                                height="5vh"
                                :processStyle="computedStyle"
                                :labelStyle="labelStyle"
                                :railStyle="{borderRadius: '5vh'}"
                            ></vue-slider>
                        </div>
                        <div v-if="!$device.isMobileOrTablet" class="d-none d-xl-block slider-button-wrapper">
                            <div class="extra-rail"></div>
                            <a 
                                @click="handleNext" 
                                id="slider-button" 
                                class="btn slider-button"
                                :class="{'btn-success': !isLastStep, 'btn-warning': isLastStep}"
                            >
                                <chevron-right class="arrow-icon chevron-right" fill="black"></chevron-right>
                            </a>
                            <label id="slider-button-label" for="slider-button">
                                {{ isLastStep ? 'RESULTS' : 'NEXT' }}
                            </label>
                        </div>
                    </div>
                </div>
                </transition>
            </div>
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
            fontWeight: 600,
            fontSize: '1.5rem'
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
                '10': {
                    label: '10',
                    style: {
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(0, 0, 0, 0.16)',
                        display: this.$device.isMobileOrTablet ? 'none' : 'block'
                    }
                }
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
                borderRadius: '5vh'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
$slider-height: 5vh;

.control-col {
    // height: 40vh;
    z-index: 4;
}

.main-quest-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
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
    margin-top: 4vh;
}

.rating-box {
    height: 50vh;
    background: white;
    padding: 2rem;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
    position: relative;
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
    font-weight: 600;
    font-size: 1.5rem;
    top: 130%;
    left: 47%;
    position: absolute;
}
.arrow-icon  {
    width: 100%;
    height: 100%;
}
.extra-rail {
    border-radius: 27px;
    background-color: #ccc;
    height: $slider-height;
    position: absolute;
    right: 0;
    left: -25%;
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