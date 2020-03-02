<template>
    <div class="container-fluid bg-light d-flex flex-column justify-content-center">
        <div class="row justify-content-center">
            <div class="col-lg-7 justify-content-end d-flex">
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
                </div>
            </div>
            <div class="col d-flex flex-column justify-content-around results-text">
                <div class="w-100">
                    <results-wheel></results-wheel>
                </div>
                <div class="w-100">
                    <results-text></results-text>
                </div>
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
</template>

<script>
import WheelOfLifeSection from '~/components/WheelOfLifeSection'
import ResultsWheel from '~/components/ResultsWheel'
import ResultsText from '~/components/ResultsText'
export default {
    components: {
        WheelOfLifeSection,
        ResultsWheel,
        ResultsText
    },
    async asyncData({store}) {
        /**
         * Add the ability to load from the API here, just like in the beginning of the _stage pages
         */
        let {gameScores} = store.state.quest;
        // scores are from 0 to 10 so we map them to 0 to 100
        const wheelSections = [
            {value: gameScores.mindScore * 10, color: "#0059b9"},
            {value: gameScores.missionScore * 10, color: "#ff6800" },
            {value: gameScores.vitalityScore * 10, color: "#76b72b" },
            {value: gameScores.loveScore * 10, color: "#c22832" },
            {value: gameScores.funScore * 10, color: "#f9e777" },
            {value: gameScores.socialScore * 10, color: "#61a5e3" },
            {value: gameScores.homeScore * 10, color: "#72655f" },
            {value: gameScores.wealthScore * 10, color: "#c5c5c5" },
        ]
        return {
            wheelSections
        }
    }
}
</script>

<style scoped>
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
.p {
    width: 70vmin;
    height: 70vmin;
    position: relative;
    top: 0;
}
.results-text {
    height: 70vmin;
    padding-right: 8rem;
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