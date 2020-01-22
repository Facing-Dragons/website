<template>
    <div>
        <div class="overlay"></div>
        <div class="content">
            <div class="guidian-container">
                <img 
                    src="~/assets/img/guidian.png" 
                    alt="guidian"
                    height="20vh"
                    class="guidian"
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: ""
        }
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
        animation: popup 2s ease-in-out;
        animation-delay: 1s;
        position: absolute;
        top: 40%;
        right: 70%;
    }
    .guidian {
        height: 20vh;
        animation-name: float;
        animation-duration: 1s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation-delay: 2s;
    }
    @keyframes popup {
        from {
            transform: translateY(100vh);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
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
</style>