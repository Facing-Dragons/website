<template>
    <div class="container-fluid bg-light d-flex flex-column justify-content-center">
        <div class="row justify-content-center">
            <div class="col-12 col-lg-6 wrapper-col align-items-center justify-content-center justify-content-lg-end d-flex">
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
            </div>
            <div class="col d-flex flex-column justify-content-around results-text">
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
        </div>
    </div>
</template>

<script>
import WheelOfLifeSection from '~/components/WheelOfLifeSection'
import ResultsWheel from '~/components/ResultsWheel'
import ResultsText from '~/components/ResultsText'
import SpacePirateText from '~/components/SpacePirateText'
export default {
    components: {
        WheelOfLifeSection,
        ResultsWheel,
        ResultsText,
        SpacePirateText
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
    height: 100vh;
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
    height: 85vh;
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
    height: 100%;
    padding-right: 7rem;
    padding-left: 7rem;
    @media screen and (max-width: 768px) {
        padding-right: unset;
    }
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