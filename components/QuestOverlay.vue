<template>
    <div>
        <div class="overlay"></div>
        <div class="content">
            <transition name="popup">
                <div v-if="isGuidianShown" class="guidian-container">
                    <img 
                        src="~/assets/img/guidian.png" 
                        alt="guidian"
                        height="20vh"
                        class="guidian"
                    >
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            isGuidianShown: false
        }
    },
    mounted() {
        setTimeout(() => {
            this.isGuidianShown = true;   
        }, 600);
    }
}
</script>

<style scoped>
    .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(39, 39, 39, 0.8);
        z-index: 2;
        transform: all 0.5s;
    }
    .content {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 3;
        display: flex;
        justify-content: center;
        align-content: center;
    }
    .guidian-container {
        position: absolute;
        top: 60%;
        left: 20%;
    }
    .guidian {
        height: 20vh;
        animation-name: float;
        animation-duration: 1s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation-delay: 2s;
    }
    @keyframes float {
        0% {
            transform: translatey(0px);
        }
        50% {
            transform: translatey(-20px);
        }
        100% {
            transform: translatey(0px);
        }
    }

    .popup-enter-active, .popup-leave-active {
       opacity: 1;
       transition: all 2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .popup-enter, .popup-leave-to /* .popup-leave-active below version 2.1.8 */ {
        transform: translateY(100vh);
        opacity: 0;
    }
</style>