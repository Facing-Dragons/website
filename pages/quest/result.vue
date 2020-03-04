<template>
    <div class="container-fluid bg-light d-flex flex-column justify-content-center">
        <!-- MOBILE BUTTONS -->
        <div v-if="$device.isMobileOrTablet" class="d-flex d-xl-none button-container-mobile">
            <button class="rounded-top custom-button w-50 p-2">
                SHARE
            </button>
            <button class="rounded-top custom-button w-50">
                PLAY AGAIN!
            </button>
        </div>
        <!-- END OF MOBILE BUTTONS -->
        <div class="row justify-content-center">
            <div class="col-12 col-xl-6 wrapper-col align-items-center align-items-xl-end justify-content-center justify-content-xl-end d-flex flex-column">
                <div v-if="$device.isMobileOrTablet" class="d-flex d-xl-none w-100 title-mobile">
                    <results-wheel></results-wheel>
                </div>
                <div class="p">
                    <div 
                        class="wrapper"
                        v-for="(s, i) in wheelSections"
                        :key="i"
                    >
                        <wheel-of-life-section 
                            class="section" 
                            :current-value="s.value"
                            :mainColor="s.color"
                            :style="{transform: `rotate(${45 * i}deg)`}"
                        >
                        </wheel-of-life-section>
                    </div>
                    <div class="wheel-image-container">
                        <img src="~/assets/img/wheel/HEAD1.png" alt="wheel of life" class="wheel-frame-image">
                    </div>
                </div>
                <div v-if="$device.isMobileOrTablet" class="w-100 d-block d-xl-none character-title-mobile">
                    <space-pirate-mobile></space-pirate-mobile>
                </div>
            </div>
            <!-- This won't be shown in mobile devices -->
            <div class="col d-none d-xl-flex flex-column justify-content-around results-text">
                <div class="w-100">
                    <results-wheel></results-wheel>
                </div>
                <div class="w-100">
                    <space-pirate-text></space-pirate-text>
                </div>
                <div class="w-100">
                    <results-text></results-text>
                    <div class="button-container d-flex justify-content-between">
                        <button class="rounded custom-button p-2 mr-2">
                            SHARE
                        </button>
                        <button class="rounded custom-button">
                            PLAY AGAIN!
                        </button>
                    </div>
                </div>
            </div>
            <!-- This will be shown in MOBILE devices -->
            <div v-if="$device.isMobileOrTablet" class="col-12 d-flex d-xl-none flex-column justify-content-around results-text-mobile">
                <div class="w-100">
                    <results-text></results-text>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import WheelOfLifeSection from '~/components/WheelOfLifeSection'
import ResultsWheel from '~/components/ResultsWheel'
import ResultsText from '~/components/ResultsText'
import SpacePirateText from '~/components/SpacePirateText'
import SpacePirateMobile from '~/components/SpacePirateMobile'
export default {
    layout: 'quest',
    components: {
        WheelOfLifeSection,
        ResultsWheel,
        ResultsText,
        SpacePirateText,
        SpacePirateMobile
    },
    async asyncData({store}) {
        /**
         * Add the ability to load from the API here, just like in the beginning of the _stage pages
         */
        let {gameScores} = store.state.quest;
        // scores are from 0 to 10 so we map them to 0 to 100
        const wheelSections = [
            {value: gameScores.missionScore * 10, color: "#ff6800" },
            {value: gameScores.mindScore * 10, color: "#0059b9"},
            {value: gameScores.funScore * 10, color: "#f9e777" },
            {value: gameScores.socialScore * 10, color: "#61a5e3" },
            {value: gameScores.homeScore * 10, color: "#72655f" },
            {value: gameScores.loveScore * 10, color: "#c22832" },
            {value: gameScores.wealthScore * 10, color: "#c5c5c5" },
            {value: gameScores.vitalityScore * 10, color: "#76b72b" },
        ]
        return {
            wheelSections
        }
    }
}
</script>

<style lang="scss" scoped>
.container-fluid {
    min-height: 100vh;
}
.section {
    /* position: absolute;
    top: 55px; */
}
.wrapper {
   position: absolute;
   width: 100%;
   height: 100%;
   border: 2px solid;
   border-radius: 50%;
} 
// THIS IS JUST FOR DESKTOP .... MEDIA QUERIES NEEDED FOR MOBILE
.wrapper-col {
    height: 75vh;

    @media screen and (max-width: 1200px) {
        height: 82vh;
        top: 10vh;
    }
}
.title-mobile {
    margin-bottom: 10vh;
    padding-right: 5vw;
    padding-left: 5vw;
}
.p {
    width: 60vmin;
    height: 60vmin;
    position: relative;
    top: 0;
}
.wheel-image-container {
    position: absolute;
    z-index: 11;
    top: -13.5vmin;
    left: -10vmin;
}
.wheel-frame-image {
    width: 78vmin;
    height: 78vmin;
}
.results-text {
    height: 75vmin;
    padding-right: 7rem;
    padding-left: 7rem;
}
.results-text-mobile {
    padding-right: 2rem;
    padding-left: 2rem;
    padding-bottom: 20vh;
    margin-top: 20vh;
}
.character-title-mobile {
    height: 20vh;
    margin-top: 5vh;
}
.button-container-mobile {
    position: fixed;
    height: 8vh;
    width: 100vw;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 12;
}
.custom-button {
  transition: 0.3s all ease-in-out;
  font-size: 1.5rem;
  font-weight: 700;
  background: #f9b038;
  color: #303030;
  border: none;
  outline: none;
  width: 48%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.custom-button:hover {
  color: #1f1f1f;
  background: #e26e0a;
}
</style>