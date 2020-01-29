<template>
    <b-container fluid class="about-container-fluid">
        <img
            src="~/assets/img/torches_01.png"
            class="mountain-image d-none d-md-block"
        >
        <b-container 
            class="about-container"
        >
            <section-title 
                title-text="About The Game"
                text-gradient="linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);"
                line-gradient="linear-gradient(to right, black 0%, #f9d423 100%)"
            ></section-title>
            <div class="row">
                <div class="col-md-9 col-xs-12">
                    <video-container></video-container>
                </div>
                <div class="col-md-3 col-6">
                    <div class="text-1 mt-5 mt-md-0">
                        <p>
                        What if a <span id="game">game</span>  could support the next  
                        generation of <span id="young-adult">young adult leaders</span> and <span id="change">change</span> the world? 
                        </p>
                    </div>
                </div>
                <div class="col-6 col-md-5 text-2">
                    <p>
                        We believe we can harness the incredible technology that's 
                        already in their hands to empower them rather than consum them.
                    </p>
                    <div class="fancy-border"></div>
                </div>
            </div>
        </b-container>

    </b-container>
</template>

<script>
import SectionTitle from '~/components/SectionTitle';
import VideoContainer from '~/components/VideoContainer';
export default {
    components: {
        SectionTitle,
        VideoContainer
    },
    data() {
        const messages = [
            [
                `
                    What if a game could support the next generation of young adult leaders and change the world?
                `,
                `
                    We believe we can harness the incredible technology that's already in their hands to empower them 
                    rather than consum them.
                `
            ],
            [
                `
                    Facing Dragons gives the players in-game challenges and real-world quests, assiting
                    them to develop research-proven coping skills and helps them figure out what to do 
                    with their life. The eight key areas of life (relationship, mission,fun, health, mind, work, social,
                    and home) are represented by dragons that players face, and get quests from, to progress.
                `,
                `
                    The game guides young adults to face their dragons through a solo campaign and a quest mode with 
                    increasing challenge levels. Experienced players can join forces with a team of other players to 
                    do group missions and keep each other accountable
                `
            ],
            [
                `
                    The game links players with varying levels of support and provides coaches, counsellors and 
                    clinicians with a powerful tool to understand and engage their clients. Support Hub subscriptions 
                    are available to individuals and institutions, allowing them to provide an engaging way to connect 
                    with the young adults they care for by inviting them to join and play the game for free.
                `,
                `
                    The Support Hub allows subscribers to view useful client metrics and stay in touch by scheduling
                    face-to-face appointments, sending notifications and even suggesting quests to support players on
                    their journey of personal growth.
                `
            ]
        ];
        return {
            messages,
        }
    }
}
</script>

<style scoped>
.about-container-fluid {
    /* margin-top: 100vh; */
    min-height: 100vh;
    position: relative;
}

.animation-container {
    width: 50vw;
    height: 50vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: yellow;
    position: relative;
}

.mountain-image {
    position: absolute;
    width: 50vw;
    right: 0;
    bottom: 0;
}

.text-1, .text-2{
    background-image: linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 0.2vw;
    font-size: 1vw;
}

.text-2 {
    background-image: linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 14vh;
    font-size: 1.3vw;
    text-align: center;
}

#game {
    background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 4vw;
    line-height: 0.5;
}

#change {
    background-image: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 3vw;
    line-height: 0.7;
}

#young-adult {
    background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.5vw;
    line-height: 0.5;
}

@media screen and (max-width: 800px) {
    .text-1 {
        font-size: 4.5vw;
        text-align: center;
    }
    .text-2 {
        font-size: 4.6vw;
    }

    #change {
        font-size: 7vw;
    }

    #game {
        font-size: 5vw;
    }

    #young-adult {
        font-size: 4.5vw;
    }

}

.fancy-border {
    background: linear-gradient(to right, black 0%, #92fe9d 25%, #00c9ff 75%, black 100%);
    height: 2px;
    width: 100%;
}
</style>