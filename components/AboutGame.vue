<template>
    <div class="container about-main-container" id="about-game-section">
        <div class="row mt-2">
            <div class="col-12 justify-content-center video-col">
                <div class="video-frame rounded p-2">
                    <b-embed
                        type="iframe"
                        aspect="16by9"
                        src="https://www.youtube.com/embed/btjqB2RKAOU?rel=0"
                        allowfullscreen
                    ></b-embed>
                </div>
            </div>
            <section-title 
                right
                title-text="About The Game"
                text-gradient="linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);"
                line-gradient="linear-gradient(to right, black 0%, #f9d423 100%)"
            ></section-title>
            <div class="col-12 justify-content-between align-items-center game-features-section">
                <div class="row">
                    <div 
                        v-for="feature in gameFeatures"
                        :key="feature.name"
                        class="col-6 col-md-3"
                    >
                        <game-feature-item
                            :icon="feature.icon"
                            :title="feature.title"
                            :description="feature.desc"
                        ></game-feature-item>
                    </div>
                </div>
            </div>
            <game-description></game-description>
            <div class="col-12 justify-content-center align-items-center read-more-section mt-5">
                <div 
                    class="read-more-icon text-center"
                    @click="() => {this.isReadMoreOpen = !this.isReadMoreOpen}"    
                >
                    <div class="more">
                        {{ isReadMoreOpen ? 'Less' : 'More' }}
                    </div>
                    <div 
                        class="chevron-container"
                        :class="{'upside-down': isReadMoreOpen}"
                    >
                        <chevron-down :currentColor="'red'"></chevron-down>
                    </div>
                </div>
            </div>
            <b-collapse v-model="isReadMoreOpen" id="game-description">
                <more-description></more-description>
            </b-collapse>
        </div>
    </div>
</template>

<script>
import GameFeatureItem from '~/components/GameFeatureItem'
import SectionTitle from '~/components/SectionTitle'
import ChevronDown from '~/components/ChevronDown'
import GameDescription from '~/components/GameDescription'
import MoreDescription from '~/components/MoreDescription'


export default {
    components: {
        GameFeatureItem,
        SectionTitle,
        ChevronDown,
        MoreDescription,
        GameDescription
    },
    data() {
        const gameFeatures = [
            {
                name: "Portal Island",
                icon: "section_icon_Quest.png",
                title: "Real-World Quests",
                desc: "The eight key areas of life are represented by dragons who give players quests and challenges to complete in real life, based on tools used in coaching and counseling."
            },
            {
                name: "Mirrors",
                icon: "section_icon_Mirror.png",
                title: "Learn About Yourself",
                desc: "Learn more about yourself by gazing into mirrors that ask you questions, based on established psychometric instruments such as Big 5, and DISC."
            },
            {
                name: "Hall of Heroes",
                icon: "section_icon_Hall.png",
                title: "Hall <br> of Heroes",
                desc: "Meet and get quests from inspiring real-life people who have managed to face their dragons; such the MMA world champion from the jungles of Brazil."
            },
            {
                name: "Archives",
                icon: "section_icon_Archives.png",
                title: "Track Your Progress",
                desc: "You can keep track of your progress by visiting your private archives to see all your quests, goals, daily check ins, and mirror results."
            },
        ];
        return {
            gameFeatures,
            isReadMoreOpen: false
        }
    }
}
</script>

<style lang="scss" scoped>
$more-color: gray;

.about-main-container {
    margin-top: 20vw;
}

.video-col {
    margin-bottom: 10vw;
}

.upside-down {
    transform: rotate(180deg);
}

.video-frame {
    background: rgba(230, 230, 230, 0.5);
}

.read-more-section {
    max-height: 5vh;
    transition: 0.2s all ease-in-out;
    color: $more-color;
    &:hover {
        transform: scale(1.1);
        color: lighten($more-color, 20%);
        cursor: pointer;
    }
}
</style>