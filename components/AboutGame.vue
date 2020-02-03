<template>
    <div class="container about-main-container mt-5">
        <div class="row mt-5">
            <div class="col-12 justify-content-center">
                <div class="video-frame rounded p-2">
                    <b-embed
                        type="iframe"
                        aspect="16by9"
                        src="https://www.youtube.com/embed/Pd8N8NEi6j4?rel=0"
                        allowfullscreen
                    ></b-embed>
                </div>
            </div>
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
        </div>
    </div>
</template>

<script>
import GameFeatureItem from '~/components/GameFeatureItem'
export default {
    components: {
        GameFeatureItem
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

<style scoped>
.video-frame {
    background: rgba(230, 230, 230, 0.5);
}
</style>