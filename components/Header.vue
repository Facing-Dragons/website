<template>
    <b-navbar 
        toggleable="sm" 
        variant="faded" 
        fixed="top"
        class="d-flex navbar-main"
        type="dark"
    >
        <b-modal 
            id="kickstarterModal" 
            v-model="kickstarterModalShow"
            hide-header
            hide-footer
            centered 
            v-if="$device.isMobile"
            class="d-block d-md-none"
        >
            <div @click.stop="clickKickstarter" class="kickstarter-modal-content">
                <h2>SUPPORT US ON</h2>
                <img class="kickstarter-logo" src="~assets/img/kickstarter-logo-green.png" alt="Kickstarter Logo">
            </div>
        </b-modal>
        <transition name="fade-from-up">
            <button 
                v-if="isFirstQuestShown && !($device.isMobile && isTeamsVisible)" 
                class="quest-button btn p-2 btn-rounded text-light ml-auto"
                :class="{'iphone-quest-button': $device.isIos}"
                @click="handleScrollTopClick"
            >
                
                <span style="color: black">START YOUR QUEST!</span>
            </button>
        </transition>
        <b-navbar-brand  
            to="/" 
            class="logo-container ml-3"
            @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave"
        >
            <img class="logo-img" src="~/assets/img/logo_white.png" alt="Facing Dragons">
            <transition name="go-left">
                <span v-show="isTitleShown" class="title">FACING DRAGONS</span>
            </transition>
        </b-navbar-brand>
        
        <transition v-if="$device.isMobile" name="fade-from-up">
            <img id="k-logo" height="30px" @click="handleLogoClick" class="k-logo-nav ml-auto d-block d-md-none" src="~/assets/img/kickstarter-logo-k-green.png" alt="Kickstarter Logo">
        </transition>
        <b-navbar-toggle v-if="headerType !== 'quest'" target="main-collapse"></b-navbar-toggle>
        <b-collapse v-if="headerType !== 'quest'" id="main-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav pills v-b-scrollspy="200" class="d-block d-sm-flex align-items-center">
                    <b-nav-item href="#about-game-section" class="item">
                        Game
                    </b-nav-item>
                    <b-nav-item class="item" href="#team-section">
                        Team
                    </b-nav-item>
                    <b-nav-item class="item" href="#posts">
                        Posts
                    </b-nav-item>
                    <b-nav-item class="item" href="#sponsors">
                        Partners
                    </b-nav-item>
                    <b-nav-item class="item" href="#contact">
                        Contact
                    </b-nav-item>
                </b-nav>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>    
</template>

<script>
import {mapState} from 'vuex';
export default {
    props: {
        headerType: {
            type: String, 
            default: 'dark'
        },
        isSupport: {
            type: Boolean, 
            default: false
        }
    },
    data() {
        return {
            isTitleShown: true,
            isFirstQuestShown: false,
            kickstarterModalShow: false,
        }
    },
    created() {
        if (process.browser) {
            window.addEventListener('scroll', this.onScrollHandler)
        }
        setTimeout(() => {
            this.kickstarterModalShow = true;
        }, 4000);
    },
    computed: {
        ...mapState(['isTeamsVisible']),
    },
    methods: {
        handleLogoClick() {
            this.kickstarterModalShow = true;
        },
        onScrollHandler() {
            if(window.scrollY > 400)
                this.isTitleShown = false;
            else if (window.screenY < 400)
                this.isTitleShown = true;

            if(window.scrollY > 600) {
                this.isFirstQuestShown = true;
            }
            else if (window.screenY < 600) {
                this.isFirstQuestShown = false;
            }
        },
        handleMouseEnter() {
            if(window.scrollY > 400)
                this.isTitleShown = true;
        },
        handleMouseLeave() {
            if(window.scrollY > 400)
                this.isTitleShown = false;
        },
        handleScrollTopClick() {
            if (process.browser) {
                window.scroll(0, 0);
            }
        },
        clickKickstarter() {
           window.open('http://kck.st/3b45UZO', '_blank');
        }
    },
}
</script>

<style scoped>
    
    .kickstarter-modal-content {
        width: 100%;
        height: 100%;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .kickstarter-modal-content h2 {
        font-weight: 300;
        font-size: 2rem;
    }
    .kickstarter-logo {
        width: 80%;
        height: auto;
    }
    .k-logo-nav {
        animation-name: bounce;
        animation-timing-function: ease;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        backface-visibility: hidden;
    }
    @keyframes bounce {
        0%   { transform: scale(1,1)      translateY(0); }
        10%  { transform: scale(1.1,.9)   translateY(0); }
        30%  { transform: scale(.9,1.1)   translateY(-10px); }
        50%  { transform: scale(1.05,.95) translateY(0); }
        57%  { transform: scale(1,1)      translateY(-5px); }
        64%  { transform: scale(1,1)      translateY(0); }
        100% { transform: scale(1,1)      translateY(0); }
    }
    .quest-button {
        background:#f77f00;
        transition: .5s all ease-in-out;
        position: absolute;
        width: 100vw;
        right: 0;
        top: calc(100vh - 2.8rem);
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    .quest-button span {
        font-weight: 500;
        font-size: 1.2rem;
    }

    @media screen and (max-width: 768px) {
        .quest-button {
           top: calc(100vh - 4.25rem); 
        }
        .quest-button span {
            font-weight: 500;
            font-size: 2rem;
        }
    }

    .iphone-quest-button {
        position: fixed;
        top: unset;
        bottom: 0;
    }

    .quest-button:hover {
        background: #cf6b00;
        transition: .5s all ease-in-out;
    }



    .navbar-main {
        background: rgba(0, 0, 0, 0.5);
    }
    .logo-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .item {
        font-size: 1.2rem;
        text-transform: uppercase;
        margin-right: 0.7rem;
        margin-left: 0.7rem;
        color: white;
    }

    .item .btn {
        font-size: 1.1rem;
        outline: none; 
        border: none;
    }

    /* #support {
        background-image: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    } */

    .logo-img {
        width: auto;
        height: 50px;
        margin-right: 1rem;
    }
    .title {
        font-weight: 500;
        font-size: 1.8rem;
        color: #f77f00;
    }

    @media screen and (max-width: 575px) {
        .navbar-nav {
            background: #000;
            width: 100%;
            text-align: center;
            border-radius: 5px; 
        }

        .navbar-item, .item {
            font-size: 1.6rem;
            padding-top: 1rem;
            padding-bottom: 1rem;
        }

        .title {
            font-size: 1.3rem;
        }
    }

    .go-left-enter-active, .go-left-leave-active {
        transition: all .7s;
    }

    .go-left-enter, .go-left-leave-to {
        opacity: 0;
        transform: translateX(-10%);
    }

    .fade-from-up-enter-active, .fade-from-up-leave-active {
        transition: all .7s;
    }

    .fade-from-up-enter, .fade-from-up-leave-to {
        opacity: 0;
        transform: translateY(-10%);
    }
</style>