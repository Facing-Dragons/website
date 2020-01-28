<template>
    <b-container 
        class="about-container"
    >
        <section-title 
            title-text="About The Game"
            text-gradient="linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);"
            line-gradient="linear-gradient(to right, black 0%, #f9d423 100%)"
        ></section-title>
    </b-container>
</template>

<script>
import SectionTitle from '~/components/SectionTitle';
export default {
    components: {
        SectionTitle,
    },
    data() {
        const firstMessage = [
            `
                What if a game could support the next generation of young adult leader and change the world?
            `,
            `
                We believe we can harness the incredible technology that's already in their hands to empower them 
                rather than consum them.
            `
        ];
        const secondMessage = [
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
        ];
        const thirdMessage = [
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
        ];
        return {
            firstMessage, 
            secondMessage,
            thirdMessage
        }
    }
}
</script>

<style scoped>
.about-container {
    margin-top: 100vh;
}
</style>