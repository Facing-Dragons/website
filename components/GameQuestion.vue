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
                            :dotSize="$device.isMobile? 30 : $device.isTabletOrDesktop ? 40 : 40"
                            height="4vh"
                            :processStyle="computedStyle"
                            :labelStyle="labelStyle"
                        ></vue-slider>
                    </div>
                    <div v-if="!$device.isMobileOrTablet" class="d-none d-xl-block slider-button-wrapper">
                        <div class="extra-rail"></div>
                        <a id="slider-button" class="btn btn-success slider-button" to="#">
                            <chevron-right class="arrow-icon chevron-right" fill="black"></chevron-right>
                        </a>
                        <label id="slider-button-label" for="slider-button">
                            NEXT
                        </label>
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
        }
    },
    computed: {
        computedStyle() {
            return {
                backgroundColor: this.color,
                opacity: 1,
                transition: '0.5s all ease-in-out',
                borderRadius: '4vh'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
$slider-height: 4vh;

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