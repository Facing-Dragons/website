<template>
    <b-navbar 
        toggleable="sm" 
        variant="faded" 
        :type="headerType"
        fixed="top"
        class="d-flex navbar-main"
    >
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

        <b-navbar-toggle target="main-collapse"></b-navbar-toggle>

        <b-collapse id="main-collapse" is-nav>
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
                <!-- <b-nav-item v-if="!isSupport" class="item d-none d-md-block" to="/support" id="support">
                    <button class="btn p-2 btn-rounded btn-success text-light">
                        For Support Workers
                    </button> -->
                    <!-- For Support Workers -->
                <!-- </b-nav-item> -->
            </b-navbar-nav>
        </b-collapse>
        <!-- <button class="btn p-2 btn-rounded btn-success text-light ml-auto d-block d-md-none">
            For Support Workers
        </button> -->
    </b-navbar>    
</template>

<script>
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
        },
        handleMouseEnter() {
            if(window.scrollY > 400)
                this.isTitleShown = true;
        },
        handleMouseLeave() {
            if(window.scrollY > 400)
                this.isTitleShown = false;
        }
    },
}
</script>

<style scoped>
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
    }

    .go-left-enter-active, .go-left-leave-active {
        transition: all .7s;
    }

    .go-left-enter, .go-left-leave-to {
        opacity: 0;
        transform: translateX(-10%);
    }
</style>