<template>
    <b-container
        class="game-description-container"
    >
        <div class="row mt-5 d-flex justify-content-around">
            <!-- <div class="d-none d-md-flex col-md-1">
                <div class="fancy-vertical-line"></div>
            </div> -->
            <div class="col-12 px-0 px-md-1 d-flex flex-column">
                <h3 class="text-3-title" id="game">
                    The Game
                </h3>
                <p class="text-3">
                    {{ messages[1][0] }}
                </p>
                <p class="text-3 mt-2">
                    {{ messages[1][1] }}
                </p>
            </div>
        </div>
    </b-container>
</template>

<script>
export default {
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
                    do group missions and keep each other accountable.
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
.text-3 {
    background-image: linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 0.1vw;
    font-size: calc(0.6rem + 0.3vw);
    font-weight: 500;
    text-align: justify;
}

.text-3-title {
    background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

#support {
    background-image: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: justify;
}

.fancy-vertical-line {
    height: 100%;
    width: 2px;
    background: linear-gradient(to bottom, black 0%, #92fe9d 25%, #00c9ff 75%, black 100%);
}
</style>