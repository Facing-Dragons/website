<template>
    <b-container
        class="game-description-container"
    >
        <div class="row mt-5 d-flex justify-content-around">
            <!-- <div class="d-none d-md-flex col-md-1">
                <div class="fancy-vertical-line"></div>
            </div> -->
            <div v-if="propBased" class="col-12 py-2">
                <h3 class="text-3-title" id="game">
                    Heroes
                </h3>
                <p class="text-3" v-html="externalMessages[0]"></p>
            </div>
            <div v-if="propBased" class="col-12 col-md-6 px-0 px-md-1 pt-2 order-md-6">
                <img class="main-image" :src="`${require(`~/assets/img/tory.png`)}`" alt="">
            </div>
            <div  v-if="propBased" class="col-12 col-md-6 pl-2 order-md-1">
                <p class="text-3" v-html="externalMessages[1]"></p>
            </div>


            <div v-if="!propBased" class="col-12 px-0 px-md-1 d-flex flex-column">
                <h3 class="text-3-title" id="game">
                    The Game
                </h3>
                <p class="text-3">
                    {{
                        messages[1][0] 
                    }}
                </p>
                <p class="text-3 mt-2">
                    {{
                        messages[1][1]
                    }}
                </p>
            </div>
        </div>
    </b-container>
</template>

<script>
export default {
    props: {
        externalMessages: {
            type: [Object, Array],
            default: []
        },
        title: String,
        propBased: {
            type: Boolean,
            default: false
        },
        img: String,
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
                    Meet your Guidian! This cute little companion will introduce you to the eight dragons who embody the 8 Key Areas of Life: Mission, Mind, Money, Vitality, Love, Fun, Social and Home. 
                `,
                `
                    Your dragons help you develop coping skills, self-awareness and confidence by giving you quests to complete in the real world. As you gain experience, you have the option to join forces with other players for mythic-level quests to figure out what to do with your life and achieve your biggest goals.
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
.main-image {
    width: 100%;
    height: auto;
}
.text-3 {
    font-size: 1.2rem;
    font-weight: 400;
    color: #ebebeb;
}

.text-3-title {
    font-size: 2rem;
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

@media screen and (max-width: 768px) {
    .text-3-title {
        font-size: 2.4rem;
    }
    .text-3 {
        font-size: 1.6rem;
    }
}
</style>