<template>
    <div class="container about-main-container my-5">
        <div class="row mt-2">
            <div class="col-12 justify-content-center">
                <div class="video-frame rounded p-2">
                    <b-embed
                        type="iframe"
                        aspect="16by9"
                        src="https://www.youtube.com/embed/9Y_gZboNmso?rel=0"
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
                        class="col"
                    >
                        <game-feature-item
                            :icon="feature.icon"
                            :title="feature.title"
                            :description="feature.desc"
                        ></game-feature-item>
                    </div>
                </div>
            </div>
            <div class="col-12 justify-content-center align-items-center read-more-section">
                <div v-b-toggle.game-description class="read-more-icon text-center">
                    <div class="more">
                        More
                    </div>
                    <chevron-down :currentColor="'red'"></chevron-down>
                </div>
            </div>
            <b-collapse id="game-description">
                <game-description></game-description>
            </b-collapse>
        </div>
    </div>
</template>

<script>
import GameFeatureItem from '~/components/GameFeatureItem'
import SectionTitle from '~/components/SectionTitle'
import ChevronDown from '~/components/ChevronDown'
import GameDescription from '~/components/GameDescription'


export default {
    components: {
        GameFeatureItem,
        SectionTitle,
        ChevronDown,
        GameDescription
    },
    data() {
        const gameFeatures = [
            {
                name: "Portal Island",
                icon: "door-open",
                title: "Quests in the real world",
                desc: "Lorm Ipsum Lorem Ipsum! Lorm Ipsum Lorem Ipsum!Lorm Ipsum Lorem Ipsum!"
            },
            {
                name: "Archives",
                icon: "book-open",
                title: "Track Your Progress",
                desc: "blab la bla goals and progress! Lorm Ipsum Lorem Ipsum!"
            },
            {
                name: "Hall of Heroes",
                icon: "landmark",
                title: "Hall of Heroes",
                desc: "Discover the stories of real-life heroes. Such the MMA world champion from the jungles of Brazil"
            }
        ];
        return {
            gameFeatures
        }
    }
}
</script>

<style lang="scss" scoped>
$more-color: gray;

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