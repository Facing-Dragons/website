<template>
    <b-navbar 
        toggleable="sm" 
        variant="faded" 
        type="dark"
        fixed="top"
        class="d-flex"
    >
        <b-navbar-brand  
            href="#" 
            class="logo-container ml-3"
            @mouseenter="() => {this.isTitleShown = true}"
            @mouseleave="() => {this.isTitleShown = false}"
        >
            <img class="logo-img" src="~/assets/img/logo_white.png" alt="Facing Dragons">
            <transition name="go-left">
                <span v-show="isTitleShown" class="title">FACING DRAGONS</span>
            </transition>
        </b-navbar-brand>

        <b-navbar-toggle target="main-collapse"></b-navbar-toggle>

        <b-collapse id="main-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item href="#about-game-section" class="item">
                    Game
                </b-nav-item>
                <b-nav-item class="item" href="#team-section">
                    Team
                </b-nav-item>
                <b-nav-item class="item" href="#sponsors">
                    Sponsors
                </b-nav-item>
                <b-nav-item class="item" href="#dev-vlog">
                    VLogs
                </b-nav-item>
                <b-nav-item class="item" href="#contact">
                    Contact Us
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>    
</template>

<script>
export default {
    data() {
        return {
            isTitleShown: true
        }
    },
    created() {
        if (process.browser) {
            window.addEventListener('scroll', this.onScrollHandler)
        }
    },
    methods: {
        onScrollHandler() {
            if(window.scrollY > 400)
                this.isTitleShown = false;
            else if (window.screenY < 400)
                this.isTitleShown = true;
        }
    },
}
</script>

<style scoped>
    .logo-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .item {
        font-size: 1.6vw;
        color: white;
    }

    .logo-img {
        width: auto;
        height: 50px;
        margin-right: 1rem;
    }
    .title {
        font-weight: 500;
        font-size: calc(0.8rem + 1vw);
        color: #f77f00;
    }

    @media screen and (max-width: 360px) {
        .title {
            font-size: calc(0.5rem + 1vw);
        }
    }

    @media screen and (max-width: 575px) {
        .navbar-nav {
            background: #000;
            text-align: center;
            border-radius: 5px; 
        }

        .navbar-item, .item {
            font-size: calc(1rem + 0.5vw);
            padding-top: 1rem;
            padding-bottom: 1rem;
        }
    }

    .go-left-enter-active, .go-left-leave-active {
        transition: all .7s;
    }

    .go-left-enter, .go-left-leave-to {
        opacity: 0;
        transform: translateX(-10%);
    }
</style>