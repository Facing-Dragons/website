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
        background: rgba(230, 230, 230, 0.5);
        z-index: 2;
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
        animation: popup 1s ease-in-out;
    }
    .guidian {
        animation-name: float;
        animation-duration: 1s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation-delay: 2s;
    }
    @keyframes popup {
        from {
            transform: translateY(-100vh);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    @keyframes float {
        0% {
            box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
            transform: translatey(0px);
        }
        50% {
            box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
            transform: translatey(-20px);
        }
        100% {
            box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
            transform: translatey(0px);
}
    }
</style>