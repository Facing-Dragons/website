<template>
    <b-container
        class="game-description-container"
    >
        <div class="row mt-5 d-flex justify-content-around">
            <div class="col-12 col-lg-7 d-flex flex-column">
                <b-img fluid thumbnail rounded src="~/assets/img/support_hub.png"></b-img>
            </div>
            <div class="col-12 col-lg-5 d-flex flex-column mt-4 mt-lg-0">
                <h3 class="text-3-title" id="support">
                    Optional Counselling Support
                </h3>
                <p class="text-3">
                    {{ messages[2][0] }}
                </p>
                <p class="text-3 mt-2">
                    {{ messages[2][1] }}
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
                    The game connects players with varying levels of support and provides coaches, counsellors, and clinicians with a powerful tool to understand and engage their clients. Support Hub subscriptions are available to solo practitioners and institutions, providing an engaging way to connect with clients by inviting them to join and play Facing Dragons for free.
                `,
                `
                    The Support Hub allows professionals to view useful client metrics and stay in touch by scheduling appointments, sending notifications, and even suggesting quests to help guide players on their journey of personal growth.
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
    font-size: 1.2rem;
    font-weight: 400;
    color: #ebebeb;
}

.text-3-title {
    background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2rem;
}

#support {
    background-image: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.fancy-vertical-line {
    height: 100%;
    width: 2px;
    background: linear-gradient(to bottom, black 0%, #92fe9d 25%, #00c9ff 75%, black 100%);
}

@media screen and (max-width: 768px) {
    .text-3-title {
        font-size: 2.4rem;
    }
    .text-3 {
        font-size: 1.6rem;
    }
}
</style>