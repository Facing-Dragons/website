<template>
    <other-chevron-down 
        class="animating-arrow-down bounce-7"
    ></other-chevron-down>
</template>

<script>
import OtherChevronDown from '~/components/OtherChevronDown'
export default {
    components: {
        OtherChevronDown
    }
}
</script>

<style scoped>
    .animating-arrow-down {
        animation-duration: 2s;
        animation-iteration-count: infinite;
        color: #ebebeb;
        font-size: 1.4rem;
    }
    .bounce-7 {
        animation-name: bounce-7;
        animation-timing-function: cubic-bezier(0.280, 0.840, 0.420, 1);
    }
    @keyframes bounce-7 {
        0%   { transform: scale(1,1)      translateY(0); }
        10%  { transform: scale(1.1,.9)   translateY(0); }
        30%  { transform: scale(.9,1.1)   translateY(-20px); }
        50%  { transform: scale(1.05,.95) translateY(0); }
        57%  { transform: scale(1,1)      translateY(-7px); }
        64%  { transform: scale(1,1)      translateY(0); }
        100% { transform: scale(1,1)      translateY(0); }
    }
</style>