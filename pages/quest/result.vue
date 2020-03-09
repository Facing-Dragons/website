<template>
    <div class="container-fluid bg-light d-flex flex-column justify-content-center">
        <!-- MOBILE BUTTONS -->
        <div v-if="$device.isMobileOrTablet" class="d-flex d-xl-none button-container-mobile">
            <button @click="handleShare" class="rounded-top custom-button w-50 p-2">
                SHARE
            </button>
            <button @click="() => $router.replace('/quest')" class="rounded-top custom-button w-50">
                PLAY AGAIN!
            </button>
        </div>
        <!-- END OF MOBILE BUTTONS -->
        <div class="row justify-content-center">
            <div class="col-12 col-xl-6 wrapper-col align-items-center align-items-xl-end justify-content-center justify-content-xl-end d-flex flex-column">
                <div v-if="$device.isMobileOrTablet" class="d-flex d-xl-none w-100 title-mobile">
                    <results-wheel></results-wheel>
                </div>
                <div class="p">
                    <div 
                        class="wrapper"
                        v-for="(s, i) in wheelSections"
                        :key="i"
                    >
                        <wheel-of-life-section 
                            class="section" 
                            :current-value="s.value"
                            :mainColor="s.color"
                            :style="{transform: `rotate(${45 * i}deg)`}"
                        >
                        </wheel-of-life-section>
                    </div>
                    <div class="wheel-image-container">
                        <img src="~/assets/img/wheel/HEAD1.png" alt="wheel of life" class="wheel-frame-image">
                    </div>
                </div>
                <div v-if="$device.isMobileOrTablet" class="w-100 d-block d-xl-none character-title-mobile text-center">
                    <!-- <space-pirate-mobile></space-pirate-mobile> -->
                    <h4>YOU ARE THE </h4>
                    <h1>
                        {{ resultTitle }}
                    </h1>
                    <h3>
                        {{ resultSlogan }}
                    </h3>
                </div>
            </div>
            <!-- This won't be shown in mobile devices -->
            <div class="col d-none d-xl-flex flex-column justify-content-around results-text">
                <div class="w-100">
                    <results-wheel></results-wheel>
                </div>
                <div class="w-100 character-title">
                    <h4>YOU ARE THE </h4>
                    <h1>
                        {{ resultTitle }}
                    </h1>
                    <h3>
                        {{ resultSlogan }}
                    </h3>
                    <!-- <space-pirate-text></space-pirate-text> -->
                </div>
                <div class="w-100">
                    <results-text></results-text>
                    <div class="button-container d-flex justify-content-between">
                        <button @click="handleShare" class="rounded custom-button p-2 mr-2">
                            SHARE
                        </button>
                        <button @click="() => $router.replace('/quest')" class="rounded custom-button">
                            PLAY AGAIN!
                        </button>
                    </div>
                </div>
            </div>
            <b-modal 
                id="modalPopover" 
                title="Modal with Popover"
                v-model="modalShow"
                hide-header
                hide-footer 
            >
                <div class="social-section">
                    <social-sharing :url="`https://v2.facingdragons.com/quest/share?uid=${uid}`"
                        title="Facing Dragons - Life Wheel Quest"
                        description="Intuitive, Fast and Composable MVVM for building interactive interfaces."
                        quote="Vue is a progressive framework for building user interfaces."
                        hashtags="vuejs,javascript,framework"
                        twitter-user="vuejs"
                        inline-template>
                        <div>
                                <div class="test">
                                    <font-awesome-icon :icon="['fas', 'envelope']"></font-awesome-icon> Email
                                </div>
                                <network network="facebook">
                                    <font-awesome-icon :icon="['fab', 'facebook']"></font-awesome-icon> Facebook
                                </network>
                                <network network="linkedin">
                                    <font-awesome-icon :icon="['fab', 'linkedin']"></font-awesome-icon> LinkedIn
                                </network>
                                <network network="pinterest">
                                    <font-awesome-icon :icon="['fab', 'pinterest']"></font-awesome-icon> Pinterest
                                </network>
                                <network network="reddit">
                                    <font-awesome-icon :icon="['fab', 'reddit']"></font-awesome-icon> Reddit
                                </network>
                                <network network="skype">
                                    <font-awesome-icon :icon="['fab', 'skype']"></font-awesome-icon> Skype
                                </network>
                                <network network="sms">
                                    <font-awesome-icon :icon="['fab', 'commenting']-o"></font-awesome-icon> SMS
                                </network>
                                <network network="telegram">
                                    <font-awesome-icon :icon="['fab', 'telegram']"/> Telegram
                                </network>
                                <network network="twitter">
                                    <font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon> Twitter
                                </network>
                                <network network="vk">
                                    <font-awesome-icon :icon="['fab', 'vk']"></font-awesome-icon> VKontakte
                                </network>
                                <network network="whatsapp">
                                    <font-awesome-icon :icon="['fab', 'whatsapp']"></font-awesome-icon> Whatsapp
                                </network>
                        </div>
                        </social-sharing>
                </div>
            </b-modal>
            <!-- This will be shown in MOBILE devices -->
            <div v-if="$device.isMobileOrTablet" class="col-12 d-flex d-xl-none flex-column justify-content-around results-text-mobile">
                <div class="social-section">
                    <social-sharing :url="`https://v2.facingdragons.com/quest/share?uid=${uid}`"
                      title="Facing Dragons - Life Wheel Quest"
                      description="Intuitive, Fast and Composable MVVM for building interactive interfaces."
                      quote="Vue is a progressive framework for building user interfaces."
                      hashtags="vuejs,javascript,framework"
                      twitter-user="vuejs"
                      inline-template>
                        <div>
                            <network network="email">
                                <div class="test">
                                    <font-awesome-icon :icon="['fas', 'envelope']"></font-awesome-icon> Email
                                </div>
                            </network>
                            <network network="facebook">
                                <font-awesome-icon :icon="['fab', 'facebook']"></font-awesome-icon> Facebook
                            </network>
                            <network network="linkedin">
                                <font-awesome-icon :icon="['fab', 'linkedin']"></font-awesome-icon> LinkedIn
                            </network>
                            <network network="pinterest">
                                <font-awesome-icon :icon="['fab', 'pinterest']"></font-awesome-icon> Pinterest
                            </network>
                            <network network="reddit">
                                <font-awesome-icon :icon="['fab', 'reddit']"></font-awesome-icon> Reddit
                            </network>
                            <network network="skype">
                                <font-awesome-icon :icon="['fab', 'skype']"></font-awesome-icon> Skype
                            </network>
                            <network network="sms">
                                <font-awesome-icon :icon="['fab', 'commenting']-o"></font-awesome-icon> SMS
                            </network>
                            <network network="telegram">
                                <font-awesome-icon :icon="['fab', 'telegram']"/> Telegram
                            </network>
                            <network network="twitter">
                                <font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon> Twitter
                            </network>
                            <network network="vk">
                                <font-awesome-icon :icon="['fab', 'vk']"></font-awesome-icon> VKontakte
                            </network>
                            <network network="whatsapp">
                                <font-awesome-icon :icon="['fab', 'whatsapp']"></font-awesome-icon> Whatsapp
                            </network>
                        </div>
                        </social-sharing>
                </div>
                <div class="w-100">
                    <results-text></results-text>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import WheelOfLifeSection from '~/components/WheelOfLifeSection'
import ResultsWheel from '~/components/ResultsWheel'
import ResultsText from '~/components/ResultsText'
import SpacePirateText from '~/components/SpacePirateText'
import SpacePirateMobile from '~/components/SpacePirateMobile'
import SocialSharing from 'vue-social-sharing'
import {mapState} from 'vuex'

export default {
    layout: 'quest',
    components: {
        WheelOfLifeSection,
        ResultsWheel,
        ResultsText,
        SpacePirateText,
        SpacePirateMobile,
        SocialSharing
    },
    data() {
        const networkItemStyle = {
            width: '20',
            height: 'auto',
            padding: '1rem',
            fontSize: '2rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
        return {
            modalShow: false,
            networkItemStyle
        }
    },  
    async asyncData({store}) {
        /**
         * Add the ability to load from the API here, just like in the beginning of the _stage pages
         */
        let {gameScores} = store.state.quest;
        if(store.state.quest.user.uid)
            store.commit('quest/setPlayerText');
        // scores are from 0 to 10 so we map them to 0 to 100
        // const wheelSections = [
        //     {value: gameScores.mission * 10, color: "#ff6800" },
        //     {value: gameScores.mind * 10, color: "#0059b9"},
        //     {value: gameScores.fun * 10, color: "#f9e777" },
        //     {value: gameScores.social * 10, color: "#61a5e3" },
        //     {value: gameScores.home * 10, color: "#72655f" },
        //     {value: gameScores.love * 10, color: "#c22832" },
        //     {value: gameScores.wealth * 10, color: "#c5c5c5" },
        //     {value: gameScores.vitality * 10, color: "#76b72b" },
        // ]
        // return {
        //     wheelSections
        // }
    },
    computed: {
        ...mapState({
            resultSlogan: state => state.quest.resultSlogan,
            resultTitle: state => state.quest.resultTitle,
            uid: state => state.authUser.uid,
            wheelSections: state => {
                return [
                    {value: state.quest.gameScores.mission * 10, color: "#ff6800" },
                    {value: state.quest.gameScores.mind * 10, color: "#0059b9"},
                    {value: state.quest.gameScores.fun * 10, color: "#f9e777" },
                    {value: state.quest.gameScores.social * 10, color: "#61a5e3" },
                    {value: state.quest.gameScores.home * 10, color: "#72655f" },
                    {value: state.quest.gameScores.love * 10, color: "#c22832" },
                    {value: state.quest.gameScores.wealth * 10, color: "#c5c5c5" },
                    {value: state.quest.gameScores.vitality * 10, color: "#76b72b" },
                ];
            }
        })
    },
    methods: {
        handleShare() {
            this.modalShow = true;
            this.$store.dispatch('quest/allowSharing');
        }
    }
}
</script>

<style lang="scss" scoped>
.container-fluid {
    min-height: 100vh;
}
.section {
    /* position: absolute;
    top: 55px; */
}
.wrapper {
   position: absolute;
   width: 100%;
   height: 100%;
   border: 2px solid;
   border-radius: 50%;
} 
// THIS IS JUST FOR DESKTOP .... MEDIA QUERIES NEEDED FOR MOBILE
.wrapper-col {
    height: 75vh;

    @media screen and (max-width: 1200px) {
        height: 82vh;
        top: 0;
    }
}
.title-mobile {
    margin-bottom: 39vh;
    padding-right: 5vw;
    padding-left: 5vw;
}

.social-section {
    bottom: 0;
    padding: 4rem;

}

.test {
        width: 20%;
        height: auto;
        padding: 1rem;
        font-size: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

.p {
    width: 60vmin;
    height: 60vmin;
    position: relative;
    top: 0;

    @media screen and (max-width: 1200px) {
        position: absolute;
        top: 30vmin;
        transform: scale(0.8);
    }
    @media screen and (max-width: 576px) {
        position: absolute;
        top: 43vmin;
        transform: scale(1);
    }
    
}
.wheel-image-container {
    position: absolute;
    z-index: 11;
    top: -13.5vmin;
    left: -10vmin;
}
.wheel-frame-image {
    width: 78vmin;
    height: 78vmin;
}
.results-text {
    height: 75vmin;
    padding-right: 7rem;
    padding-left: 7rem;
}
.results-text-mobile {
    padding-right: 2rem;
    padding-left: 2rem;
    padding-bottom: 20vh;
    margin-top: 20vh;
}

.character-title {
    margin-top: 2rem;
    text-align: center;
    h1 {
        font-size: 1.8rem;
        font-weight: 700;
        margin: 0;
    }
    h2 {
        font-size: 1.2rem;
    }
    h4 {
        font-size: 1rem;
        margin: 0;
    }

    @media screen and (min-width: 1500px) {
        h1 {
            font-size: 5rem;
        }
        h2 {
            font-size: 3rem;
        }
    }
}

.character-title-mobile {
    height: 20vh;
    padding-top: 10vh;
    word-break: break-word;

    @media screen and (min-width: 577px) {
        padding-top: 15vh;
    }

    h1 {
        font-size: 3.5rem;
        font-weight: 700;
        text-transform: capitalize;
    }

    h2 {
        text-transform: capitalize;
    }
    @media screen and (max-width: 576px) {
        h1 {
            font-size: 2.5rem;
        }
    }

}

.button-container-mobile {
    position: fixed;
    height: 8vh;
    width: 100vw;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 12;
}
.custom-button {
  transition: 0.3s all ease-in-out;
  font-size: 1.5rem;
  font-weight: 700;
  background: #f9b038;
  color: #303030;
  border: none;
  outline: none;
  width: 48%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.custom-button:hover {
  color: #1f1f1f;
  background: #e26e0a;
}
</style>