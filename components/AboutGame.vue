<template>
    <div class="team-section" :style="{background: tempBg}">
        <div class="temp-text">{{tempText}}</div>
    </div>    
</template>

<script>
export default {
    props: {
        tempText: String,
        tempBg: String
    }
}
</script>

<style scoped>
    .team-section {
        width: 100%;
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .temp-text {
        font-size: 1.6rem;
    }
</style>