<template>
    <div class="container about-main-container" id="about-game-section">
        <div class="row mt-2">
            <div class="col-12 justify-content-center video-col">
                <div class="video-frame rounded p-2">
                    <b-embed
                        v-b-visible="visibleHandler"
                        type="iframe"
                        aspect="16by9"
                        src="https://www.youtube.com/embed/MRA9iJuIBok?rel=0"
                        allowfullscreen
                    ></b-embed>
                </div>
            </div>
            <section-title 
                right
                title-text="About"
                text-gradient="linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);"
                line-gradient="linear-gradient(to right, black 0%, #f9d423 100%)"
            ></section-title>
            <div class="col-12 justify-content-between align-items-center game-features-section" v-b-visible="featuresVisibleHandler">
                <div class="row">
                    <div 
                        v-for="feature in gameFeatures"
                        :key="feature.name"
                        class="col-12 col-sm-6 col-lg-3"
                    >
                        <game-feature-item
                            class="game-feature-item"
                            :icon="feature.icon"
                            :title="feature.title"
                            :description="feature.desc"
                        ></game-feature-item>
                    </div>
                </div>
            </div>
            <game-description id="game-description-parent" v-b-visible="supportVisibleHandler"></game-description>
            <div class="game-description container" v-b-visible="gameVisibleHandler">
                <more-description></more-description>
            </div>
        </div>
    </div>
</template>

<script>
import GameFeatureItem from '~/components/GameFeatureItem'
import SectionTitle from '~/components/SectionTitle'
import ChevronDown from '~/components/ChevronDown'
import GameDescription from '~/components/GameDescription'
import MoreDescription from '~/components/MoreDescription'
import anime from 'animejs/lib/anime.es.js';

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
                title: "Real-World <br> Quests",
                desc: "The eight key areas of life are represented by dragons who give players quests and challenges to complete in real life, based on tools used in coaching and counseling."
            },
            {
                name: "Mirrors",
                icon: "section_icon_Mirror.png",
                title: "Learn About <br> Yourself",
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
                title: "Track Your <br> Progress",
                desc: "You can keep track of your progress by visiting your private archives to see all your quests, goals, daily check ins, and mirror results."
            },
        ];
        return {
            gameFeatures,
            featureAnimation: '',
            supportAnimation: '',
            gameAnimation: ''
        }
    },
    mounted() {
        var featureAnimation = anime({
            targets: '.game-feature-item',
            translateY: ['10vh', 0],
            opacity: [0, 1],
            easing: 'easeInOutSine',
            autoplay: false,
            duration: 400,
            delay: anime.stagger(400)
        });
        this.featureAnimation = featureAnimation;
        var supportAnimation = anime({
            targets: '#game-description-parent',
            translateY: ['10vh', 0],
            opacity: [0, 1],
            easing: 'easeInOutSine',
            autoplay: false,
            duration: 600,
        });
        this.supportAnimation = supportAnimation;
        var gameAnimation = anime({
            targets: '.game-description-container',
            translateY: ['10vh', 0],
            opacity: [0, 1],
            easing: 'easeInOutSine',
            autoplay: false,
            duration: 600,
            delay: 600,
        });
        this.gameAnimation = gameAnimation;
    },
    methods: {
        visibleHandler(isVisible) {
            this.$emit('videoVisible', isVisible);
        },
        featuresVisibleHandler(isVisible) {
            if(isVisible && !this.featureAnimation.completed)
                this.featureAnimation.play();
        },
        supportVisibleHandler(isVisible) {
            if(isVisible && !this.supportVisibleHandler.completed)
                this.supportVisibleHandler.play();
        },
        gameVisibleHandler(isVisible) {
            if(isVisible && !this.gameAnimation.completed)
                this.gameAnimation.play();
        }
    }
}
</script>

<style lang="scss" scoped>
$more-color: gray;

.game-feature-item, #game-description-parent, .game-description-container {
    opacity: 0;
}

.game-

.about-main-container {
    margin-top: 20rem;
}

.video-col {
    margin-bottom: 10rem;
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