<template>
    <div class="container about-main-container" id="about-game-section">
        <div class="row mt-2">
            <div class="col-12 justify-content-center video-col">
                <div class="video-frame rounded p-2 p-relative">
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
            <div id="heroes" class="game-description container" v-b-visible="heroesVisibleHandler">
                <more-description
                    key="heroes-desc"
                    id="heroes-desc"
                    propBased
                    title="Heroes"
                    :external-messages="heroesMessages"
                    img="tory.png"
                ></more-description>
            </div>
            <game-description id="game-description-parent" v-b-visible="supportVisibleHandler"></game-description>
            <div id="gd" class="game-description container" v-b-visible="gameVisibleHandler">
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
                desc: "The eight key areas of life are represented by dragons, who give you quests and challenges to complete in the real world, based on established tools."
            },
            {
                name: "Mirrors",
                icon: "section_icon_Mirror.png",
                title: "Learn About <br> Yourself",
                desc: "Learn more about yourself by taking solo quests that ask you questions  based on established psychometric instruments such as Big 5, DISC, and Leadership Style."
            },
            {
                name: "Hall of Heroes",
                icon: "section_icon_Hall.png",
                title: "Hall <br> of Heroes",
                desc: "Discover heroic stories and get special quests from people who have faced their dragons in real life, such as MMA world champion, Bibiano Fernandes."
            },
            {
                name: "Archives",
                icon: "section_icon_Archives.png",
                title: "Track Your <br> Progress",
                desc: "Access your personal archives to see your private journal, goal progression, quest log, game-generated mood tracker, and personality test results."
            },
        ];
        const heroesMessages = [
            'Heroes are inspiring people who have faced their own dragons and achieved something epic. They are here to inspire you and give unique quests based on the challenges that they faced on their rise to greatness. Visit the Hall of Heroes where their origin stories are revealed. Each month after launch we will reveal a new Hero that will be featured in the game. They range from celebrities to everyday people from all walks of life, who have teamed up with Facing Dragons to support the mission and make a difference. <br><br> You could even become the next Hero! Become a Hero alongside <strong> Tory Lanez, Bibiano Fernandes and Steph Jeavons!</strong> ',
            `Tory Lanez went from homeless to debuting at #1 on Billboard, rising to become a multi-platinum hip hop recording artist. He is a two-time Juno Award winner and is nominated for a third in 2020. <br><br>
            His journey to the top is one of courage and a never-quit attitude. Tory and his dad, Sonstar, are launching their book 360 Phenomenon later this year. Their mission aligns perfectly with ours and we are excited to team up with them.`
        ]
        return {
            gameFeatures,
            heroesMessages,
            featureAnimation: '',
            supportAnimation: '',
            gameAnimation: '',
            heroesAnimation: ''
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
        var heroesAnimation = anime({
            targets: '#heroes',
            translateY: ['10vh', 0],
            opacity: [0, 1],
            easing: 'easeInOutSine',
            autoplay: false,
            duration: 600,
        });
        this.heroesAnimation = heroesAnimation;
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
            targets: '#gd',
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
            if(isVisible && !this.featureAnimation.began)
                this.featureAnimation.play();
        },
        supportVisibleHandler(isVisible) {
            if(isVisible && !this.supportAnimation.began)
                this.supportAnimation.play();
        },
        gameVisibleHandler(isVisible) {
            if(isVisible && !this.gameAnimation.began)
                this.gameAnimation.play();
        },
        heroesVisibleHandler(isVisible) {
            if(isVisible && !this.heroesAnimation.began)
                this.heroesAnimation.play();
        }
    }
}
</script>

<style lang="scss" scoped>

$more-color: gray;

.game-feature-item, #game-description-parent, #gd {
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